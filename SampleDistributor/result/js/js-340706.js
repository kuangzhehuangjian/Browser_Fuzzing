
 
 <form name="myForm" ng-controller="Ctrl">
   Number: <input type="number" name="input" ng-model="value"
                  min="0" max="99" required>
   <span class="error" ng-show="myForm.input.$error.required">
     Required!</span>
   <span class="error" ng-show="myForm.input.$error.number">
     Not valid number!</span>
   <tt>value = {{value}}</tt><br/>
   <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
   <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
  </form>

   function Ctrl($scope) {
     $scope.value = 12;
   }
 
  var value = element(by.binding('value'));
  var valid = element(by.binding('myForm.input.$valid'));
  var input = element(by.model('value'));

  it('should initialize to model', function() {
    expect(value.getText()).toContain('12');
    expect(valid.getText()).toContain('true');
  });

  it('should be invalid if empty', function() {
    input.clear();
    input.sendKeys('');
    expect(value.getText()).toEqual('value =');
    expect(valid.getText()).toContain('false');
  });

  it('should be invalid if over max', function() {
    input.clear();
    input.sendKeys('123');
    expect(value.getText()).toEqual('value =');
    expect(valid.getText()).toContain('false');
  });
