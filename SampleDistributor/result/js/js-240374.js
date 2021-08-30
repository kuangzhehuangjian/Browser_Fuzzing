
  
  <div ng-controller="Ctrl">
    <input type="number" ng-model="amount"> <br>
    default currency symbol ($): <span id="currency-default">{{amount | currency}}</span><br>
    custom currency identifier (USD$): <span>{{amount | currency:"USD$"}}</span>
  </div>

    function Ctrl($scope) {
      $scope.amount = 1234.56;
    }
  
  it('should init with 1234.56', function() {
    expect(element(by.id('currency-default')).getText()).toBe('$1,234.56');
    expect(element(by.binding('amount | currency:"USD$"')).getText()).toBe('USD$1,234.56');
  });
  it('should update', function() {
    if (browser.params.browser == 'safari') {
      // Safari does not understand the minus key. See
      // https://github.com/angular/protractor/issues/481
      return;
    }
    element(by.model('amount')).clear();
    element(by.model('amount')).sendKeys('-1234');
    expect(element(by.id('currency-default')).getText()).toBe('($1,234.00)');
    expect(element(by.binding('amount | currency:"USD$"')).getText()).toBe('(USD$1,234.00)');
  });
