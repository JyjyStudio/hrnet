import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import BgImage from 'public/assets/Abstract-Gradient-5.png'
import styled from 'styled-components'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
	<>
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
      	</Head>
		<BgContainer>
			<Image src={BgImage} alt="background" quality={100} fill placeholder="blur" />
		</BgContainer>
		
		<Component {...pageProps} />
	</>
  )
}

const BgContainer = styled.div`
	z-index: -1;
	position: fixed;
	width: 100vw;
	height: 100vh;
`
