
    <div ng-controller="Ctrl1">
      Hello <input ng-model='name'> <hr/>
      <span ng-bind="name"></span> <br/>
      <span ng:bind="name"></span> <br/>
      <span ng_bind="name"></span> <br/>
      <span data-ng-bind="name"></span> <br/>
      <span x-ng-bind="name"></span> <br/>
    </div>
  
    angular.module('docsBindExample', [])
      .controller('Ctrl1', function Ctrl1($scope) {
        $scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)';
      });
  
    it('should show off bindings', function() {
      expect(element(by.css('div[ng-controller="Ctrl1"] span[ng-bind]')).getText())
          .toBe('Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)');
    });
  
    <div ng-controller="Ctrl">
      <div my-customer></div>
    </div>
  
    angular.module('docsSimpleDirective', [])
      .controller('Ctrl', function($scope) {
        $scope.customer = {
          name: 'Naomi',
          address: '1600 Amphitheatre'
        };
      })
      .directive('myCustomer', function() {
        return {
          template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
      });
  
    <div ng-controller="Ctrl">
      <div my-customer></div>
    </div>
  
    Name: {{customer.name}} Address: {{customer.address}}
  
    angular.module('docsTemplateUrlDirective', [])
      .controller('Ctrl', function($scope) {
        $scope.customer = {
          name: 'Naomi',
          address: '1600 Amphitheatre'
        };
      })
      .directive('myCustomer', function() {
        return {
          templateUrl: 'my-customer.html'
        };
      });
  
    <div ng-controller="Ctrl">
      <my-customer></my-customer>
    </div>
  
    Name: {{customer.name}} Address: {{customer.address}}
  
    angular.module('docsRestrictDirective', [])
      .controller('Ctrl', function($scope) {
        $scope.customer = {
          name: 'Naomi',
          address: '1600 Amphitheatre'
        };
      })
      .directive('myCustomer', function() {
        return {
          restrict: 'E',
          templateUrl: 'my-customer.html'
        };
      });
  
    <div ng-controller="NaomiCtrl">
      <my-customer></my-customer>
    </div>
    <hr>
    <div ng-controller="IgorCtrl">
      <my-customer></my-customer>
    </div>
  
    Name: {{customer.name}} Address: {{customer.address}}
  
    angular.module('docsScopeProblemExample', [])
      .controller('NaomiCtrl', function($scope) {
        $scope.customer = {
          name: 'Naomi',
          address: '1600 Amphitheatre'
        };
      })
      .controller('IgorCtrl', function($scope) {
        $scope.customer = {
          name: 'Igor',
          address: '123 Somewhere'
        };
      })
      .directive('myCustomer', function() {
        return {
          restrict: 'E',
          templateUrl: 'my-customer.html'
        };
      });
  
    <div ng-controller="Ctrl">
      <my-customer info="naomi"></my-customer>
      <hr>
      <my-customer info="igor"></my-customer>
    </div>
  
    Name: {{customerInfo.name}} Address: {{customerInfo.address}}
  
    angular.module('docsIsolateScopeDirective', [])
      .controller('Ctrl', function($scope) {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.igor = { name: 'Igor', address: '123 Somewhere' };
      })
      .directive('myCustomer', function() {
        return {
          restrict: 'E',
          scope: {
            customerInfo: '=info'
          },
          templateUrl: 'my-customer-iso.html'
        };
      });
  
    <div ng-controller="Ctrl">
      <my-customer info="naomi"></my-customer>
    </div>
  
    Name: {{customerInfo.name}} Address: {{customerInfo.address}}
    <hr>
    Name: {{vojta.name}} Address: {{vojta.address}}
  
    angular.module('docsIsolationExample', [])
      .controller('Ctrl', function($scope) {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };

        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
      })
      .directive('myCustomer', function() {
        return {
          restrict: 'E',
          scope: {
            customerInfo: '=info'
          },
          templateUrl: 'my-customer-plus-vojta.html'
        };
      });
  
    <div ng-controller="Ctrl2">
      Date format: <input ng-model="format"> <hr/>
      Current time is: <span my-current-time="format"></span>
    </div>
  
    angular.module('docsTimeDirective', [])
      .controller('Ctrl2', function($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
      })
      .directive('myCurrentTime', function($interval, dateFilter) {

        function link(scope, element, attrs) {
          var format,
              timeoutId;

          function updateTime() {
            element.text(dateFilter(new Date(), format));
          }

          scope.$watch(attrs.myCurrentTime, function(value) {
            format = value;
            updateTime();
          });

          element.on('$destroy', function() {
            $interval.cancel(timeoutId);
          });

          // start the UI update process; save the timeoutId for canceling
          timeoutId = $interval(function() {
            updateTime(); // update DOM
          }, 1000);
        }

        return {
          link: link
        };
      });
  
    <div ng-controller="Ctrl">
      <my-dialog>Check out the contents, {{name}}!</my-dialog>
    </div>
  
    <div class="alert" ng-transclude>
    </div>
  
    angular.module('docsTransclusionDirective', [])
      .controller('Ctrl', function($scope) {
        $scope.name = 'Tobias';
      })
      .directive('myDialog', function() {
        return {
          restrict: 'E',
          transclude: true,
          templateUrl: 'my-dialog.html'
        };
      });
  
    <div ng-controller="Ctrl">
      <my-dialog>Check out the contents, {{name}}!</my-dialog>
    </div>
  
    <div class="alert" ng-transclude>
    </div>
  
    angular.module('docsTransclusionExample', [])
      .controller('Ctrl', function($scope) {
        $scope.name = 'Tobias';
      })
      .directive('myDialog', function() {
        return {
          restrict: 'E',
          transclude: true,
          scope: {},
          templateUrl: 'my-dialog.html',
          link: function (scope, element) {
            scope.name = 'Jeff';
          }
        };
      });
  
    <div ng-controller="Ctrl">
      <my-dialog ng-hide="dialogIsHidden" on-close="hideDialog()">
        Check out the contents, {{name}}!
      </my-dialog>
    </div>
  
    <div class="alert">
      <a href class="close" ng-click="close()">&times;</a>
      <div ng-transclude></div>
    </div>
  
    angular.module('docsIsoFnBindExample', [])
      .controller('Ctrl', function($scope, $timeout) {
        $scope.name = 'Tobias';
        $scope.hideDialog = function () {
          $scope.dialogIsHidden = true;
          $timeout(function () {
            $scope.dialogIsHidden = false;
          }, 2000);
        };
      })
      .directive('myDialog', function() {
        return {
          restrict: 'E',
          transclude: true,
          scope: {
            'close': '&onClose'
          },
          templateUrl: 'my-dialog-close.html'
        };
      });
  
    <span my-draggable>Drag ME</span>
  
    angular.module('dragModule', []).
      directive('myDraggable', function($document) {
        return function(scope, element, attr) {
          var startX = 0, startY = 0, x = 0, y = 0;

          element.css({
           position: 'relative',
           border: '1px solid red',
           backgroundColor: 'lightgrey',
           cursor: 'pointer'
          });

          element.on('mousedown', function(event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
          });

          function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            element.css({
              top: y + 'px',
              left:  x + 'px'
            });
          }

          function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
          }
        }
      });
  
    <my-tabs>
      <my-pane title="Hello">
        <h5 id="creating-custom-directives_source_hello">Hello</h5>
        <p>Lorem ipsum dolor sit amet</p>
      </my-pane>
      <my-pane title="World">
        <h5 id="creating-custom-directives_source_world">World</h5>
        <em>Mauris elementum elementum enim at suscipit.</em>
        <p><a href ng-click="i = i + 1">counter: {{i || 0}}</a></p>
      </my-pane>
    </my-tabs>
  
    <div class="tabbable">
      <ul class="nav nav-tabs">
        <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">
          <a href="" ng-click="select(pane)">{{pane.title}}</a>
        </li>
      </ul>
      <div class="tab-content" ng-transclude></div>
    </div>
  
    <div class="tab-pane" ng-show="selected" ng-transclude>
    </div>
  
    angular.module('docsTabsExample', [])
      .directive('myTabs', function() {
        return {
          restrict: 'E',
          transclude: true,
          scope: {},
          controller: function($scope) {
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
              angular.forEach(panes, function(pane) {
                pane.selected = false;
              });
              pane.selected = true;
            };

            this.addPane = function(pane) {
              if (panes.length == 0) {
                $scope.select(pane);
              }
              panes.push(pane);
            };
          },
          templateUrl: 'my-tabs.html'
        };
      })
      .directive('myPane', function() {
        return {
          require: '^myTabs',
          restrict: 'E',
          transclude: true,
          scope: {
            title: '@'
          },
          link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
          },
          templateUrl: 'my-pane.html'
        };
      });
  