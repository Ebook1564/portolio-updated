import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnappGame Business - Powering the Future of Casual & HTML5 Gaming",
  description: "SnappGame provides HTML5 games, monetization solutions, and advertising platforms for publishers and advertisers.",
  keywords: "HTML5 games, game monetization, game advertising, casual games, game publishers",
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

