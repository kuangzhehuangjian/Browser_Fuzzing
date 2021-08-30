
  Check me to check both: <input type="checkbox" ng-model="master"><br/>
  <input id="checkSlave" type="checkbox" ng-checked="master">

  it('should check both checkBoxes', function() {
    expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
    element(by.model('master')).click();
    expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
  });
