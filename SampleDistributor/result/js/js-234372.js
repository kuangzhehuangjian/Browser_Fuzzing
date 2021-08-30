
    // dynamically add base tag as well as css and javascript files.
    // we can't add css/js the usual way, because some browsers (FF) eagerly prefetch resources
    // before the base attribute is added, causing 404 and terribly slow loading of the docs app.
    (function() {
      if (window.name.indexOf('NG_DEFER_BOOTSTRAP!') == 0) {
        //TODO(i): super ugly hack to temporarily speed up our e2e tests until we move to protractor + extracted examples
        window.RUNNING_IN_NG_TEST_RUNNER = true;
      }

      var indexFile = (location.pathname.match(/\/(index[^\.]*\.html)/) || ['', ''])[1],
          rUrl = /(#!\/|api|guide|misc|tutorial|error|index[^\.]*\.html).*$/,
          baseUrl = location.href.replace(rUrl, indexFile),
          jQuery = /index-jq[^\.]*\.html$/.test(baseUrl),
          debug = /index[^\.]*-debug\.html$/.test(baseUrl),
          production = location.hostname === 'docs.angularjs.org',
          headEl = document.getElementsByTagName('head')[0],
          sync = true,
          angularVersion = {
            current: '1.2.13', // rewrite during build
            cdn: '1.2.12'
          };

      addTag('base', {href: baseUrl});
      addTag('link', {rel: 'stylesheet', href: 'components/bootstrap/css/' + (debug ? 'bootstrap.css' : 'bootstrap.min.css'), type: 'text/css'});
      addTag('link', {rel: 'stylesheet', href: 'components/font-awesome/css/' + (debug ? 'font-awesome.css' : 'font-awesome.min.css'), type: 'text/css'});
      addTag('link', {rel: 'stylesheet', href: 'css/prettify.css', type: 'text/css'});
      addTag('link', {rel: 'stylesheet', href: 'css/docs.css', type: 'text/css'});
      addTag('link', {rel: 'stylesheet', href: 'css/animations.css', type: 'text/css'});
      if (jQuery) addTag('script', {src: (debug ? 'components/jquery.js' : 'components/jquery.min.js')});
      addTag('script', {src: path('angular.js')}, sync);
      addTag('script', {src: path('angular-resource.js') }, sync);
      addTag('script', {src: path('angular-route.js') }, sync);
      addTag('script', {src: path('angular-cookies.js') }, sync);
      addTag('script', {src: path('angular-sanitize.js') }, sync);
      addTag('script', {src: path('angular-touch.js') }, sync);
      addTag('script', {src: path('angular-animate.js') }, sync);
      addTag('script', {src: 'components/angular-bootstrap.js' }, sync);
      addTag('script', {src: 'components/angular-bootstrap-prettify.js' }, sync);
      if (!window.RUNNING_IN_NG_TEST_RUNNER) {
        addTag('script', {src: 'components/google-code-prettify.js' }, sync);
        addTag('script', {src: 'components/' + (debug ? 'lunr.js' : 'lunr.min.js') }, sync);
      }
      addTag('script', {src: 'components/marked.js' }, sync);
      addTag('script', {src: 'docs-data.js'}, sync);
      addTag('script', {src: 'js/docs.js'}, sync);

      function path(name) {
        if (production) {
          if (name.match(/^angular(-\w+)?\.js/) && !name.match(/bootstrap/)) {
            name =  '//ajax.googleapis.com/ajax/libs/angularjs/' +
                angularVersion.cdn +
                '/' +
                name.replace(/\.js$/, '.min.js');
          } else {
            name =  'http://code.angularjs.org/' +
                angularVersion.cdn +
                '/' +
                name.replace(/\.js$/, '.min.js');
          }
          return name;
        }
        return '../' + name.replace(/\.js$/, debug ? '.js' : '.min.js');
      }

      function addTag(name, attributes, sync) {
        var el = document.createElement(name),
            attrName;

        for (attrName in attributes) {
          el.setAttribute(attrName, attributes[attrName]);
        }

        sync ? document.write(outerHTML(el)) : headEl.appendChild(el);
      }

      function outerHTML(node){
        // if IE, Chrome take the internal method otherwise build one
        return node.outerHTML || (
            function(n){
                var div = document.createElement('div'), h;
                div.appendChild(n);
                h = div.innerHTML;
                div = null;
                return h;
            })(node);
      }
    })();


    // force page reload when new update is available
    window.applicationCache && window.applicationCache.addEventListener('updateready', function(e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        window.applicationCache.swapCache();
        window.location.reload();
      }
    }, false);


    // GA asynchronous tracker
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-8594346-3']);
    _gaq.push(['_setDomainName', '.angularjs.org']);

    if (!window.RUNNING_IN_NG_TEST_RUNNER) {
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    }
  