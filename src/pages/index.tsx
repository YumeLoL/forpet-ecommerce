import type { GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Hero, Promotions } from '@/components'
import { PrimaryLayout } from '@/layouts'
import { NewProducts } from '@/components/home/NewProducts'
import { api } from '@/utils/api'

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}

const Home: NextPageWithLayout = () => {
  const { data: newCat, isLoading: isCatLoading } =
    api.product.getNewProducts.useQuery({
      types: 'CAT',
      take: 8,
    })
  const { data: newDog, isLoading: isDogLoading } =
    api.product.getNewProducts.useQuery({
      types: 'DOG',
      take: 8,
    })

  return (
    <>
      <Hero />
      <NewProducts
        newCat={newCat?.products}
        newDog={newDog?.products}
        isCatLoading={isCatLoading}
        isDogLoading={isDogLoading}
      />
      <Promotions />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout seo={{ title: 'Home', canonical: '/' }}>
      {page}
    </PrimaryLayout>
  )
}

export default Home
