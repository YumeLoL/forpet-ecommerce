import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  defaultTitle: 'ForPETS Store',
  titleTemplate: '%s | ForPETS Store',
  description:
    'Ecommerce built with T3 Stack : NextJS, TypeScript, tRPC, Prisma, NextAuth and styled with Tailwind CSS',
  // canonical: 'https://karashop.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    // url: 'https://karashop.vercel.app',
    siteName: 'ForPETS Store',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

export default config

