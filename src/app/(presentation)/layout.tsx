import type React from "react";

function PresentationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}

export default PresentationLayout;
