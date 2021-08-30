
  Check me to make text readonly: <input type="checkbox" ng-model="checked"><br/>
  <input type="text" ng-readonly="checked" value="I'm Angular"/>

  it('should toggle readonly attr', function() {
    expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeFalsy();
    element(by.model('checked')).click();
    expect(element(by.css('.doc-example-live [type="text"]')).getAttribute('readonly')).toBeTruthy();
  });
