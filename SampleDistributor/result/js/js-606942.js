
<div ng-controller="Controller">
<form novalidate class="simple-form">
Name: <input type="text" ng-model="user.name" /><br />
E-mail: <input type="email" ng-model="user.email" /><br />
Gender: <input type="radio" ng-model="user.gender" value="male" />male
<input type="radio" ng-model="user.gender" value="female" />female<br />
<button ng-click="reset()">RESET</button>
<button ng-click="update(user)">SAVE</button>
</form>
<pre>form = {{user | json}}</pre>
<pre>master = {{master | json}}</pre>
</div>



function Controller($scope) {
   $scope.master= {};

   $scope.update = function(user) {
     // Example with 1 argument
     $scope.master= angular.copy(user);
   };

   $scope.reset = function() {
     // Example with 2 arguments
     angular.copy($scope.master, $scope.user);
   };

   $scope.reset();
 }
