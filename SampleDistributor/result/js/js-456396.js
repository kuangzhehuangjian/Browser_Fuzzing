
  <div ng-show="!showActions" ng-swipe-left="showActions = true">
    Some list content, like an email in the inbox
  </div>
  <div ng-show="showActions" ng-swipe-right="showActions = false">
    <button ng-click="reply()">Reply</button>
    <button ng-click="delete()">Delete</button>
  </div>
