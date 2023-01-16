'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'


import Hero from "../components/Hero"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero/>
    </div>
  )
}
