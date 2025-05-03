import React from 'react';
import sanitizeHtml from 'sanitize-html';
import parse from "html-react-parser";

/**
 * Renders sanitized HTML content as React elements.
 *
 * @param html - The HTML string to sanitize and render.
 * @returns React elements generated from the sanitized HTML.
 *
 * @remark
 * Removes potentially unsafe HTML content before rendering to prevent XSS vulnerabilities.
 */
function HTMLParser({ html }: { html: string }) {
  return parse(sanitizeHtml(html));
}

export default HTMLParser