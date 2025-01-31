</script>
		<script src="/plugin/markdown/marked.js">
		(function() {

			var notes,
				notesValue,
				currentState,
				currentSlide,
				upcomingSlide,
				layoutLabel,
				layoutDropdown,
				connected = false;

			var socket = io.connect( window.location.origin ),
				socketId = '{{socketId}}';

			var SPEAKER_LAYOUTS = {
				'default': 'Default',
				'wide': 'Wide',
				'tall': 'Tall',
				'notes-only': 'Notes only'
			};

			socket.on( 'statechanged', function( data ) {

				// ignore data from sockets that aren't ours
				if( data.socketId !== socketId ) { return; }

				if( connected === false ) {
					connected = true;

					setupKeyboard();
					setupNotes();
					setupTimer();

				}

				handleStateMessage( data );

			} );

			setupLayout();

			// Load our presentation iframes
			setupIframes();

			// Once the iframes have loaded, emit a signal saying there's
			// a new subscriber which will trigger a 'statechanged'
			// message to be sent back
			window.addEventListener( 'message', function( event ) {

				var data = JSON.parse( event.data );

				if( data && data.namespace === 'reveal' ) {
					if( /ready/.test( data.eventName ) ) {
						socket.emit( 'new-subscriber', { socketId: socketId } );
					}
				}

				// Messages sent by reveal.js inside of the current slide preview
				if( data && data.namespace === 'reveal' ) {
					if( /slidechanged|fragmentshown|fragmenthidden|overviewshown|overviewhidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
						socket.emit( 'statechanged-speaker', { state: data.state } );
					}
				}

			} );

			/**
			 * Called when the main window sends an updated state.
			 */
			function handleStateMessage( data ) {

				// Store the most recently set state to avoid circular loops
				// applying the same state
				currentState = JSON.stringify( data.state );

				// No need for updating the notes in case of fragment changes
				if ( data.notes ) {
					notes.classList.remove( 'hidden' );
					if( data.markdown ) {
						notesValue.innerHTML = marked( data.notes );
					}
					else {
						notesValue.innerHTML = data.notes;
					}
				}
				else {
					notes.classList.add( 'hidden' );
				}

				// Update the note slides
				currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
				upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
				upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

			}

			// Limit to max one state update per X ms
			handleStateMessage = debounce( handleStateMessage, 200 );

			/**
			 * Forward keyboard events to the current slide window.
			 * This enables keyboard events to work even if focus
			 * isn't set on the current slide iframe.
			 */
			function setupKeyboard() {

				document.addEventListener( 'keydown', function( event ) {
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
				} );

			}

			/**
			 * Creates the preview iframes.
			 */
			function setupIframes() {

				var params = [
					'receiver',
					'progress=false',
					'history=false',
					'transition=none',
					'backgroundTransition=none'
				].join( '&' );

				var currentURL = '/?' + params + '&postMessageEvents=true';
				var upcomingURL = '/?' + params + '&controls=false';

				currentSlide = document.createElement( 'iframe' );
				currentSlide.setAttribute( 'width', 1280 );
				currentSlide.setAttribute( 'height', 1024 );
				currentSlide.setAttribute( 'src', currentURL );
				document.querySelector( '#current-slide' ).appendChild( currentSlide );

				upcomingSlide = document.createElement( 'iframe' );
				upcomingSlide.setAttribute( 'width', 640 );
				upcomingSlide.setAttribute( 'height', 512 );
				upcomingSlide.setAttribute( 'src', upcomingURL );
				document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

			}

			/**
			 * Setup the notes UI.
			 */
			function setupNotes() {

				notes = document.querySelector( '.speaker-controls-notes' );
				notesValue = document.querySelector( '.speaker-controls-notes .value' );

			}

			/**
			 * Create the timer and clock and start updating them
			 * at an interval.
			 */
			function setupTimer() {

				var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' );

				function _updateTimer() {

					var diff, hours, minutes, seconds,
						now = new Date();

					diff = now.getTime() - start.getTime();
					hours = Math.floor( diff / ( 1000 * 60 * 60 ) );
					minutes = Math.floor( ( diff / ( 1000 * 60 ) ) % 60 );
					seconds = Math.floor( ( diff / 1000 ) % 60 );

					clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
					hoursEl.innerHTML = zeroPadInteger( hours );
					hoursEl.className = hours > 0 ? '' : 'mute';
					minutesEl.innerHTML = ':' + zeroPadInteger( minutes );
					minutesEl.className = minutes > 0 ? '' : 'mute';
					secondsEl.innerHTML = ':' + zeroPadInteger( seconds );

				}

				// Update once directly
				_updateTimer();

				// Then update every second
				setInterval( _updateTimer, 1000 );

				timeEl.addEventListener( 'click', function() {
					start = new Date();
					_updateTimer();
					return false;
				} );

			}

			/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( window.localStorage ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( window.localStorage ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

			function zeroPadInteger( num ) {

				var str = '00' + parseInt( num );
				return str.substring( str.length - 2 );

			}

			/**
			 * Limits the frequency at which a function can be called.
			 */
			function debounce( fn, ms ) {

				var lastTime = 0,
					timeout;

				return function() {

					var args = arguments;
					var context = this;

					clearTimeout( timeout );

					var timeSinceLastCall = Date.now() - lastTime;
					if( timeSinceLastCall > ms ) {
						fn.apply( context, args );
						lastTime = Date.now();
					}
					else {
						timeout = setTimeout( function() {
							fn.apply( context, args );
							lastTime = Date.now();
						}, ms - timeSinceLastCall );
					}

				}

			}

		})();
		