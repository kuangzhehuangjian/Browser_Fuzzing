
  
  <div ng-controller="Controller">
    <input type="checkbox" ng-model="confirmed" ng-change="change()" id="ng-change-example1" />
    <input type="checkbox" ng-model="confirmed" id="ng-change-example2" />
    <label for="ng-change-example2">Confirmed</label><br />
    <tt>debug = {{confirmed}}</tt><br/>
    <tt>counter = {{counter}}</tt><br/>
  </div>

    function Controller($scope) {
      $scope.counter = 0;
      $scope.change = function() {
        $scope.counter++;
      };
    }
  
  var counter = element(by.binding('counter'));
  var debug = element(by.binding('confirmed'));

  it('should evaluate the expression if changing from view', function() {
    expect(counter.getText()).toContain('0');

    element(by.id('ng-change-example1')).click();

    expect(counter.getText()).toContain('1');
    expect(debug.getText()).toContain('true');
  });

  it('should not evaluate the expression if changing from model', function() {
    element(by.id('ng-change-example2')).click();

    expect(counter.getText()).toContain('0');
    expect(debug.getText()).toContain('true');
  });
