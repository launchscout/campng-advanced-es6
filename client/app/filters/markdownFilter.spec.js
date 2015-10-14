import "./filters";

describe('markdown', function() {

  beforeEach(window.module("app.filters"));

  it('should markdown', inject(function(markdownFilter, $sce) {
    expect($sce.getTrustedHtml(markdownFilter('hi *there*'))).to.equal('<p>hi <em>there</em></p>');
  }));
});
