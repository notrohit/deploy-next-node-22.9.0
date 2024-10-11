import type { Metadata } from "next";
import Link from "next/link";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Test deployment with node v22.9.0 on Vercel.",
  description: "October 4th, 2024 2:30 PM by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-center">
          <ul className="flex justify-center items-center gap-6 w-full">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/child">Child</Link>
            </li>
            <li>
              <Link href="/sibling">Sibling</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
