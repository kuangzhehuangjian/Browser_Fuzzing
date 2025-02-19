
 
 <form name="myForm" ng-controller="Ctrl">
   Single word: <input type="text" name="input" ng-model="text"
                       ng-pattern="word" required ng-trim="false">
   <span class="error" ng-show="myForm.input.$error.required">
     Required!</span>
   <span class="error" ng-show="myForm.input.$error.pattern">
     Single word only!</span>

   <tt>text = {{text}}</tt><br/>
   <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
   <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
  </form>

   function Ctrl($scope) {
     $scope.text = 'guest';
     $scope.word = /^\s*\w*\s*$/;
   }
 
  var text = element(by.binding('text'));
  var valid = element(by.binding('myForm.input.$valid'));
  var input = element(by.model('text'));

  it('should initialize to model', function() {
    expect(text.getText()).toContain('guest');
    expect(valid.getText()).toContain('true');
  });

  it('should be invalid if empty', function() {
    input.clear();
    input.sendKeys('');

    expect(text.getText()).toEqual('text =');
    expect(valid.getText()).toContain('false');
  });

  it('should be invalid if multi word', function() {
    input.clear();
    input.sendKeys('hello world');

    expect(valid.getText()).toContain('false');
  });
