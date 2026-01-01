import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "B2B Lead Master | Data Scraping & Email Automation",
  description: "Helping agencies book 20+ meetings/month with verified data and AI-driven cold email campaigns.",
  icons: {
    icon: '/logo.png', // 👈 Ye line icon ko force karegi
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 👇 Yahan 'suppressHydrationWarning' add kiya hai taakay extensions ka error na aaye
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}