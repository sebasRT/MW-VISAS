import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import '@/pagesStyles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => (<div id= "root">
    <Head >
      <title>MW-VISAS  -  Expertos migratorios</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
  <Header/>{page} <ContactUs/>
  </div>))
  return getLayout(<Component {...pageProps} />)}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  }