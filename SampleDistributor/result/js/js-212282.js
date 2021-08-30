
 
 <form name="myForm" ng-controller="Ctrl">
   List: <input name="namesInput" ng-model="names" ng-list required>
   <span class="error" ng-show="myForm.namesInput.$error.required">
     Required!</span>
   <br>
   <tt>names = {{names}}</tt><br/>
   <tt>myForm.namesInput.$valid = {{myForm.namesInput.$valid}}</tt><br/>
   <tt>myForm.namesInput.$error = {{myForm.namesInput.$error}}</tt><br/>
   <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
   <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
  </form>

   function Ctrl($scope) {
     $scope.names = ['igor', 'misko', 'vojta'];
   }
 
  var listInput = element(by.model('names'));
  var names = element(by.binding('{{names}}'));
  var valid = element(by.binding('myForm.namesInput.$valid'));
  var error = element(by.css('span.error'));

  it('should initialize to model', function() {
    expect(names.getText()).toContain('["igor","misko","vojta"]');
    expect(valid.getText()).toContain('true');
    expect(error.getCssValue('display')).toBe('none');
  });

  it('should be invalid if empty', function() {
    listInput.clear();
    listInput.sendKeys('');

    expect(names.getText()).toContain('');
    expect(valid.getText()).toContain('false');
    expect(error.getCssValue('display')).not.toBe('none');        });
