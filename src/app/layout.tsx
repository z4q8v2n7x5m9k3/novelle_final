import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://novelle.ae"),
  title: {
    default: "Novelle | Aesthetic Training Academy in Abu Dhabi",
    template: "%s | Novelle Academy",
  },
  description: "Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty, aesthetics, laser and professional practice.",
  keywords: [
    "Novelle Academy",
    "aesthetic training academy Abu Dhabi",
    "semi permanent makeup course Abu Dhabi",
    "SPMU training UAE",
    "beauty training academy UAE",
    "aesthetic education Abu Dhabi",
    "laser training Abu Dhabi",
    "beauty therapy course UAE",
  ],
  applicationName: "Novelle Academy",
  authors: [{ name: "Novelle" }],
  creator: "Novelle",
  publisher: "Novelle",
  alternates: {
    canonical: "https://novelle.ae/",
  },
  openGraph: {
    title: "Novelle | Aesthetic Training Academy in Abu Dhabi",
    description: "Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty, aesthetics, laser and professional practice.",
    url: "https://novelle.ae/",
    siteName: "Novelle Academy",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/og-novelle-academy.png",
        width: 1200,
        height: 630,
        alt: "Novelle Aesthetic Training Academy in Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novelle | Aesthetic Training Academy in Abu Dhabi",
    description: "Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty, aesthetics, laser and professional practice.",
    images: ["/og-novelle-academy.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
