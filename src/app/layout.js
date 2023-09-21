'use client'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 right-0 grid grid-flow-col font-bold text-xl p-2 text-white min-h-fit h-10 bg-cyan-950 border-b-2 border-b-gray-800">
          <Link href="/" className='grid grid-flow-col text-l absolute inset-x-1/2 uppercase font-serif '>Gallery</Link>
          <button className='place-self-end m-x-4'onClick={() => signOut()}>Logout</button>
        </div>
        <div>{children}</div>
        </body>
    </html>
  )
}
export default RootLayout;
