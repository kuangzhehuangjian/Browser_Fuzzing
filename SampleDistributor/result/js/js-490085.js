</script> -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="./../static/tipuesearch/css/normalize.min.css">
        <script src="./../static/tipuesearch/tipuesearch_set.js"></script>
        <link rel="stylesheet" href="./../static/tipuesearch/css/tipuesearch.css">
        <script src="./../static/tipuesearch/tipuesearch.js">
            /* original tipuesearch
            $(document).ready(function() {
                 $('#tipue_search_input').tipuesearch();
            });
            */
            // customed doSearch
            function doSearch() {
                $('#tipue_search_input').tipuesearch({
                    newWindow: true, 
                    minimumLength: 2,
                    wholeWords: false, // for search 中文
                });
            }
            $(document).ready(doSearch);
        </script>
<script type="text/javascript" src="./../static/syntaxhighlighter/shBrushJScript.js"></script>
<script type="text/javascript" src="./../static/syntaxhighlighter/shBrushPython.js"></script>
<script type="text/javascript" src="./../static/syntaxhighlighter/shBrushXml.js"></script>
<script type="text/javascript" src="./../static/syntaxhighlighter/shBrushLua.js"></script>
<script type="text/javascript" src="./../static/syntaxhighlighter/shBrushCss.js"></script>
<link type="text/css" rel="stylesheet" href="./../static/syntaxhighlighter/css/shCoreDefault.css"/>
<script type="text/javascript">SyntaxHighlighter.all();</script>
<script type="text/javascript">
init_mathjax = function() {
    if (window.MathJax) {
        // MathJax loaded
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
            },
            displayAlign: 'left', // Change this to 'center' to center equations.
            "HTML-CSS": {
                styles: {'.MathJax_Display': {"margin": 0}}
            }
        });
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}
init_mathjax();
</script>
<script type="text/javascript" src="./../static/Cango-13v08-min.js"></script>
<script type="text/javascript" src="./../static/gearUtils-05.js"></script>
<script src="https://scrum-3.github.io/web/brython/brython_stdlib.js">document.write(new Date().getFullYear());</script> -->
            <script src="../static/chimper/js/jquery-migrate-3.0.1.min.js"></script>
            <script src="../static/chimper/js/popper.min.js"></script>
            <script src="../static/chimper/js/owl.carousel.min.js"></script>
            <script src="../static/chimper/js/jquery.countdown.min.js"></script>
            <script src="../static/chimper/js/bootstrap-datepicker.min.js"></script>
            <!--
            <script src="../static/chimper/js/typed.js">
                    var typed = new Typed('.typed-words', {
                    strings: ["Web Apps"," WordPress"," Mobile Apps"],
                    typeSpeed: 80,
                    backSpeed: 80,
                    backDelay: 4000,
                    startDelay: 1000,
                    loop: true,
                    showCursor: true
                    });
                    