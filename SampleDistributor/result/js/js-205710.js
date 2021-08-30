
                        ## Demo 1
                        Slide 1
                        ---
                        ## Demo 1
                        Slide 2
                        ---
                        ## Demo 1
                        Slide 3
                    
                        ## Demo 2
                        Slide 1.1

                        --

                        ## Demo 2
                        Slide 1.2

                        ---

                        ## Demo 2
                        Slide 2
                    
                        A

                        ---

                        B

                        ---

                        C
                    
                        <!-- .slide: data-background="#000000" -->
                        ## Slide attributes
                    
                        ## Element attributes
                        - Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
                        - Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->
                    
                        ```php
                        public function foo()
                        {
                            $foo = array(
                                'bar' => 'bar'
                            )
                        }
                        ```
                    </script>
		<script src="../../js/reveal.js">

			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				// Optional libraries used to extend on reveal.js
				dependencies: [
					{ src: '../../lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: 'markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: '../highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: '../notes/notes.js' }
				]
			});

		