import Image from 'next/image'
import BgImage from '../public/assets/Abstract-Gradient-5.png'
import styled from 'styled-components'
import Head from 'next/head'

export default function list() {
	return (
	<>
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>HRNET - Employees</title>
		</Head>
		<BgContainer>
			<Image src={BgImage} alt="background" quality={100} fill placeholder="blur" />
		</BgContainer>
		<h1>Employees</h1>
	</>
	)
}

const BgContainer = styled.div`
	z-index: -1;
	position: fixed;
	width: 100vw;
	height: 100vh;
`
