
 
 <form name="myForm" ng-controller="Ctrl">
   Value1: <input type="checkbox" ng-model="value1"> <br/>
   Value2: <input type="checkbox" ng-model="value2"
                  ng-true-value="YES" ng-false-value="NO"> <br/>
   <tt>value1 = {{value1}}</tt><br/>
   <tt>value2 = {{value2}}</tt><br/>
  </form>

   function Ctrl($scope) {
     $scope.value1 = true;
     $scope.value2 = 'YES'
   }
 
  it('should change state', function() {
    var value1 = element(by.binding('value1'));
    var value2 = element(by.binding('value2'));

    expect(value1.getText()).toContain('true');
    expect(value2.getText()).toContain('YES');
    
    element(by.model('value1')).click();
    element(by.model('value2')).click();

    expect(value1.getText()).toContain('false');
    expect(value2.getText()).toContain('NO');
  });
