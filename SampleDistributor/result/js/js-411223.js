
  Click me: <input type="checkbox" ng-model="checked"><br/>
  <div>
    Show:
    <div class="check-element animate-show" ng-show="checked">
      <span class="icon-thumbs-up"></span> I show up when your checkbox is checked.
    </div>
  </div>
  <div>
    Hide:
    <div class="check-element animate-show" ng-hide="checked">
      <span class="icon-thumbs-down"></span> I hide when your checkbox is checked.
    </div>
  </div>

  var thumbsUp = element(by.css('.doc-example-live span.icon-thumbs-up'));
  var thumbsDown = element(by.css('.doc-example-live span.icon-thumbs-down'));

  it('should check ng-show / ng-hide', function() {
    expect(thumbsUp.isDisplayed()).toBeFalsy();
    expect(thumbsDown.isDisplayed()).toBeTruthy();

    element(by.model('checked')).click();

    expect(thumbsUp.isDisplayed()).toBeTruthy();
    expect(thumbsDown.isDisplayed()).toBeFalsy();
  });
