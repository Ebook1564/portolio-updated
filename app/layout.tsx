import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnappGames Resource Hub - Powering the Future of Game Development",
  description: "SnappGames provides resources on game development, optimization, solutions, and tips for enthusiasts and aspiring game devlopers.",
  keywords: "Game Development Guides, Software Optimization, Coding Tips and Tricks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

