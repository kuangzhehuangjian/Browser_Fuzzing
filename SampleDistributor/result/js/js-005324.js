
			var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );
		</script>
		<![endif]-->
	</head>

	<body>

		<div class="reveal">

			<!-- Any section element inside of this container is displayed as a slide -->
			<div class="slides">
				<section>
					<h1>Reveal.js</h1>
					<h3>The HTML Presentation Framework</h3>
					<p>
						<small>Created by <a href="http://hakim.se">Hakim El Hattab</a> and <a href="https://github.com/hakimel/reveal.js/graphs/contributors">contributors</a></small>
					</p>
				</section>

				<section>
					<h2>Hello There</h2>
					<p>
						reveal.js enables you to create beautiful interactive slide decks using HTML. This presentation will show you examples of what it can do.
					</p>
				</section>

				<!-- Example of nested vertical slides -->
				<section>
					<section>
						<h2>Vertical Slides</h2>
						<p>Slides can be nested inside of each other.</p>
						<p>Use the <em>Space</em> key to navigate through all slides.</p>
						<br>
						<a href="#" class="navigate-down">
							<img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
						</a>
					</section>
					<section>
						<h2>Basement Level 1</h2>
						<p>Nested slides are useful for adding additional detail underneath a high level horizontal slide.</p>
					</section>
					<section>
						<h2>Basement Level 2</h2>
						<p>That's it, time to go back up.</p>
						<br>
						<a href="#/2">
							<img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style="transform: rotate(180deg); -webkit-transform: rotate(180deg);">
						</a>
					</section>
				</section>

				<section>
					<h2>Slides</h2>
					<p>
						Not a coder? Not a problem. There's a fully-featured visual editor for authoring these, try it out at <a href="https://slides.com" target="_blank">https://slides.com</a>.
					</p>
				</section>

				<section>
					<h2>Point of View</h2>
					<p>
						Press <strong>ESC</strong> to enter the slide overview.
					</p>
					<p>
						Hold down alt and click on any element to zoom in on it using <a href="http://lab.hakim.se/zoom-js">zoom.js</a>. Alt + click anywhere to zoom back out.
					</p>
				</section>

				<section>
					<h2>Touch Optimized</h2>
					<p>
						Presentations look great on touch devices, like mobile phones and tablets. Simply swipe through your slides.
					</p>
				</section>

				<section data-markdown>
					<script type="text/template">
						## Markdown support

						Write content using inline or external Markdown.
						Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).

						```
						<section data-markdown>
						  ## Markdown support

						  Write content using inline or external Markdown.
						  Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).
						</section>
						```
					</script>
		<script src="js/reveal.js">

			// More info https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				transition: 'slide', // none/fade/slide/convex/concave/zoom

				// More info https://github.com/hakimel/reveal.js#dependencies
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'plugin/search/search.js', async: true },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/notes/notes.js', async: true }
				]
			});

		