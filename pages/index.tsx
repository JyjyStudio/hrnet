import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Form from '../components/Form/Form'


export default function HomePage(): JSX.Element {

	return (
	<>
		<Head>
			<title>HRNET - Homepage</title>
		</Head>

		<Container>
			<Headings>
				<H1>HRnet</H1>
				<StyledLink href="employees">View Current Employees</StyledLink>
			</Headings>
			<Form />
		</Container>

	</>
	)
}

const Container = styled.main`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 1000px;
    margin: 0 auto;
	@media screen and (max-width: 700px) {
		flex-direction: column;
		justify-content: inherit;
	}
`
const Headings = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	@media screen and (max-width: 700px) {
		height: auto;
	}
`
const H1 = styled.h1`
	font-size: 5rem;
`
const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	font-size: 1.5rem;
    margin-top: 1rem;
	&:hover {
		text-decoration: underline;
	}
`
