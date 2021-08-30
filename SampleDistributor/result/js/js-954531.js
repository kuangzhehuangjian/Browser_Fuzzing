
  
  <div ng-controller="Ctrl">
    <input type="text" ng-model="greeting" />
    <button ng-click="doGreeting(greeting)">ALERT</button>
  </div>

    function Ctrl($scope, $window) {
      $scope.greeting = 'Hello, World!';
      $scope.doGreeting = function(greeting) {
          $window.alert(greeting);
      };
    }
  
 it('should display the greeting in the input box', function() {
  element(by.model('greeting')).sendKeys('Hello, E2E Tests');
  // If we click the button it will block the test runner
  // element(':button').click();
 });
