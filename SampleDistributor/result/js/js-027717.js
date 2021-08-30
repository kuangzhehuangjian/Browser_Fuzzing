
  <div ng-controller="LogCtrl">
    <p>Reload this page with open console, enter text and hit the log button...</p>
    Message:
    <input type="text" ng-model="message"/>
    <button ng-click="$log.log(message)">log</button>
    <button ng-click="$log.warn(message)">warn</button>
    <button ng-click="$log.info(message)">info</button>
    <button ng-click="$log.error(message)">error</button>
  </div>

  function LogCtrl($scope, $log) {
    $scope.$log = $log;
    $scope.message = 'Hello World!';
  }
