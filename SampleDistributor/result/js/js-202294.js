
  
  <div ng-controller="Ctrl">
    <pre>Sorting predicate = {{predicate}}; reverse = {{reverse}}</pre>
    <hr/>
    [ <a href="" ng-click="predicate=''">unsorted</a> ]
    <table class="friend">
      <tr>
        <th><a href="" ng-click="predicate = 'name'; reverse=false">Name</a>
            (<a href="" ng-click="predicate = '-name'; reverse=false">^</a>)</th>
        <th><a href="" ng-click="predicate = 'phone'; reverse=!reverse">Phone Number</a></th>
        <th><a href="" ng-click="predicate = 'age'; reverse=!reverse">Age</a></th>
      </tr>
      <tr ng-repeat="friend in friends | orderBy:predicate:reverse">
        <td>{{friend.name}}</td>
        <td>{{friend.phone}}</td>
        <td>{{friend.age}}</td>
      </tr>
    </table>
  </div>

    function Ctrl($scope) {
      $scope.friends =
          [{name:'John', phone:'555-1212', age:10},
           {name:'Mary', phone:'555-9876', age:19},
           {name:'Mike', phone:'555-4321', age:21},
           {name:'Adam', phone:'555-5678', age:35},
           {name:'Julie', phone:'555-8765', age:29}]
      $scope.predicate = '-age';
    }
  