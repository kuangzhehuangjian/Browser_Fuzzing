
  <div ng-controller="myAppController as myCtrl">
    <i ng-bind-html="myCtrl.explicitlyTrustedHtml" id="explicitlyTrustedHtml"></i><br><br>
    <b>User comments</b><br>
    By default, HTML that isn't explicitly trusted (e.g. Alice's comment) is sanitized when
    $sanitize is available.  If $sanitize isn't available, this results in an error instead of an
    exploit.
    <div class="well">
      <div ng-repeat="userComment in myCtrl.userComments">
        <b>{{userComment.name}}</b>:
        <span ng-bind-html="userComment.htmlComment" class="htmlComment"></span>
        <br>
      </div>
    </div>
  </div>

  var mySceApp = angular.module('mySceApp', ['ngSanitize']);

  mySceApp.controller("myAppController", function myAppController($http, $templateCache, $sce) {
    var self = this;
    $http.get("test_data.json", {cache: $templateCache}).success(function(userComments) {
      self.userComments = userComments;
    });
    self.explicitlyTrustedHtml = $sce.trustAsHtml(
        '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
        'sanitization.&quot;">Hover over this text.</span>');
  });

[
  { "name": "Alice",
    "htmlComment":
        "<span onmouseover='this.textContent=\"PWN3D!\"'>Is <i>anyone</i> reading this?</span>"
  },
  { "name": "Bob",
    "htmlComment": "<i>Yes!</i>  Am I the only other one?"
  }
]

  describe('SCE doc demo', function() {
    it('should sanitize untrusted values', function() {
      expect(element(by.css('.htmlComment')).getInnerHtml())
          .toBe('<span>Is <i>anyone</i> reading this?</span>');
    });

    it('should NOT sanitize explicitly trusted values', function() {
      expect(element(by.id('explicitlyTrustedHtml')).getInnerHtml()).toBe(
          '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
          'sanitization.&quot;">Hover over this text.</span>');
    });
  });
