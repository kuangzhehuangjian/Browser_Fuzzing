
    var production = location.hostname === 'docs.angularjs.org',
        headEl = document.head,
        angularVersion = {
          current: '1.2.13', // rewrite during build
          cdn: '1.2.12'
        };

    addTag('script', {src: path('angular-scenario.js')}, function() {
      addTag('script', {src: 'docs-scenario.js'}, function() {
        angular.scenario.setUpAndRun();
      });
    });

    function addTag(name, attributes, callback) {
      var el = document.createElement(name),
          attrName;

      for (attrName in attributes) {
        el.setAttribute(attrName, attributes[attrName]);
      }

      if (callback) {
        el.onload = callback;
      }

      headEl.appendChild(el);
    }


    function path(name) {
      return production
          ? 'http://code.angularjs.org/' + angularVersion.cdn + '/' + name
          : '../' + name;
    }
  