import { PrimaryLayout } from '@/layouts/PrimaryLayout'
import React, { ReactElement } from 'react'

export default function SuccessPage() {
  return (
    <div>
      <h2>Your payment has been successfully processed</h2>
    </div>
  )
}

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Payment Success',
        description: 'Payment Success',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}
