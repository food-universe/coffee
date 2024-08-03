import './globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  title: {
    template: '%s | Coffee Web',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'Coffee,Coffee Web,咖啡,咖啡網站',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-Hans-TW"
      className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
    >
      <body className="flex h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
