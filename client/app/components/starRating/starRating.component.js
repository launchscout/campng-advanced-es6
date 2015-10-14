import jQuery from 'jquery';
import "raty";

let starRatingComponent = function () {
  return {
    restrict: 'EA',
    scope: {
      rating: "="
    },
    link(scope, element, attrs) {
      jQuery(element).raty({
        path: "/images",
        click(score, event) {
          scope.$apply(function() {
            scope.rating = score;
          });
        }
      });
      scope.$watch("rating", function(rating) {
        jQuery(element).raty("score", rating);
      });
    }
  };
};

export default starRatingComponent;
