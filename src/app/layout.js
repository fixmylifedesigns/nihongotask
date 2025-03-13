// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nihongo Task | Learn Japanese with a Native Teacher from Kyoto",
  description:
    "Master Japanese language with authentic, immersive courses taught by a native speaker based in Kyoto. From beginner to advanced levels.",
  openGraph: {
    title: "Nihongo Task | Learn Japanese the Authentic Way",
    description:
      "Master Japanese language with immersive courses taught by a native speaker from Kyoto, Japan.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Nihongo Task - Japanese Language Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihongo Task | Learn Japanese the Authentic Way",
    description:
      "Master Japanese language with immersive courses taught by a native speaker from Kyoto, Japan.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
