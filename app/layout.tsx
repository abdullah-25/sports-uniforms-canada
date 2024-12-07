import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', // Changed variable name
})


export const metadata: Metadata = {
  title: "Sports Uniforms Canada",
  description: "Quality sports uniforms for Canadian teams",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased  flex flex-col min-h-screen `}>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}