
  <div>Normal: {{1 + 2}}</div>
  <div ng-non-bindable>Ignored: {{1 + 2}}</div>

 it('should check ng-non-bindable', function() {
   expect(element(by.binding('1 + 2')).getText()).toContain('3');
   expect(element.all(by.css('.doc-example-live div')).last().getText()).toMatch(/1 \+ 2/);
 });
