"use client"
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import  {Header}  from '@/components/Header/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
