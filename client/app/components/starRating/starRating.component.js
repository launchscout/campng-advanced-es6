import jQuery from 'jquery';
import "raty";

let starRatingComponent = function () {
  return {
    restrict: 'EA',
    scope: {},
    link(scope, element, attrs) {
      jQuery(element).raty({
        path: "/images"
      });
    }
  };
};

export default starRatingComponent;
