
  Check me to select: <input type="checkbox" ng-model="selected"><br/>
  <select>
    <option>Hello!</option>
    <option id="greet" ng-selected="selected">Greetings!</option>
  </select>

  it('should select Greetings!', function() {
    expect(element(by.id('greet')).getAttribute('selected')).toBeFalsy();
    element(by.model('selected')).click();
    expect(element(by.id('greet')).getAttribute('selected')).toBeTruthy();
  });
