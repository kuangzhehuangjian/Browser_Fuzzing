
    <div ng-init="checked=true">
      <label>
        <input type="checkbox" ng-model="checked" style="float:left; margin-right:10px;"> Is Visible...
      </label>
      <div class="check-element sample-show-hide" ng-show="checked" style="clear:both;">
        Visible...
      </div>
    </div>
  
  <p>
    <input type="button" value="set" ng-click="myCssVar='css-class'">
    <input type="button" value="clear" ng-click="myCssVar=''">
    <br>
    <span ng-class="myCssVar">CSS-Animated Text</span>
  </p>
 