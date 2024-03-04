import { PrimaryLayout } from '@/layouts/PrimaryLayout'
import { NextPageWithLayout } from '@/pages/_app'
import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import ProductDetailInfo from '@/components/product/ProductDetailInfo'

const ProductDetail: NextPageWithLayout = () => {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) {
    return (
      <div className="h-screen">
        <h1>Product not found</h1>
      </div>
    )
  }
  const id = slug[1].split('_')[1]
  const { data, isLoading } = api.product.getOne.useQuery({ id })

  return (
    <div className="flex w-full min-h-screen justify-center">
      {data && data.product && (
        <ProductDetailInfo product={data.product} isLoading={isLoading} />
      )}
    </div>
  )
}

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Products',
        description: 'Products',
        canonical: 'https://forpet-ecommerce.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default ProductDetail
