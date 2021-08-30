
 
 <form ng-submit="submit()" ng-controller="Ctrl">
   Enter text and hit enter:
   <input type="text" ng-model="text" name="text" />
   <input type="submit" id="submit" value="Submit" />
   <pre>list={{list}}</pre>
 </form>

   function Ctrl($scope) {
     $scope.list = [];
     $scope.text = 'hello';
     $scope.submit = function() {
       if (this.text) {
         this.list.push(this.text);
         this.text = '';
       }
     };
   }
 
  it('should check ng-submit', function() {
    expect(element(by.binding('list')).getText()).toBe('list=[]');
    element(by.css('.doc-example-live #submit')).click();
    expect(element(by.binding('list')).getText()).toContain('hello');
    expect(element(by.input('text')).getAttribute('value')).toBe('');
  });
  it('should ignore empty strings', function() {
    expect(element(by.binding('list')).getText()).toBe('list=[]');
    element(by.css('.doc-example-live #submit')).click();
    element(by.css('.doc-example-live #submit')).click();
    expect(element(by.binding('list')).getText()).toContain('hello');
   });
