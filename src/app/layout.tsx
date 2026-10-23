import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://novelle.ae"),
  title: {
    default: "Al Novelle | Aesthetic Training Academy in Abu Dhabi",
    template: "%s | Al Novelle",
  },
  description: "Al Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty therapy, clinical aesthetics, and laser technologies.",
  applicationName: "Al Novelle",
  authors: [{ name: "Al Novelle" }],
  creator: "Al Novelle",
  publisher: "Al Novelle",
  alternates: {
    canonical: "https://novelle.ae/",
  },
  openGraph: {
    title: "Al Novelle | Aesthetic Training Academy in Abu Dhabi",
    description: "Al Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty therapy, clinical aesthetics, and laser technologies.",
    url: "https://novelle.ae/",
    siteName: "Al Novelle",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/og-novelle-academy.png",
        width: 1200,
        height: 630,
        alt: "Al Novelle Aesthetic Training Academy in Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Novelle | Aesthetic Training Academy in Abu Dhabi",
    description: "Al Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty therapy, clinical aesthetics, and laser technologies.",
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
