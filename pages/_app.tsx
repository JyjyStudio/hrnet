import '../styles/globals.css'
import "../components/Form/dropdown.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
