import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import MobileNav from "@/components/MobileNav";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanctum - Lifestyle. Wellness. Retreat.",
  description:
    "A sovereign wellness ecosystem in Lombok. Performance gym, architecturally led accommodation, and considered restoration — for guests who take their bodies and environments seriously.",
  icons: {
    icon: "/icon/icon.png",
    shortcut: "/icon/icon.png",
    apple: "/icon/icon.png",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <SmoothScroll />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
