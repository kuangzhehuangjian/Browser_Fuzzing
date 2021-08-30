
  Check me check multiple: <input type="checkbox" ng-model="open"><br/>
  <details id="details" ng-open="open">
     <summary>Show/Hide me</summary>
  </details>

  it('should toggle open', function() {
    expect(element(by.id('details')).getAttribute('open')).toBeFalsy();
    element(by.model('open')).click();
    expect(element(by.id('details')).getAttribute('open')).toBeTruthy();
  });
