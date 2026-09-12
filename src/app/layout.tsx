import type { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const SITE_URL = "https://www.code-rumble.in"
const TITLE = "Coderumble"
const DESCRIPTION = "Coderumble by The Programming Club, IIITDM Jabalpur."

// Site-wide, and the only metadata the app declares: one page means one set of
// tags, and duplicating them on the route only leaves two copies to drift.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: TITLE,
    images: [
      { url: "/meta.png", width: 1200, height: 630, alt: "Coderumble Banner" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/meta.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // data-scroll-behavior opts back in to the scroll override Next stopped doing
  // by default in 16 — without it the `scroll-smooth` below would animate route
  // transitions as well as in-page jumps.
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <main className="flex flex-col">{children}</main>
      </body>
    </html>
  )
}
