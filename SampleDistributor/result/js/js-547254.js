
 
 <div ng-controller="Ctrl">
   <form name="myForm">
     User name: <input type="text" name="userName" ng-model="user.name" required>
     <span class="error" ng-show="myForm.userName.$error.required">
       Required!</span><br>
     Last name: <input type="text" name="lastName" ng-model="user.last"
       ng-minlength="3" ng-maxlength="10">
     <span class="error" ng-show="myForm.lastName.$error.minlength">
       Too short!</span>
     <span class="error" ng-show="myForm.lastName.$error.maxlength">
       Too long!</span><br>
   </form>
   <hr>
   <tt>user = {{user}}</tt><br/>
   <tt>myForm.userName.$valid = {{myForm.userName.$valid}}</tt><br>
   <tt>myForm.userName.$error = {{myForm.userName.$error}}</tt><br>
   <tt>myForm.lastName.$valid = {{myForm.lastName.$valid}}</tt><br>
   <tt>myForm.lastName.$error = {{myForm.lastName.$error}}</tt><br>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>
   <tt>myForm.$error.minlength = {{!!myForm.$error.minlength}}</tt><br>
   <tt>myForm.$error.maxlength = {{!!myForm.$error.maxlength}}</tt><br>
 </div>

   function Ctrl($scope) {
     $scope.user = {name: 'guest', last: 'visitor'};
   }
 
  var user = element(by.binding('{{user}}'));
  var userNameValid = element(by.binding('myForm.userName.$valid'));
  var lastNameValid = element(by.binding('myForm.lastName.$valid'));
  var lastNameError = element(by.binding('myForm.lastName.$error'));
  var formValid = element(by.binding('myForm.$valid'));
  var userNameInput = element(by.model('user.name'));
  var userLastInput = element(by.model('user.last'));

  it('should initialize to model', function() {
    expect(user.getText()).toContain('{"name":"guest","last":"visitor"}');
    expect(userNameValid.getText()).toContain('true');
    expect(formValid.getText()).toContain('true');
  });

  it('should be invalid if empty when required', function() {
    userNameInput.clear();
    userNameInput.sendKeys('');

    expect(user.getText()).toContain('{"last":"visitor"}');
    expect(userNameValid.getText()).toContain('false');
    expect(formValid.getText()).toContain('false');
  });

  it('should be valid if empty when min length is set', function() {
    userLastInput.clear();
    userLastInput.sendKeys('');

    expect(user.getText()).toContain('{"name":"guest","last":""}');
    expect(lastNameValid.getText()).toContain('true');
    expect(formValid.getText()).toContain('true');
  });

  it('should be invalid if less than required min length', function() {
    userLastInput.clear();
    userLastInput.sendKeys('xx');

    expect(user.getText()).toContain('{"name":"guest"}');
    expect(lastNameValid.getText()).toContain('false');
    expect(lastNameError.getText()).toContain('minlength');
    expect(formValid.getText()).toContain('false');
  });

  it('should be invalid if longer than max length', function() {
    userLastInput.clear();
    userLastInput.sendKeys('some ridiculously long name');

    expect(user.getText()).toContain('{"name":"guest"}');
    expect(lastNameValid.getText()).toContain('false');
    expect(lastNameError.getText()).toContain('maxlength');
    expect(formValid.getText()).toContain('false');
  });
