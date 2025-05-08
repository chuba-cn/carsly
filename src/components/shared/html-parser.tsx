import parse from "html-react-parser";
import React from "react";
import sanitizeHtml from "sanitize-html";

function HTMLParser({ html }: { html: string }) {
	return parse(sanitizeHtml(html));
}

export default HTMLParser;
