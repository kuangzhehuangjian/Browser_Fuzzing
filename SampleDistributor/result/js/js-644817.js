
  <div id="scrollArea" ng-controller="ScrollCtrl">
    <a ng-click="gotoBottom()">Go to bottom</a>
    <a id="bottom"></a> You're at the bottom!
  </div>

  function ScrollCtrl($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function (){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
      
      // call $anchorScroll()
      $anchorScroll();
    }
  }
