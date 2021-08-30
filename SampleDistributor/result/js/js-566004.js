
   <div id="template1" ng-cloak>{{ 'hello' }}</div>
   <div id="template2" ng-cloak class="ng-cloak">{{ 'hello IE7' }}</div>

  it('should remove the template directive and css class', function() {
    expect($('.doc-example-live #template1').getAttribute('ng-cloak')).
      toBeNull();
    expect($('.doc-example-live #template2').getAttribute('ng-cloak')).
      toBeNull();
  });
