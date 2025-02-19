

<div ng-controller="Ctrl">
<div ng-repeat="innerList in list" ng-init="outerIndex = $index">
  <div ng-repeat="value in innerList" ng-init="innerIndex = $index">
     <span class="example-init">list[ {{outerIndex}} ][ {{innerIndex}} ] = {{value}};</span>
  </div>
</div>
</div>

function Ctrl($scope) {
  $scope.list = [['a', 'b'], ['c', 'd']];
}

  it('should alias index positions', function() {
    var elements = element.all(by.css('.example-init'));
    expect(elements.get(0).getText()).toBe('list[ 0 ][ 0 ] = a;');
    expect(elements.get(1).getText()).toBe('list[ 0 ][ 1 ] = b;');
    expect(elements.get(2).getText()).toBe('list[ 1 ][ 0 ] = c;');
    expect(elements.get(3).getText()).toBe('list[ 1 ][ 1 ] = d;');
  });
