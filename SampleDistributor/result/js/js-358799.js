
  
  <div ng-controller="Ctrl">
  Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
  <table>
    <tr>
      <td>Filter</td>
      <td>Source</td>
      <td>Rendered</td>
    </tr>
    <tr id="linky-filter">
      <td>linky filter</td>
      <td>
        <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
      </td>
      <td>
        <div ng-bind-html="snippet | linky"></div>
      </td>
    </tr>
    <tr id="linky-target">
     <td>linky target</td>
     <td>
       <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
     </td>
     <td>
       <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
     </td>
    </tr>
    <tr id="escaped-html">
      <td>no filter</td>
      <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
      <td><div ng-bind="snippet"></div></td>
    </tr>
  </table>

    function Ctrl($scope) {
      $scope.snippet =
        'Pretty text with some links:\n'+
        'http://angularjs.org/,\n'+
        'mailto:us@somewhere.org,\n'+
        'another@somewhere.org,\n'+
        'and one more: ftp://127.0.0.1/.';
      $scope.snippetWithTarget = 'http://angularjs.org/';
    }
  
  it('should linkify the snippet with urls', function() {
    expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
        toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
             'another@somewhere.org, and one more: ftp://127.0.0.1/.');
    expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
  });

  it('should not linkify snippet without the linky filter', function() {
    expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
        toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
             'another@somewhere.org, and one more: ftp://127.0.0.1/.');
    expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
  });

  it('should update', function() {
    element(by.model('snippet')).clear();
    element(by.model('snippet')).sendKeys('new http://link.');
    expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
        toBe('new http://link.');
    expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
    expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
        .toBe('new http://link.');
  });

  it('should work with the target property', function() {
   expect(element(by.id('linky-target')).
       element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
       toBe('http://angularjs.org/');
   expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
  });
