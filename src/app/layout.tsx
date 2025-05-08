import type { Metadata } from "next";
import { Bruno_Ace, Oxygen_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const bruno = Bruno_Ace({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-heading",
	display: "swap",
});

const oxygen = Oxygen_Mono({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Carsly",
	description: "A next generation car dealer web app built and fused with AI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"antialiased overscroll-none bg-background",
					oxygen.variable,
					bruno.variable,
				)}
			>
				<NextTopLoader showSpinner={false} />
				<NuqsAdapter>{children}</NuqsAdapter>
				<Toaster richColors expand closeButton position="top-center" />
			</body>
		</html>
	);
}
