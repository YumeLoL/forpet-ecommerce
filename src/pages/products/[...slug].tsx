import type { GetStaticPathsResult, GetStaticProps } from 'next'
import type { NextPageWithLayout } from '../_app'
import { ReactElement, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Navigation, ProductsList } from '@/components'
import { Pagination } from '@/components/ui'
import { PrimaryLayout } from '@/layouts'
import { CollectionType, ProductColor, ProductSize } from '@prisma/client'
import { api } from '@/utils/api'
// import { ProductItem, Skeleton } from '@/components/product/ProductItem'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string)),
    },
  }
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Products: NextPageWithLayout = () => {
  const router = useRouter()
  const utils = api.useContext()

  const {
    slug,
    rate,
    page = 1,
    sizes,
    colors,
    cate,
    gte,
    lte,
  } = router.query as {
    slug: string[] | undefined
    rate: number | undefined
    page: number | undefined
    price: string | undefined
    sizes: string | string[] | undefined
    colors: string | string[] | undefined
    cate: string | string[] | undefined
    gte: number | undefined
    lte: number | undefined
  }

  console.log(router.query)

  const queryInput = useMemo(
    () => ({
      types: slug && (slug[0].toUpperCase() as CollectionType),
      slug: slug && slug[1],
      cate: [cate].flat(1).filter(Boolean) as string[],
      sizes: [sizes].flat(1).filter(Boolean) as ProductSize[],
      colors: [colors].flat(1).filter(Boolean) as ProductColor[],
      page: page && Number(page),
      rate: rate && Number(rate),
      gte: gte && Number(gte),
      lte: lte && Number(lte),
    }),
    [colors, page, gte, lte, rate, sizes, slug, cate],
  )

  const { data, isLoading, isPreviousData } =
    api.product.all.useQuery(queryInput)

  const pageSize = 12

  useEffect(() => {
    if (data) {
      const totalPageCount = Math.ceil(data.totalCount / pageSize)
      if (!isPreviousData && totalPageCount > Number(page)) {
        utils.product.all.prefetch({ ...queryInput, page: Number(page) + 1 })
      }
    }
  }, [data, page, isPreviousData, queryInput, utils])

  return (
    <div className="mx-auto items-center p-4 xl:container">
      <div className="flex gap-5">
        <div className="hidden flex-1 md:block">
          <Navigation />
        </div>
        <div className="flex-[5]">
          <ProductsList products={data?.products} isLoading={isLoading} />
          <div className="flex justify-center py-5">
            <Pagination
              totalCount={data?.totalCount}
              currentPage={Number(page)}
              pageSize={pageSize}
              onPageChange={(page) =>
                router.push({ query: { ...router.query, page } }, undefined, {
                  shallow: true,
                  scroll: true,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Products',
        description: 'Products',
        // canonical: 'https://karashop.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default Products
