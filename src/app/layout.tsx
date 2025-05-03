import type { Metadata } from "next";
import { Bruno_Ace, Oxygen_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
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

/**
 * Defines the root layout for the Next.js application, applying global styles, fonts, and UI providers.
 *
 * Wraps all pages with font variables, a top loading bar, notification toasts, and Nuqs integration.
 *
 * @param children - The content to render within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `antialiased overscroll-none bg-background`,
          oxygen.variable,
          bruno.variable
        )}
      >
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster richColors expand closeButton position="top-center" />
      </body>
    </html>
  );
}
