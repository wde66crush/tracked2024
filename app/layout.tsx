import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './_components/ui/NavBar'
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Target Tracker',
  description: 'Find bugs at their root',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
