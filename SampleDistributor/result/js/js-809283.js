
      <form name="myForm">
       <div contenteditable
            name="myWidget" ng-model="userContent"
            strip-br="true"
            required>Change me!</div>
        <span ng-show="myForm.myWidget.$error.required">Required!</span>
       <hr>
       <textarea ng-model="userContent"></textarea>
      </form>
    
      angular.module('customControl', []).
        directive('contenteditable', function() {
          return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function(scope, element, attrs, ngModel) {
              if(!ngModel) return; // do nothing if no ng-model

              // Specify how UI should be updated
              ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
              };

              // Listen for change events to enable binding
              element.on('blur keyup change', function() {
                scope.$apply(read);
              });
              read(); // initialize

              // Write data to the model
              function read() {
                var html = element.html();
                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if( attrs.stripBr && html == '<br>' ) {
                  html = '';
                }
                ngModel.$setViewValue(html);
              }
            }
          };
        });
    
      it('should data-bind and become invalid', function() {
        if (browser.params.browser = 'safari') {
          // SafariDriver can't handle contenteditable.
          return;
        };
        var contentEditable = element(by.css('.doc-example-live [contenteditable]'));

        expect(contentEditable.getText()).toEqual('Change me!');

        // Firefox driver doesn't trigger the proper events on 'clear', so do this hack
        contentEditable.click();
        contentEditable.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, "a"));
        contentEditable.sendKeys(protractor.Key.BACK_SPACE);

        expect(contentEditable.getText()).toEqual('');
        expect(contentEditable.getAttribute('class')).toMatch(/ng-invalid-required/);
      });
    