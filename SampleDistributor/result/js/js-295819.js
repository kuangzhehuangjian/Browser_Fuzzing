
 1+2={{1+2}}

 it('should calculate expression in binding', function() {
   expect(element(by.binding('1+2')).getText()).toEqual('1+2=3');
 });

 
 <div ng-controller="Cntl2" class="expressions">
   Expression:
   <input type='text' ng-model="expr" size="80"/>
   <button ng-click="addExp(expr)">Evaluate</button>
   <ul>
    <li ng-repeat="expr in exprs track by $index">
      [ <a href="" ng-click="removeExp($index)">X</a> ]
      <tt>{{expr}}</tt> => <span ng-bind="$parent.$eval(expr)"></span>
     </li>
   </ul>
 </div>

   function Cntl2($scope) {
     var exprs = $scope.exprs = [];
     $scope.expr = '3*10|currency';
     $scope.addExp = function(expr) {
        exprs.push(expr);
     };

     $scope.removeExp = function(index) {
       exprs.splice(index, 1);
     };
   }
 
 it('should allow user expression testing', function() {
    element(by.css('.expressions button')).click();
    var lis = element(by.css('.expressions ul')).element.all(by.repeater('expr in exprs'));
    expect(lis.count()).toBe(1);
    expect(lis.get(0).getText()).toEqual('[ X ] 3*10|currency => $30.00');
 });

 
 <div class="example2" ng-controller="Cntl1">
   Name: <input ng-model="name" type="text"/>
   <button ng-click="greet()">Greet</button>
 </div>

   function Cntl1($window, $scope){
     $scope.name = 'World';

     $scope.greet = function() {
       $window.alert('Hello ' + $scope.name);
     }
   }
 
  it('should calculate expression in binding', function() {
    if (browser.params.browser = 'safari') {
      // Safari can't handle dialogs.
      return;
    };
    element(by.css('[ng-click="greet()"]')).click();

    var alertDialog = browser.switchTo().alert();

    expect(alertDialog.getText()).toEqual('Hello World');

    alertDialog.accept();
  });
