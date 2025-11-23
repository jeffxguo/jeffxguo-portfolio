import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffxguo.me'),
  title: 'Jeffrey Guo',
  description: 'Full-Stack & AI Developer showcasing projects in AI, Machine Learning, and Web Development.',
  openGraph: {
    title: 'Jeffrey Guo',
    description: 'Full-Stack & AI Developer showcasing projects in AI, Machine Learning, and Web Development.',
    url: 'https://jeffxguo.me',
    siteName: 'Jeffrey Guo Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Jeffrey Guo - Full-Stack & AI Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeffrey Guo',
    description: 'Full-Stack & AI Developer showcasing projects in AI, Machine Learning, and Web Development.',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/avatar.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
