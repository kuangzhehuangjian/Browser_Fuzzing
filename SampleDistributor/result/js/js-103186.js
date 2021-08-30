
  <div ng-controller="Ctrl">
    <select ng-model="selection" ng-options="item for item in items">
    </select>
    <tt>selection={{selection}}</tt>
    <hr/>
    <div class="animate-switch-container"
      ng-switch on="selection">
        <div class="animate-switch" ng-switch-when="settings">Settings Div</div>
        <div class="animate-switch" ng-switch-when="home">Home Span</div>
        <div class="animate-switch" ng-switch-default>default</div>
    </div>
  </div>

  function Ctrl($scope) {
    $scope.items = ['settings', 'home', 'other'];
    $scope.selection = $scope.items[0];
  }

  var switchElem = element(by.css('.doc-example-live [ng-switch]'));
  var select = element(by.model('selection'));

  it('should start in settings', function() {
    expect(switchElem.getText()).toMatch(/Settings Div/);
  });
  it('should change to home', function() {
    select.element.all(by.css('option')).get(1).click();
    expect(switchElem.getText()).toMatch(/Home Span/);
  });
  it('should select default', function() {
    select.element.all(by.css('option')).get(2).click();
    expect(switchElem.getText()).toMatch(/default/);
  });
