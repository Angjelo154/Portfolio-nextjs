import '../components/Skills';
import '../styles/globals.css';
import '../components/Projects';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <title>Angjelo | Software Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href='/LOGO.png'/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}