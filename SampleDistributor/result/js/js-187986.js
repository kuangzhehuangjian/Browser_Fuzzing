
  <div ng-controller="MainCntl as main">
    Choose:
    <a href="Book/Moby">Moby</a> |
    <a href="Book/Moby/ch/1">Moby: Ch1</a> |
    <a href="Book/Gatsby">Gatsby</a> |
    <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
    <a href="Book/Scarlet">Scarlet Letter</a><br/>

    <div class="view-animate-container">
      <div ng-view class="view-animate"></div>
    </div>
    <hr />

    <pre>$location.path() = {{main.$location.path()}}</pre>
    <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
    <pre>$route.current.params = {{main.$route.current.params}}</pre>
    <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
    <pre>$routeParams = {{main.$routeParams}}</pre>
  </div>

  <div>
    controller: {{book.name}}<br />
    Book Id: {{book.params.bookId}}<br />
  </div>

  <div>
    controller: {{chapter.name}}<br />
    Book Id: {{chapter.params.bookId}}<br />
    Chapter Id: {{chapter.params.chapterId}}
  </div>

  angular.module('ngViewExample', ['ngRoute', 'ngAnimate'],
    function($routeProvider, $locationProvider) {
      $routeProvider.when('/Book/:bookId', {
        templateUrl: 'book.html',
        controller: BookCntl,
        controllerAs: 'book'
      });
      $routeProvider.when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: ChapterCntl,
        controllerAs: 'chapter'
      });

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
  });

  function MainCntl($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
  }

  function BookCntl($routeParams) {
    this.name = "BookCntl";
    this.params = $routeParams;
  }

  function ChapterCntl($routeParams) {
    this.name = "ChapterCntl";
    this.params = $routeParams;
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
