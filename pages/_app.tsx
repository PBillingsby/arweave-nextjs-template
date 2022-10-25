import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MainContext } from '../context'
import { arweave, warp } from '../utils/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (<MainContext.Provider value={{
    arweave: arweave,
    warp: warp
  }}>
    <Component {...pageProps} />
  </MainContext.Provider>)
}

export default MyApp
