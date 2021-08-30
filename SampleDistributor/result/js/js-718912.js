
      
      <div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
        Name: <input type="text" ng-model="settings.name"/>
        [ <a href="" ng-click="settings.greet()">greet</a> ]<br/>
        Contact:
        <ul>
          <li ng-repeat="contact in settings.contacts">
            <select ng-model="contact.type">
               <option>phone</option>
               <option>email</option>
            </select>
            <input type="text" ng-model="contact.value"/>
            [ <a href="" ng-click="settings.clearContact(contact)">clear</a>
            | <a href="" ng-click="settings.removeContact(contact)">X</a> ]
          </li>
          <li>[ <a href="" ng-click="settings.addContact()">add</a> ]</li>
       </ul>
      </div>
     
        function SettingsController1() {
          this.name = "John Smith";
          this.contacts = [
            {type: 'phone', value: '408 555 1212'},
            {type: 'email', value: 'john.smith@example.org'} ];
          };

        SettingsController1.prototype.greet = function() {
          alert(this.name);
        };

        SettingsController1.prototype.addContact = function() {
          this.contacts.push({type: 'email', value: 'yourname@example.org'});
        };

        SettingsController1.prototype.removeContact = function(contactToRemove) {
         var index = this.contacts.indexOf(contactToRemove);
          this.contacts.splice(index, 1);
        };

        SettingsController1.prototype.clearContact = function(contact) {
          contact.type = 'phone';
          contact.value = '';
        };
      
       it('should check controller as', function() {
         var container = element(by.id('ctrl-as-exmpl'));

         expect(container.findElement(by.model('settings.name'))
             .getAttribute('value')).toBe('John Smith');

         var firstRepeat =
             container.findElement(by.repeater('contact in settings.contacts').row(0));
         var secondRepeat =
             container.findElement(by.repeater('contact in settings.contacts').row(1));

         expect(firstRepeat.findElement(by.model('contact.value')).getAttribute('value'))
             .toBe('408 555 1212');
         expect(secondRepeat.findElement(by.model('contact.value')).getAttribute('value'))
             .toBe('john.smith@example.org');

         firstRepeat.findElement(by.linkText('clear')).click()

         expect(firstRepeat.findElement(by.model('contact.value')).getAttribute('value'))
             .toBe('');

         container.findElement(by.linkText('add')).click();

         expect(container.findElement(by.repeater('contact in settings.contacts').row(2))
             .findElement(by.model('contact.value'))
             .getAttribute('value'))
             .toBe('yourname@example.org');
       });
     
      
      <div id="ctrl-exmpl" ng-controller="SettingsController2">
        Name: <input type="text" ng-model="name"/>
        [ <a href="" ng-click="greet()">greet</a> ]<br/>
        Contact:
        <ul>
          <li ng-repeat="contact in contacts">
            <select ng-model="contact.type">
               <option>phone</option>
               <option>email</option>
            </select>
            <input type="text" ng-model="contact.value"/>
            [ <a href="" ng-click="clearContact(contact)">clear</a>
            | <a href="" ng-click="removeContact(contact)">X</a> ]
          </li>
          <li>[ <a href="" ng-click="addContact()">add</a> ]</li>
       </ul>
      </div>
     
        function SettingsController2($scope) {
          $scope.name = "John Smith";
          $scope.contacts = [
            {type:'phone', value:'408 555 1212'},
            {type:'email', value:'john.smith@example.org'} ];

          $scope.greet = function() {
           alert(this.name);
          };

          $scope.addContact = function() {
           this.contacts.push({type:'email', value:'yourname@example.org'});
          };

          $scope.removeContact = function(contactToRemove) {
           var index = this.contacts.indexOf(contactToRemove);
           this.contacts.splice(index, 1);
          };

          $scope.clearContact = function(contact) {
           contact.type = 'phone';
           contact.value = '';
          };
        }
      
       it('should check controller', function() {
         var container = element(by.id('ctrl-exmpl'));

         expect(container.findElement(by.model('name'))
             .getAttribute('value')).toBe('John Smith');

         var firstRepeat =
             container.findElement(by.repeater('contact in contacts').row(0));
         var secondRepeat =
             container.findElement(by.repeater('contact in contacts').row(1));

         expect(firstRepeat.findElement(by.model('contact.value')).getAttribute('value'))
             .toBe('408 555 1212');
         expect(secondRepeat.findElement(by.model('contact.value')).getAttribute('value'))
             .toBe('john.smith@example.org');

         firstRepeat.findElement(by.linkText('clear')).click()

         expect(firstRepeat.findElement(by.model('contact.value')).getAttribute('value'))
             .toBe('');

         container.findElement(by.linkText('add')).click();

         expect(container.findElement(by.repeater('contact in contacts').row(2))
             .findElement(by.model('contact.value'))
             .getAttribute('value'))
             .toBe('yourname@example.org');
       });
     