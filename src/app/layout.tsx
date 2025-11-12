import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


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
    <html lang="en" className="scroll-smooth">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17722447065">
        </Script>
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17722447065');
            `}
        </Script>
      </head>
      <link rel="icon" type="image/x-icon" href="/app/favicon.svg"></link>
      <body

      >
        {children}
      </body>
    </html>
  );
}
