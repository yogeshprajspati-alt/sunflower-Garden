import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BackgroundMusic } from "@/components/ui/BackgroundMusic";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Princess Prachii — The Sunflower Garden",
  description:
    "A golden sanctuary dedicated to Princess Prachii. Gentle, fearless, and unstoppable. Scroll to explore her journey.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground grain selection:bg-amber-400/30 selection:text-amber-100">
        <BackgroundMusic />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
