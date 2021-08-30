
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
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }
  
<div ng-controller="Controller">
  <form novalidate class="css-form">
    Name:
      <input type="text" ng-model="user.name" required /><br />
    E-mail: <input type="email" ng-model="user.email" required /><br />
    Gender: <input type="radio" ng-model="user.gender" value="male" />male
    <input type="radio" ng-model="user.gender" value="female" />female<br />
    <button ng-click="reset()">RESET</button>
    <button ng-click="update(user)">SAVE</button>
  </form>
</div>

<style type="text/css">
  .css-form input.ng-invalid.ng-dirty {
    background-color: #FA787E;
  }

  .css-form input.ng-valid.ng-dirty {
    background-color: #78FA89;
  }
</style>



  function Controller($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }
  
<div ng-controller="Controller">
  <form name="form" class="css-form" novalidate>
    Name:
      <input type="text" ng-model="user.name" name="uName" required /><br />
    E-mail:
      <input type="email" ng-model="user.email" name="uEmail" required/><br />
    <div ng-show="form.uEmail.$dirty && form.uEmail.$invalid">Invalid:
      <span ng-show="form.uEmail.$error.required">Tell us your email.</span>
      <span ng-show="form.uEmail.$error.email">This is not a valid email.</span>
    </div>

    Gender: <input type="radio" ng-model="user.gender" value="male" />male
    <input type="radio" ng-model="user.gender" value="female" />female<br />

    <input type="checkbox" ng-model="user.agree" name="userAgree" required />
    I agree: <input ng-show="user.agree" type="text" ng-model="user.agreeSign"
              required /><br />
    <div ng-show="!user.agree || !user.agreeSign">Please agree and sign.</div>

    <button ng-click="reset()" ng-disabled="isUnchanged(user)">RESET</button>
    <button ng-click="update(user)"
            ng-disabled="form.$invalid || isUnchanged(user)">SAVE</button>
  </form>
</div>



  function Controller($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
      return angular.equals(user, $scope.master);
    };

    $scope.reset();
  }

<div ng-controller="Controller">
  <form name="form" class="css-form" novalidate>
    <div>
      Size (integer 0 - 10):
      <input type="number" ng-model="size" name="size"
             min="0" max="10" integer />{{size}}<br />
      <span ng-show="form.size.$error.integer">This is not valid integer!</span>
      <span ng-show="form.size.$error.min || form.size.$error.max">
        The value must be in range 0 to 10!</span>
    </div>

    <div>
      Length (float):
      <input type="text" ng-model="length" name="length" smart-float />
      {{length}}<br />
      <span ng-show="form.length.$error.float">
        This is not a valid float number!</span>
    </div>
  </form>
</div>



  var app = angular.module('form-example1', []);

  var INTEGER_REGEXP = /^\-?\d+$/;
  app.directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('integer', false);
            return undefined;
          }
        });
      }
    };
  });

  var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
  app.directive('smartFloat', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (FLOAT_REGEXP.test(viewValue)) {
            ctrl.$setValidity('float', true);
            return parseFloat(viewValue.replace(',', '.'));
          } else {
            ctrl.$setValidity('float', false);
            return undefined;
          }
        });
      }
    };
  });



<div contentEditable="true" ng-model="content" title="Click to edit">Some</div>
<pre>model = {{content}}</pre>

<style type="text/css">
  div[contentEditable] {
    cursor: pointer;
    background-color: #D0D0D0;
  }
</style>

  angular.module('form-example2', []).directive('contenteditable', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        // view -> model
        elm.on('blur', function() {
          scope.$apply(function() {
            ctrl.$setViewValue(elm.html());
          });
        });

        // model -> view
        ctrl.$render = function() {
          elm.html(ctrl.$viewValue);
        };

        // load init value from DOM
        ctrl.$setViewValue(elm.html());
      }
    };
  });
