import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cavia",
  description: "Web Cavia",
    icons: {
    icon: '/img/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <link rel="icon" type="image/x-icon" href="/app/favicon.svg"></link>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
