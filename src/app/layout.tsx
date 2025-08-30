import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from '@/components/sections/Navbar'
import PageBeetles from '@/components/PageBeetles'

const cocogoosePro = localFont({
  src: [
    {
      path: '../assets/fonts/cocogoose-pro.semilight.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-cocogoose-pro',
  display: 'swap',
})

const mabryPro = localFont({
  src: [
    {
      path: '../assets/fonts/MabryPro-Regular.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-mabry-pro',
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CR 3.0",
  description: "CR 3.0 Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cocogoosePro.variable} ${mabryPro.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
          <PageBeetles beetleCount={2} pageType="main"/>
        </main>
      </body>
    </html>
  );
}