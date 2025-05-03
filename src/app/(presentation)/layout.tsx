import React from 'react'

/**
 * Provides a layout container that wraps its children in a div element.
 *
 * @param children - The React nodes to be rendered within the layout.
 */
function PresentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{ children }</div>;
}

export default PresentationLayout