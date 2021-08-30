
  Click me to toggle: <input type="checkbox" ng-model="checked"><br/>
  <button ng-model="button" ng-disabled="checked">Button</button>

  it('should toggle button', function() {
    expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeFalsy();
    element(by.model('checked')).click();
    expect(element(by.css('.doc-example-live button')).getAttribute('disabled')).toBeTruthy();
  });
