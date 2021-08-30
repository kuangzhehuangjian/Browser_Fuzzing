
 
 <form name="myForm" ng-controller="Ctrl">
   userType: <input name="input" ng-model="userType" required>
   <span class="error" ng-show="myForm.input.$error.required">Required!</span><br>
   <tt>userType = {{userType}}</tt><br>
   <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br>
   <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>
  </form>

   function Ctrl($scope) {
     $scope.userType = 'guest';
   }
 
  it('should initialize to model', function() {
    var userType = element(by.binding('userType'));
    var valid = element(by.binding('myForm.input.$valid'));

    expect(userType.getText()).toContain('guest');
    expect(valid.getText()).toContain('true');
  });

  it('should be invalid if empty', function() {
    var userType = element(by.binding('userType'));
    var valid = element(by.binding('myForm.input.$valid'));
    var userInput = element(by.model('userType'));

    userInput.clear();
    userInput.sendKeys('');

    expect(userType.getText()).toEqual('userType =');
    expect(valid.getText()).toContain('false');
  });
