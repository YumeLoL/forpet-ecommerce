import React from 'react'
import { api } from '@/utils/api'
import { NextSeo, type NextSeoProps } from 'next-seo'
import { Header, Footer } from '@/components'

interface PrimaryLayoutProps extends React.PropsWithChildren {
  seo: NextSeoProps
}

export const PrimaryLayout = ({ seo, children }: PrimaryLayoutProps) => {
  return (
    <>
      <>
        <NextSeo noindex={true} nofollow={true} {...seo} />
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
        <Footer />
      </>
    </>
  )
}
