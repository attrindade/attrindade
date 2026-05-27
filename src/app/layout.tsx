import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "André Trindade | Social & Data Scientist",
  description: "Architectural Synthesis of Cinematic Editorial Aesthetics and GovTech Functionalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
