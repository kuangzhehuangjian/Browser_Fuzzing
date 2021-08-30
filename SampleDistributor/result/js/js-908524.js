
    <p ng-class="{strike: deleted, bold: important, red: error}">Map Syntax Example</p>
    <input type="checkbox" ng-model="deleted"> deleted (apply "strike" class)<br>
    <input type="checkbox" ng-model="important"> important (apply "bold" class)<br>
    <input type="checkbox" ng-model="error"> error (apply "red" class)
    <hr>
    <p ng-class="style">Using String Syntax</p>
    <input type="text" ng-model="style" placeholder="Type: bold strike red">
    <hr>
    <p ng-class="[style1, style2, style3]">Using Array Syntax</p>
    <input ng-model="style1" placeholder="Type: bold, strike or red"><br>
    <input ng-model="style2" placeholder="Type: bold, strike or red"><br>
    <input ng-model="style3" placeholder="Type: bold, strike or red"><br>
  
    var ps = element.all(by.css('.doc-example-live p'));

    it('should let you toggle the class', function() {

      expect(ps.first().getAttribute('class')).not.toMatch(/bold/);
      expect(ps.first().getAttribute('class')).not.toMatch(/red/);

      element(by.model('important')).click();
      expect(ps.first().getAttribute('class')).toMatch(/bold/);

      element(by.model('error')).click();
      expect(ps.first().getAttribute('class')).toMatch(/red/);
    });

    it('should let you toggle string example', function() {
      expect(ps.get(1).getAttribute('class')).toBe('');
      element(by.model('style')).clear();
      element(by.model('style')).sendKeys('red');
      expect(ps.get(1).getAttribute('class')).toBe('red');
    });

    it('array example should have 3 classes', function() {
      expect(ps.last().getAttribute('class')).toBe('');
      element(by.model('style1')).sendKeys('bold');
      element(by.model('style2')).sendKeys('strike');
      element(by.model('style3')).sendKeys('red');
      expect(ps.last().getAttribute('class')).toBe('bold strike red');
    });
  
   <input id="setbtn" type="button" value="set" ng-click="myVar='my-class'">
   <input id="clearbtn" type="button" value="clear" ng-click="myVar=''">
   <br>
   <span class="base-class" ng-class="myVar">Sample Text</span>
  
    it('should check ng-class', function() {
      expect(element(by.css('.base-class')).getAttribute('class')).not.
        toMatch(/my-class/);

      element(by.id('setbtn')).click();

      expect(element(by.css('.base-class')).getAttribute('class')).
        toMatch(/my-class/);

      element(by.id('clearbtn')).click();

      expect(element(by.css('.base-class')).getAttribute('class')).not.
        toMatch(/my-class/);
    });
  