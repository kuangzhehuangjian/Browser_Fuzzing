
  <div ng-init="friends = [{name:'John', phone:'555-1276'},
                           {name:'Mary', phone:'800-BIG-MARY'},
                           {name:'Mike', phone:'555-4321'},
                           {name:'Adam', phone:'555-5678'},
                           {name:'Julie', phone:'555-8765'},
                           {name:'Juliette', phone:'555-5678'}]"></div>

  Search: <input ng-model="searchText">
  <table id="searchTextResults">
    <tr><th>Name</th><th>Phone</th></tr>
    <tr ng-repeat="friend in friends | filter:searchText">
      <td>{{friend.name}}</td>
      <td>{{friend.phone}}</td>
    </tr>
  </table>
  <hr>
  Any: <input ng-model="search.$"> <br>
  Name only <input ng-model="search.name"><br>
  Phone only <input ng-model="search.phone"><br>
  Equality <input type="checkbox" ng-model="strict"><br>
  <table id="searchObjResults">
    <tr><th>Name</th><th>Phone</th></tr>
    <tr ng-repeat="friendObj in friends | filter:search:strict">
      <td>{{friendObj.name}}</td>
      <td>{{friendObj.phone}}</td>
    </tr>
  </table>

  var expectFriendNames = function(expectedNames, key) {
    element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
      arr.forEach(function(wd, i) {
        expect(wd.getText()).toMatch(expectedNames[i]);
      });
    });
  };

  it('should search across all fields when filtering with a string', function() {
    var searchText = element(by.model('searchText'));
    searchText.clear();
    searchText.sendKeys('m');
    expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');

    searchText.clear();
    searchText.sendKeys('76');
    expectFriendNames(['John', 'Julie'], 'friend');
  });

  it('should search in specific fields when filtering with a predicate object', function() {
    var searchAny = element(by.model('search.$'));
    searchAny.clear();
    searchAny.sendKeys('i');
    expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
  });
  it('should use a equal comparison when comparator is true', function() {
    var searchName = element(by.model('search.name'));
    var strict = element(by.model('strict'));
    searchName.clear();
    searchName.sendKeys('Julie');
    strict.click();
    expectFriendNames(['Julie'], 'friendObj');
  });
