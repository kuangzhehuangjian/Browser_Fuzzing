
 <div ng-controller="Ctrl">
   <select ng-model="template" ng-options="t.name for t in templates">
    <option value="">(blank)</option>
   </select>
   url of the template: <tt>{{template.url}}</tt>
   <hr/>
   <div class="slide-animate-container">
     <div class="slide-animate" ng-include="template.url"></div>
   </div>
 </div>

  Content of template1.html

  Content of template2.html

  function Ctrl($scope) {
    $scope.templates =
      [ { name: 'template1.html', url: 'template1.html'}
      , { name: 'template2.html', url: 'template2.html'} ];
    $scope.template = $scope.templates[0];
  }
 
  var templateSelect = element(by.model('template'));
  var includeElem = element(by.css('.doc-example-live [ng-include]'));

  it('should load template1.html', function() {
    expect(includeElem.getText()).toMatch(/Content of template1.html/);
  });

  it('should load template2.html', function() {
    if (browser.params.browser == 'firefox') {
      // Firefox can't handle using selects
      // See https://github.com/angular/protractor/issues/480
      return;
    }
    templateSelect.click();
    templateSelect.element.all(by.css('option')).get(2).click();
    expect(includeElem.getText()).toMatch(/Content of template2.html/);
  });

  it('should change to blank', function() {
    if (browser.params.browser == 'firefox') {
      // Firefox can't handle using selects
      return;
    }
    templateSelect.click();
    templateSelect.element.all(by.css('option')).get(0).click();
    expect(includeElem.isPresent()).toBe(false);
  });
