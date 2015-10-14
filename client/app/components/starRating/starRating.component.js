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
      modelController.$formatters.push(function(modelValue) {
        return modelValue / 20;
      });
      modelController.$parsers.push(function(viewValue) {
        return viewValue * 20;
      });

    }
  };
};

export default starRatingComponent;
