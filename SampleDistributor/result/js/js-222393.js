
    
    <div ng-controller="Ctrl">
      Enter name: <input type="text" ng-model="name"><br>
      Hello <span ng-bind="name"></span>!
    </div>
  
      function Ctrl($scope) {
        $scope.name = 'Whirled';
      }
    
    it('should check ng-bind', function() {
      var exampleContainer = $('.doc-example-live');
      var nameInput = element(by.model('name'));

      expect(exampleContainer.findElement(by.binding('name')).getText()).toBe('Whirled');
      nameInput.clear();
      nameInput.sendKeys('world');
      expect(exampleContainer.findElement(by.binding('name')).getText()).toBe('world');
    });
  