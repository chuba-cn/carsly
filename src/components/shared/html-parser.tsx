import React from 'react';
import sanitizeHtml from 'sanitize-html';
import parse from "html-react-parser";

function HTMLParser({ html }: { html: string }) {
  return parse(sanitizeHtml(html));
}

export default HTMLParser