export default function($sce) {
  return function(text, more) {
    return $sce.trustAsHtml("<b>Hello</b>" + more + text);
  };
}
