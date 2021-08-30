
  <div ng-controller="MainCntl">
    Choose:
    <a href="Book/Moby">Moby</a> |
    <a href="Book/Moby/ch/1">Moby: Ch1</a> |
    <a href="Book/Gatsby">Gatsby</a> |
    <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
    <a href="Book/Scarlet">Scarlet Letter</a><br/>

    <div ng-view></div>
    <hr />

    <pre>$location.path() = {{$location.path()}}</pre>
    <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
    <pre>$route.current.params = {{$route.current.params}}</pre>
    <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
    <pre>$routeParams = {{$routeParams}}</pre>
  </div>

  controller: {{name}}<br />
  Book Id: {{params.bookId}}<br />

  controller: {{name}}<br />
  Book Id: {{params.bookId}}<br />
  Chapter Id: {{params.chapterId}}

  angular.module('ngViewExample', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/Book/:bookId', {
      templateUrl: 'book.html',
      controller: BookCntl,
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    });
    $routeProvider.when('/Book/:bookId/ch/:chapterId', {
      templateUrl: 'chapter.html',
      controller: ChapterCntl
    });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });

  function MainCntl($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  }

  function BookCntl($scope, $routeParams) {
    $scope.name = "BookCntl";
    $scope.params = $routeParams;
  }

  function ChapterCntl($scope, $routeParams) {
    $scope.name = "ChapterCntl";
    $scope.params = $routeParams;
  }

  it('should load and compile correct template', function() {
    element(by.linkText('Moby: Ch1')).click();
    var content = element(by.css('.doc-example-live [ng-view]')).getText();
    expect(content).toMatch(/controller\: ChapterCntl/);
    expect(content).toMatch(/Book Id\: Moby/);
    expect(content).toMatch(/Chapter Id\: 1/);

    element(by.partialLinkText('Scarlet')).click();

    content = element(by.css('.doc-example-live [ng-view]')).getText();
    expect(content).toMatch(/controller\: BookCntl/);
    expect(content).toMatch(/Book Id\: Scarlet/);
  });
