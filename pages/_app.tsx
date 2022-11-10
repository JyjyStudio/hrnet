import Head from 'next/head'
import Image from 'next/image'
import BgImage from '/public/assets/Abstract-Gradient-5.png'
import styled from 'styled-components'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../utils/redux/store'
import '../utils/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<BgContainer>
				<Image
					src={BgImage}
					alt="background"
					quality={100}
					fill
					placeholder="blur"
				/>
			</BgContainer>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

const BgContainer = styled.div`
	z-index: -1;
	position: fixed;
	width: 100vw;
	height: 100vh;
	@media (max-width: 500px) {
        background-attachment: scroll;
		min-width: 100%;
  		min-height: 100%;
    }
`

