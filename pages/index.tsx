import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '../components/Modal'
import Input from '../components/Form/Input'
import StateSelect from '../components/Form/SelectState'
import DatePicker from '../components/Form/DatePicker'
import Dropdown from '../components/Form/Dropdown'
import Image from 'next/image'
import Head from 'next/head'
import BgImage from '../public/assets/Abstract-Gradient-5.png'

export default function Home(): JSX.Element {

	// local state to store every input value
	const [modal, setModal] = useState(false)
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [startDate, setStartDate] = useState(new Date())
	const [street, setStreet] = useState("")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [zipCode, setZipCode] = useState("")
	const [department, setDepartment] = useState("")

	// const dispatch = useTsDispatch()
	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		// dispatch(addEmployee())
		setModal(true)
	}


	return (
		<>
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>HRNET - Homepage</title>
		</Head>
		<Container>
			<BgContainer>
				<Image src={BgImage} alt="background" quality={100} fill placeholder="blur" />
			</BgContainer>
			
			<Headings>
				<h1>HRnet</h1>
				<StyledLink href="list">View Current Employees</StyledLink>
				<h2>Create Employee</h2>
			</Headings>
				
			<Form onSubmit={handleSubmit}>

				<Input type='text' name='first-name' value={firstname} setFunction={setFirstname} required/>
				<Input type='text' name='last-name' value={lastname} setFunction={setLastname} required/>
				<DatePicker label='date-of-birth' maxDate={new Date()} required />
				<DatePicker label='start-date' required />
				<Fieldset>
					<Legend>Address</Legend>
					<Input type='text' name='street' value={street} setFunction={setStreet} required/>
					<Input type='text' name='city' value={city} setFunction={setCity} required/>
					<StateSelect value={state} setFunction={setState}/>
					<Input type='number' name='zip-code' value={zipCode} setFunction={setZipCode} min={0} required/>
				</Fieldset>

				{/* <DepartmentSelect value={department} setFunction={setDepartment} /> */}
				
				<Dropdown />
				
				<SubmitBtn type="submit">Save</SubmitBtn>
				
			</Form>

			{modal && <Modal setModal={setModal}>Employee Created Successfully !</Modal>}
		</Container>
	</>
	)
}

const Container = styled.main`
	height: 100%;
	display: flex;
	max-width: 800px;
    margin: 0 auto;
    -webkit-justify-content: space-around;
	@media screen and (max-width: 700px) {
		flex-direction: column;
		-webkit-justify-content: inherit;
	}
`
const BgContainer = styled.div`
	z-index: -1;
	position: fixed;
	width: 100vw;
	height: 100vh;
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
const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	background: rgba( 255, 255, 255, 0.45 );
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 5px 1rem 10px;
    width: 50%;
    max-width: 400px;
	@media screen and (max-width: 700px) {
		width: 90%;
		margin: 2rem auto 1rem;
	}
`
const Fieldset = styled.fieldset`
	margin-top: 10px;
	padding: 5px 10px 10px;
	border: 1px solid blueviolet;
`
const Legend = styled.legend`
	padding: 0 5px;
    line-height: 1rem;
    font-style: italic;
`
const SubmitBtn = styled.button`
	margin-top: 1rem;
	padding: 10px 0;
	border: 1px solid lightgray;
	border-radius: 5px;
	cursor: pointer;
`
