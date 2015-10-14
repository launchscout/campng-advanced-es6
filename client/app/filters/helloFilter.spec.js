import "./filters";

describe('hello filter', function() {

  beforeEach(window.module("app.filters"));

  it('should say hello', inject(function(helloFilter, $sce) {
    expect($sce.getTrustedHtml(helloFilter('World', "there"))).to.equal('<b>Hello</b>thereWorld');
  }));
});
