import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ui } from "@clerk/ui";
import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

const monaSans = Mona_Sans({
    variable: '--font-mona-sans',
    subsets: ['latin'],
    display: 'swap'
})

export const metadata: Metadata = {
  title: "Libbby",
  description: "Ai interactive",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider ui={ui}>
      <html lang="en"
      >
        <body  className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}>
          <Navbar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
