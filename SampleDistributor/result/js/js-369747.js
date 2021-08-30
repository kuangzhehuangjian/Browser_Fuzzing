
 
  <form ng-controller="Ctrl">
    <h4 id="example_which-is-your-favorite">Which is your favorite?</h4>
      <label ng-repeat="name in names" for="{{name}}">
        {{name}}
        <input type="radio"
               ng-model="my.favorite"
               ng-value="name"
               id="{{name}}"
               name="favorite">
      </label>
    <div>You chose {{my.favorite}}</div>
  </form>

    function Ctrl($scope) {
      $scope.names = ['pizza', 'unicorns', 'robots'];
      $scope.my = { favorite: 'unicorns' };
    }
 
  var favorite = element(by.binding('my.favorite'));

  it('should initialize to model', function() {
    expect(favorite.getText()).toContain('unicorns');
  });
  it('should bind the values to the inputs', function() {
    element.all(by.model('my.favorite')).get(0).click();
    expect(favorite.getText()).toContain('pizza');
  });
