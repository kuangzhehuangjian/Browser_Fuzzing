</script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js">
{
  "@context" : "http://schema.org",
  "@type" : "Website",
  "name": " CMSimfly 網際內容管理 ",
  "url" : "https://chiamingyen.github.io/cmsimfly/blog/",
  "image": "https://chiamingyen.github.io/cmsimfly/blog/theme/images/home-bg.jpg",
  "description": "View the blog."
}
</script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushJScript.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushPython.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushXml.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushCpp.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushCSharp.js"></script>
<script type="text/javascript" src="./../data/syntaxhighlighter/shBrushLua.js">
	(function(){
		var corecss = document.createElement('link');
		var themecss = document.createElement('link');
		var corecssurl = "./../data/syntaxhighlighter/shCore.css";
		if ( corecss.setAttribute ) {
				corecss.setAttribute( "rel", "stylesheet" );
				corecss.setAttribute( "type", "text/css" );
				corecss.setAttribute( "href", corecssurl );
		} else {
				corecss.rel = "stylesheet";
				corecss.href = corecssurl;
		}
		document.getElementsByTagName("head")[0].insertBefore( corecss, document.getElementById("syntaxhighlighteranchor") );
		var themecssurl = "./../data/syntaxhighlighter/shThemeDefault.css?ver=3.0.9b";
		if ( themecss.setAttribute ) {
				themecss.setAttribute( "rel", "stylesheet" );
				themecss.setAttribute( "type", "text/css" );
				themecss.setAttribute( "href", themecssurl );
		} else {
				themecss.rel = "stylesheet";
				themecss.href = themecssurl;
		}
		//document.getElementById("syntaxhighlighteranchor").appendChild(themecss);
		document.getElementsByTagName("head")[0].insertBefore( themecss, document.getElementById("syntaxhighlighteranchor") );
	})();
	SyntaxHighlighter.config.strings.expandSource = '+ expand source';
	SyntaxHighlighter.config.strings.help = '?';
	SyntaxHighlighter.config.strings.alert = 'SyntaxHighlighter\n\n';
	SyntaxHighlighter.config.strings.noBrush = 'Can\'t find brush for: ';
	SyntaxHighlighter.config.strings.brushNotHtmlScript = 'Brush wasn\'t configured for html-script option: ';
	SyntaxHighlighter.defaults['pad-line-numbers'] = false;
	SyntaxHighlighter.defaults['toolbar'] = false;
	SyntaxHighlighter.all();
</script>
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

<script type="text/javascript" src="./../static/ace/filereader.js"></script>

<script type="text/javascript" src="./../static/brython_stdlib.js"></script>

<!-- PrairieDraw.js 為延伸 sylvester.js 的 html5 canvas 繪圖應用程式庫 https://github.com/martin70/PrairieDraw.js -->

<script src="./../static/sylvester/PrairieDraw.js">
window.onload=function(){
brython({debug:1, pythonpath:['./../static']});
}
</script>

<script src="./../static/ace/ext-language_tools.js" type="text/javascript" charset="utf-8"></script>

<script src="./../static/ace/snippets/python.js" type="text/javascript" charset="utf-8">
function doSave(storage_id, filename){
    var blob = new Blob([localStorage[storage_id]], {type: "text/plain;charset=utf-8"});
    filename = document.getElementById(filename).value
    saveAs(blob …</script>

<script type="text/javascript">
    var disqus_shortname = 'kmolab-github';
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
