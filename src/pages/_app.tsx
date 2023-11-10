import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import Info from '@/components/Info'
import useWindowSize from '@/utils/useWindowSize'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [width] = useWindowSize();
 
  const getLayout = Component.getLayout ?? ((page) => (<div id= "root">
  <Header/>{page} <ContactUs/> {width < 768 ? <Info color='text-blue-primary' size='text-base'/> : null}
  </div>))
  return getLayout(<Component {...pageProps} />)}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  }