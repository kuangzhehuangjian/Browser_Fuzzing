
  
  <div ng-controller="Ctrl">
     Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
    <table>
      <tr>
        <td>Directive</td>
        <td>How</td>
        <td>Source</td>
        <td>Rendered</td>
      </tr>
      <tr id="bind-html-with-sanitize">
        <td>ng-bind-html</td>
        <td>Automatically uses $sanitize</td>
        <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
        <td><div ng-bind-html="snippet"></div></td>
      </tr>
      <tr id="bind-html-with-trust">
        <td>ng-bind-html</td>
        <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
        <td>
        <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
        </td>
        <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
      </tr>
      <tr id="bind-default">
        <td>ng-bind</td>
        <td>Automatically escapes</td>
        <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
        <td><div ng-bind="snippet"></div></td>
      </tr>
    </table>
    </div>

    function Ctrl($scope, $sce) {
      $scope.snippet =
        '<p style="color:blue">an html\n' +
        '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
        'snippet</p>';
      $scope.deliberatelyTrustDangerousSnippet = function() {
        return $sce.trustAsHtml($scope.snippet);
      };
    }
  
  it('should sanitize the html snippet by default', function() {
    expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
      toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
  });

  it('should inline raw snippet if bound to a trusted value', function() {
    expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
      toBe("<p style=\"color:blue\">an html\n" +
           "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
           "snippet</p>");
  });

  it('should escape snippet without any filter', function() {
    expect(element(by.css('#bind-default div')).getInnerHtml()).
      toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
           "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
           "snippet&lt;/p&gt;");
  });

  it('should update', function() {
    element(by.model('snippet')).clear();
    element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
    expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
      toBe('new <b>text</b>');
    expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
      'new <b onclick="alert(1)">text</b>');
    expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
      "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
  });
