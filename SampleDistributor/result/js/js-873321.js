
   <ol ng-init="names=['John', 'Mary', 'Cate', 'Suz']">
     <li ng-repeat="name in names">
      <span ng-class-odd="'odd'" ng-class-even="'even'">
        {{name}} &nbsp; &nbsp; &nbsp;
      </span>
     </li>
   </ol>

  it('should check ng-class-odd and ng-class-even', function() {
    expect(element(by.repeater('name in names').row(0).column('name')).getAttribute('class')).
      toMatch(/odd/);
    expect(element(by.repeater('name in names').row(1).column('name')).getAttribute('class')).
      toMatch(/even/);
  });
