
    
    <div>
      {{ 'World' | greet }}
    </div>
  
      // declare a module
      var myAppModule = angular.module('myApp', []);

      // configure the module.
      // in this example we will create a greeting filter
      myAppModule.filter('greet', function() {
       return function(name) {
          return 'Hello, ' + name + '!';
        };
      });

    
    
    <div ng-controller="XmplController">
      {{ greeting }}!
    </div>
  
      angular.module('xmpl.service', []).
        value('greeter', {
          salutation: 'Hello',
          localize: function(localization) {
            this.salutation = localization.salutation;
          },
          greet: function(name) {
            return this.salutation + ' ' + name + '!';
          }
        }).
        value('user', {
          load: function(name) {
            this.name = name;
          }
        });

      angular.module('xmpl.directive', []);

      angular.module('xmpl.filter', []);

      angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter']).
        run(function(greeter, user) {
          // This is effectively part of the main method initialization code
          greeter.localize({
            salutation: 'Bonjour'
          });
          user.load('World');
        })


      // A Controller for your app
      var XmplController = function($scope, greeter, user) {
        $scope.greeting = greeter.greet(user.name);
      }
    