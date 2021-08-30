
  
  <div ng-controller="Ctrl">
    Person 1:<input type="text" ng-model="person1" value="Igor" /><br/>
    Person 2:<input type="text" ng-model="person2" value="Misko" /><br/>
    Number of People:<input type="text" ng-model="personCount" value="1" /><br/>

    <!--- Example with simple pluralization rules for en locale --->
    Without Offset:
    <ng-pluralize count="personCount"
                  when="{'0': 'Nobody is viewing.',
                         'one': '1 person is viewing.',
                         'other': '{} people are viewing.'}">
    </ng-pluralize><br>

    <!--- Example with offset --->
    With Offset(2):
    <ng-pluralize count="personCount" offset=2
                  when="{'0': 'Nobody is viewing.',
                         '1': '{{person1}} is viewing.',
                         '2': '{{person1}} and {{person2}} are viewing.',
                         'one': '{{person1}}, {{person2}} and one other person are viewing.',
                         'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
    </ng-pluralize>
  </div>

    function Ctrl($scope) {
      $scope.person1 = 'Igor';
      $scope.person2 = 'Misko';
      $scope.personCount = 1;
    }
  
  it('should show correct pluralized string', function() {
    var withoutOffset = element.all(by.css('ng-pluralize')).get(0);
    var withOffset = element.all(by.css('ng-pluralize')).get(1);
    var countInput = element(by.model('personCount'));

    expect(withoutOffset.getText()).toEqual('1 person is viewing.');
    expect(withOffset.getText()).toEqual('Igor is viewing.');

    countInput.clear();
    countInput.sendKeys('0');

    expect(withoutOffset.getText()).toEqual('Nobody is viewing.');
    expect(withOffset.getText()).toEqual('Nobody is viewing.');

    countInput.clear();
    countInput.sendKeys('2');

    expect(withoutOffset.getText()).toEqual('2 people are viewing.');
    expect(withOffset.getText()).toEqual('Igor and Misko are viewing.');

    countInput.clear();
    countInput.sendKeys('3');

    expect(withoutOffset.getText()).toEqual('3 people are viewing.');
    expect(withOffset.getText()).toEqual('Igor, Misko and one other person are viewing.');

    countInput.clear();
    countInput.sendKeys('4');

    expect(withoutOffset.getText()).toEqual('4 people are viewing.');
    expect(withOffset.getText()).toEqual('Igor, Misko and 2 other people are viewing.');
  });
  it('should show data-bound names', function() {
    var withOffset = element.all(by.css('ng-pluralize')).get(1);
    var personCount = element(by.model('personCount'));
    var person1 = element(by.model('person1'));
    var person2 = element(by.model('person2'));
    personCount.clear();
    personCount.sendKeys('4');
    person1.clear();
    person1.sendKeys('Di');
    person2.clear();
    person2.sendKeys('Vojta');
    expect(withOffset.getText()).toEqual('Di, Vojta and 2 other people are viewing.');
  });
