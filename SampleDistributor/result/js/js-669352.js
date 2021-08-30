
 
   <form name="myForm" ng-controller="Ctrl">
     Email: <input type="email" name="input" ng-model="text" required>
     <span class="error" ng-show="myForm.input.$error.required">
       Required!</span>
     <span class="error" ng-show="myForm.input.$error.email">
       Not valid email!</span>
     <tt>text = {{text}}</tt><br/>
     <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
     <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
     <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
     <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
     <tt>myForm.$error.email = {{!!myForm.$error.email}}</tt><br/>
   </form>

   function Ctrl($scope) {
     $scope.text = 'me@example.com';
   }
 
  var text = element(by.binding('text'));
  var valid = element(by.binding('myForm.input.$valid'));
  var input = element(by.model('text'));
  
  it('should initialize to model', function() {
    expect(text.getText()).toContain('me@example.com');
    expect(valid.getText()).toContain('true');
  });

  it('should be invalid if empty', function() {
    input.clear();
    input.sendKeys('');
    expect(text.getText()).toEqual('text =');
    expect(valid.getText()).toContain('false');
  });

  it('should be invalid if not email', function() {
    input.clear();
    input.sendKeys('xxx');

    expect(valid.getText()).toContain('false');
  });
