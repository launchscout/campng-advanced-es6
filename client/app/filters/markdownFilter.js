import { markdown } from "markdown";

export default function($sce) {
  return function(text) {
    return $sce.trustAsHtml(markdown.toHTML(text || ""));
  }
}
