import jQuery from 'jquery';
import "raty";

let starRatingComponent = function () {
  return {
    restrict: 'EA',
    require: "ngModel",
    link(scope, element, attrs, modelController) {
      jQuery(element).raty({
        path: "/images",
        click(score, event) {
          scope.$apply(function() {
            modelController.$setViewValue(score);
          });
        }
      });
      modelController.$render = function() {
        jQuery(element).raty("score", this.$viewValue);
      };
    }
  };
};

export default starRatingComponent;
