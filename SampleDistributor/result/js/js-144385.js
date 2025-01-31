

<div ng-non-bindable class="html5-hashbang-example">
  <div id="html5-mode" ng-controller="Html5Cntl">
    <h4 id="hashbang-and-html5-modes_source_browser-with-history-api">Browser with History API</h4>
    <div ng-address-bar browser="html5"></div><br><br>
    $location.protocol() = {{$location.protocol()}}<br>
    $location.host() = {{$location.host()}}<br>
    $location.port() = {{$location.port()}}<br>
    $location.path() = {{$location.path()}}<br>
    $location.search() = {{$location.search()}}<br>
    $location.hash() = {{$location.hash()}}<br>
    <a href="http://www.example.com/base/first?a=b">/base/first?a=b</a> |
    <a href="http://www.example.com/base/sec/ond?flag#hash">sec/ond?flag#hash</a> |
    <a href="/other-base/another?search">external</a>
  </div>

  <div id="hashbang-mode" ng-controller="HashbangCntl">
    <h4 id="hashbang-and-html5-modes_source_browser-without-history-api">Browser without History API</h4>
    <div ng-address-bar browser="hashbang"></div><br><br>
    $location.protocol() = {{$location.protocol()}}<br>
    $location.host() = {{$location.host()}}<br>
    $location.port() = {{$location.port()}}<br>
    $location.path() = {{$location.path()}}<br>
    $location.search() = {{$location.search()}}<br>
    $location.hash() = {{$location.hash()}}<br>
    <a href="http://www.example.com/base/first?a=b">/base/first?a=b</a> |
    <a href="http://www.example.com/base/sec/ond?flag#hash">sec/ond?flag#hash</a> |
    <a href="/other-base/another?search">external</a>
  </div>
</div>




  function FakeBrowser(initUrl, baseHref) {
    this.onUrlChange = function(fn) {
      this.urlChange = fn;
    };

    this.url = function() {
      return initUrl;
    };

    this.defer = function(fn, delay) {
      setTimeout(function() { fn(); }, delay || 0);
    };

    this.baseHref = function() {
      return baseHref;
    };

    this.notifyWhenOutstandingRequests = angular.noop;
  }

  var browsers = {
    html5: new FakeBrowser('http://www.example.com/base/path?a=b#h', '/base/index.html'),
    hashbang: new FakeBrowser('http://www.example.com/base/index.html#!/path?a=b#h', '/base/index.html')
  };

  function Html5Cntl($scope, $location) {
    $scope.$location = $location;
  }

  function HashbangCntl($scope, $location) {
    $scope.$location = $location;
  }

  function initEnv(name) {
    var root = angular.element(document.getElementById(name + '-mode'));
    // We must kill a link to the injector for this element otherwise angular will
    // complain that it has been bootstrapped already.
    root.data('$injector', null);
    angular.bootstrap(root, [function($compileProvider, $locationProvider, $provide){
      $locationProvider.html5Mode(true).hashPrefix('!');

      $provide.value('$browser', browsers[name]);
      $provide.value('$sniffer', {history: name == 'html5'});

      $compileProvider.directive('ngAddressBar', function() {
        return function(scope, elm, attrs) {
          var browser = browsers[attrs.browser],
              input = angular.element('<input type="text" style="width: 400px">').val(browser.url()),
              delay;

          input.on('keypress keyup keydown', function() {
            if (!delay) {
              delay = setTimeout(fireUrlChange, 250);
            }
          });

          browser.url = function(url) {
            return input.val(url);
          };

          elm.append('Address: ').append(input);

          function fireUrlChange() {
            delay = null;
            browser.urlChange(input.val());
          }
        };
      });
    }]);
    root.on('click', function(e) {
      e.stopPropagation();
    });
  }

  initEnv('html5');
  initEnv('hashbang');

<div ng-controller="LocationController">
  <input type="text" ng-model="locationPath" />
</div>

function LocationController($scope, $location) {
  $scope.$watch('locationPath', function(path) {
    $location.path(path);
  });
  $scope.$watch(function() {
    return $location.path();
  }, function(path) {
    $scope.locationPath = path;
  });
}
