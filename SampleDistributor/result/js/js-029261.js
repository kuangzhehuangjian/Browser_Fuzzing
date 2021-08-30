
   <input type="button" value="set" ng-click="myStyle={color:'red'}">
   <input type="button" value="clear" ng-click="myStyle={}">
   <br/>
   <span ng-style="myStyle">Sample Text</span>
   <pre>myStyle={{myStyle}}</pre>

  var colorSpan = element(by.css('.doc-example-live span'));

  it('should check ng-style', function() {
    expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
    element(by.css('.doc-example-live input[value=set]')).click();
    expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
    element(by.css('.doc-example-live input[value=clear]')).click();
    expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
  });
