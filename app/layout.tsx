import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick UI Library - Prebuilt JavaScript & TypeScript Components",
  description: "Explore a collection of reusable, prebuilt components designed for ease of integration in JavaScript and TypeScript projects. Quick UI Library simplifies UI development with customizable components.",
  keywords: "UI library, reusable components, JavaScript, TypeScript, Quick UI, web development, prebuilt components, frontend development",
  authors: "Abel J." as any,
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    url: process.env.BASED_URL, // Replace with your actual domain
    title: "Quick UI Library - Prebuilt JavaScript & TypeScript Components",
    description: "Browse and integrate customizable JavaScript and TypeScript components from the Quick UI Library for faster and efficient web development.",
    siteName: "Quick UI Library",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
