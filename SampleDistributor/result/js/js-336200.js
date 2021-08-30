
 <button ng-click="count = count + 1" ng-init="count=0">
   Increment
 </button>
 count: {{count}}

  it('should check ng-click', function() {
    expect(element(by.binding('count')).getText()).toMatch('0');
    element(by.css('.doc-example-live button')).click();
    expect(element(by.binding('count')).getText()).toMatch('1');
  });
