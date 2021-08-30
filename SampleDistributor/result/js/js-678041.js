


<div ng-controller="FilterController as ctrl">
  <div>
    All entries:
    <span ng-repeat="entry in ctrl.array">{{entry.name}} </span>
  </div>
  <div>
    Entries that contain an "a":
    <span ng-repeat="entry in ctrl.filteredArray">{{entry.name}} </span>
  </div>
</div>

  angular.module('FilterInControllerModule', []).
    controller('FilterController', ['filterFilter', function(filterFilter) {
      this.array = [
        {name: 'Tobias'},
        {name: 'Jeff'},
        {name: 'Brian'},
        {name: 'Igor'},
        {name: 'James'},
        {name: 'Brad'}
      ];
      this.filteredArray = filterFilter(this.array, 'a');
    }]);



<div ng-controller="Ctrl">
  <input ng-model="greeting" type="greeting"><br>
  No filter: {{greeting}}<br>
  Reverse: {{greeting|reverse}}<br>
  Reverse + uppercase: {{greeting|reverse:true}}<br>
</div>

  angular.module('MyReverseModule', []).
    filter('reverse', function() {
      return function(input, uppercase) {
        var out = "";
        for (var i = 0; i < input.length; i++) {
          out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if (uppercase) {
          out = out.toUpperCase();
        }
        return out;
      }
    });

  function Ctrl($scope) {
    $scope.greeting = 'hello';
  }
