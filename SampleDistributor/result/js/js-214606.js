
    
    <div ng-controller="Ctrl">
     Salutation: <input type="text" ng-model="salutation"><br>
     Name: <input type="text" ng-model="name"><br>
     <pre ng-bind-template="{{salutation}} {{name}}!"></pre>
    </div>
  
      function Ctrl($scope) {
        $scope.salutation = 'Hello';
        $scope.name = 'World';
      }
    
    it('should check ng-bind', function() {
      var salutationElem = element(by.binding('salutation'));
      var salutationInput = element(by.model('salutation'));
      var nameInput = element(by.model('name'));

      expect(salutationElem.getText()).toBe('Hello World!');

      salutationInput.clear();
      salutationInput.sendKeys('Greetings');
      nameInput.clear();
      nameInput.sendKeys('user');

      expect(salutationElem.getText()).toBe('Greetings user!');
    });
  