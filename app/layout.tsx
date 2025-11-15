import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SquareUp - Digital Product Studio",
  description:
    "A digital product studio that works for startups, enterprise leaders, media & publishers and social good. We build exceptional digital experiences.",
  keywords: [
    "digital product studio",
    "web development",
    "design agency",
    "startup",
    "enterprise",
    "web design",
  ],
  authors: [{ name: "SquareUp" }],
  creator: "SquareUp",
  publisher: "SquareUp",
  metadataBase: new URL("https://squareup-template.vercel.app"),
  openGraph: {
    title: "SquareUp - Digital Product Studio",
    description:
      "A digital product studio that works for startups, enterprise leaders, media & publishers and social good.",
    url: "/",
    siteName: "SquareUp",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "SquareUp - Digital Product Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SquareUp - Digital Product Studio",
    description:
      "A digital product studio that works for startups, enterprise leaders, media & publishers and social good.",
    images: ["/og.webp"],
    creator: "@ditinagrawal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} antialiased`}>{children}</body>
    </html>
  );
}
