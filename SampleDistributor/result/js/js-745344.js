
  
  <div ng-controller="Ctrl">
    <input ng-model="title"><br>
    <textarea ng-model="text"></textarea> <br/>
    <pane title="{{title}}">{{text}}</pane>
  </div>

    function Ctrl($scope) {
      $scope.title = 'Lorem Ipsum';
      $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
    }

    angular.module('transclude', [])
     .directive('pane', function(){
        return {
          restrict: 'E',
          transclude: true,
          scope: { title:'@' },
          template: '<div style="border: 1px solid black;">' +
                      '<div style="background-color: gray">{{title}}</div>' +
                      '<div ng-transclude></div>' +
                    '</div>'
        };
    });
  
   it('should have transcluded', function() {
     var titleElement = element(by.model('title'));
     titleElement.clear();
     titleElement.sendKeys('TITLE');
     var textElement = element(by.model('text'));
     textElement.clear();
     textElement.sendKeys('TEXT');
     expect(element(by.binding('title')).getText()).toEqual('TITLE');
     expect(element(by.binding('text')).getText()).toEqual('TEXT');
   });
