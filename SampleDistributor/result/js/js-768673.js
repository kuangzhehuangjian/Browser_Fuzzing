
    <div ng-app="spicyApp1" ng-controller="SpicyCtrl">
     <button ng-click="chiliSpicy()">Chili</button>
     <button ng-click="jalapenoSpicy()">Jalapeño</button>
     <p>The food is {{spice}} spicy!</p>
    </div>
    
  
      var myApp = angular.module('spicyApp1', []);

      myApp.controller('SpicyCtrl', ['$scope', function($scope){
          $scope.spice = 'very';
          
          $scope.chiliSpicy = function() {
              $scope.spice = 'chili';
          };
          
          $scope.jalapenoSpicy = function() {
              $scope.spice = 'jalapeño';
          };
      }]);
    
  <div ng-app="spicyApp2" ng-controller="SpicyCtrl">
   <input ng-model="customSpice">
   <button ng-click="spicy('chili')">Chili</button>
   <button ng-click="spicy(customSpice)">Custom spice</button>
   <p>The food is {{spice}} spicy!</p>
  </div>
  

    var myApp = angular.module('spicyApp2', []);

    myApp.controller('SpicyCtrl', ['$scope', function($scope){
        $scope.customSpice = "wasabi";
        $scope.spice = 'very';
        
        $scope.spicy = function(spice){
            $scope.spice = spice;
        };
    }]);
  
    <div ng-app="scopeInheritance" class="spicy">
      <div ng-controller="MainCtrl">
        <p>Good {{timeOfDay}}, {{name}}!</p>

        <div ng-controller="ChildCtrl">
          <p>Good {{timeOfDay}}, {{name}}!</p>

          <div ng-controller="GrandChildCtrl">
            <p>Good {{timeOfDay}}, {{name}}!</p>
          </div>
        </div>
      </div>
    </div>
    
    
  
      var myApp = angular.module('scopeInheritance', []);
      myApp.controller('MainCtrl', ['$scope', function($scope){
        $scope.timeOfDay = 'morning';
        $scope.name = 'Nikki';
      }]);
      myApp.controller('ChildCtrl', ['$scope', function($scope){
        $scope.name = 'Mattie';
      }]);
      myApp.controller('GrandChildCtrl', ['$scope', function($scope){
        $scope.timeOfDay = 'evening';
        $scope.name = 'Gingerbreak Baby';
      }]);
    