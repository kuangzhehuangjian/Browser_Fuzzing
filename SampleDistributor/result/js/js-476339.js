
    <div ng-controller="ngBindHtmlCtrl">
     <p ng-bind-html="myHTML"></p>
    </div>
  
    angular.module('ngBindHtmlExample', ['ngSanitize'])

    .controller('ngBindHtmlCtrl', ['$scope', function ngBindHtmlCtrl($scope) {
      $scope.myHTML =
         'I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';
    }]);
  
    it('should check ng-bind-html', function() {
      expect(element(by.binding('myHTML')).getText()).toBe(
          'I am an HTMLstring with links! and other stuff');
    });
  