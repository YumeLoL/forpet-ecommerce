'use client'

import React from 'react'
import Link from 'next/link'

type Props = {
  theme: string
}

function Logo({ theme }: Props) {
  return (
    <Link href="/">
      <div
        className={`h-20 w-20 border-4 ${theme === 'white' ? 'border-white text-white' : 'bg-primary-light border-primary-darker text-white'} rounded-full text-sm  font-bold `}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <p>FOR</p>
          <p>PETS</p>
          <p className="text-[10px]">.com.au</p>
        </div>
      </div>
    </Link>
  )
}

export default Logo
