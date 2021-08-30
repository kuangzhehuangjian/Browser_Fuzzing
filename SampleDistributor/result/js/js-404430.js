
 
 <form name="myForm" ng-controller="Ctrl">
   <input type="radio" ng-model="color" value="red">  Red <br/>
   <input type="radio" ng-model="color" ng-value="specialValue"> Green <br/>
   <input type="radio" ng-model="color" value="blue"> Blue <br/>
   <tt>color = {{color | json}}</tt><br/>
  </form>
  Note that `ng-value="specialValue"` sets radio item's value to be the value of `$scope.specialValue`.

   function Ctrl($scope) {
     $scope.color = 'blue';
     $scope.specialValue = {
       "id": "12345",
       "value": "green"
     };
   }
 
  it('should change state', function() {
    var color = element(by.binding('color'));

    expect(color.getText()).toContain('blue');

    element.all(by.model('color')).get(0).click();

    expect(color.getText()).toContain('red');
  });
