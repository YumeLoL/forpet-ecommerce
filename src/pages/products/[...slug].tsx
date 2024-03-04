import type { GetStaticPathsResult, GetStaticProps } from 'next'
import type { NextPageWithLayout } from '../_app'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Navigation, ProductsList } from '@/components'
import { Pagination } from '@/components/ui'
import { PrimaryLayout } from '@/layouts'
import { CollectionType } from '@prisma/client'
import { api } from '@/utils/api'
import { SlidersHorizontal } from 'lucide-react'

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
  const utils = api.useUtils()

  const {
    slug,
    rate,
    page = 1,
    sizes,
    brand,
    cate,
    gte,
    lte,
  } = router.query as {
    slug: string[] | undefined
    rate: number | undefined
    page: number | undefined
    price: string | undefined
    sizes: string | string[] | undefined
    brand: string | string[] | undefined
    cate: string | string[] | undefined
    gte: number | undefined
    lte: number | undefined
  }

  const queryInput = useMemo(
    () => ({
      types: slug && (slug[0].toUpperCase() as CollectionType),
      slug: slug && slug[1],
      cate: [cate].flat(1).filter(Boolean) as string[],
      page: page && Number(page),
      rate: rate && Number(rate),
      gte: gte && Number(gte),
      lte: lte && Number(lte),
    }),
    [brand, page, gte, lte, rate, sizes, slug, cate],
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

  const [openBottom, setOpenBottom] = useState(false)
  return (
    <div className="mx-auto items-center p-4 xl:container">
      <div className="w-full flex md:hidden justify-end">
        <SlidersHorizontal
          className="rounded-md m-2 bg-green-200 text-white p-1 shadow cursor-pointer
          "
          onClick={() => setOpenBottom(true)}
          size="30"
        />
      </div>

      <div className="flex gap-5">
        <Navigation openBottom={openBottom} setOpenBottom={setOpenBottom} />
        <div className="flex-[5]">
          {data?.products.length === 0 && data.totalCount === 0 && (
            <div className="text-center">
              <h1 className="text-lg font-bold">No Products Found</h1>
              <p className="text-md">Try different category type</p>
            </div>
          )}
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
        canonical: 'https://forpet-ecommerce.vercel.app/products',
      }}
    >
      {page}
    </PrimaryLayout>
  )
}

export default Products
