
  
  <div ng-controller="MyCntrl">
    <ul>
      <li ng-repeat="color in colors">
        Name: <input ng-model="color.name">
        [<a href ng-click="colors.splice($index, 1)">X</a>]
      </li>
      <li>
        [<a href ng-click="colors.push({})">add</a>]
      </li>
    </ul>
    <hr/>
    Color (null not allowed):
    <select ng-model="color" ng-options="c.name for c in colors"></select><br>

    Color (null allowed):
    <span  class="nullable">
      <select ng-model="color" ng-options="c.name for c in colors">
        <option value="">-- choose color --</option>
      </select>
    </span><br/>

    Color grouped by shade:
    <select ng-model="color" ng-options="c.name group by c.shade for c in colors">
    </select><br/>


    Select <a href ng-click="color={name:'not in list'}">bogus</a>.<br>
    <hr/>
    Currently selected: {{ {selected_color:color}  }}
    <div style="border:solid 1px black; height:20px"
         ng-style="{'background-color':color.name}">
    </div>
  </div>

  function MyCntrl($scope) {
    $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}
    ];
    $scope.color = $scope.colors[2]; // red
  }
  
   it('should check ng-options', function() {
     expect(element(by.binding('{selected_color:color}')).getText()).toMatch('red');
     element.all(by.select('color')).first().click();
     element.all(by.css('select[ng-model="color"] option')).first().click();
     expect(element(by.binding('{selected_color:color}')).getText()).toMatch('black');
     element(by.css('.nullable select[ng-model="color"]')).click();
     element.all(by.css('.nullable select[ng-model="color"] option')).first().click();
     expect(element(by.binding('{selected_color:color}')).getText()).toMatch('null');
   });
