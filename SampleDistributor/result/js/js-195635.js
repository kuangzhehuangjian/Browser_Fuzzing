
  
  <div ng-controller="Ctrl">
    Enter number: <input ng-model='val'><br>
    Default formatting: <span id='number-default'>{{val | number}}</span><br>
    No fractions: <span>{{val | number:0}}</span><br>
    Negative number: <span>{{-val | number:4}}</span>
  </div>

    function Ctrl($scope) {
      $scope.val = 1234.56789;
    }
  
  it('should format numbers', function() {
    expect(element(by.id('number-default')).getText()).toBe('1,234.568');
    expect(element(by.binding('val | number:0')).getText()).toBe('1,235');
    expect(element(by.binding('-val | number:4')).getText()).toBe('-1,234.5679');
  });

  it('should update', function() {
    element(by.model('val')).clear();
    element(by.model('val')).sendKeys('3374.333');
    expect(element(by.id('number-default')).getText()).toBe('3,374.333');
    expect(element(by.binding('val | number:0')).getText()).toBe('3,374');
    expect(element(by.binding('-val | number:4')).getText()).toBe('-3,374.3330');
 });
