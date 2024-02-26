import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import { api } from '@/utils/api'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import NextNProgress from 'nextjs-progressbar'
import AOS from 'aos'
import SEO from '../../next-seo.config'
import 'aos/dist/aos.css'
import '@/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import { PersistGate } from 'redux-persist/lib/integration/react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={pageProps.session}>
          <main className={`${inter.variable} font-sans`}>
            <DefaultSeo {...SEO} />
            {getLayout(
              <>
                <NextNProgress
                  color="#00B1B9"
                  height={3}
                  options={{ showSpinner: false }}
                />
                <ThemeProvider>
                  <Component {...pageProps} />;
                </ThemeProvider>
              </>,
            )}
            {/* <Analytics /> */}
          </main>
          <ReactQueryDevtools />
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default api.withTRPC(appWithTranslation(MyApp))
