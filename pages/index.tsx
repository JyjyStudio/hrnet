import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Input from '../components/Form/Input'
import DatePicker from '../components/Form/DatePicker'
import DepartmentDropdown from '../components/Form/DepartmentDropdown'
import StateDropdown from '../components/Form/StateDropdown'


export default function HomePage(): JSX.Element {

	// local state to store every input value
	const [modal, setModal] = useState(false)
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [dateOfBirth, setDateOfBirth] = useState(new Date())
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
		const newEmployee = {
			firstname,
			lastname,
			dateOfBirth,
			startDate,
			street,
			city,
			state,
			zipCode,
			department
		}

		console.log(newEmployee);
		
	}

	// setFlagsFromString({...Form, satut : ok})

	return (
		<>
		<Head>
			<title>HRNET - Homepage</title>
		</Head>
		<Container>

			<Headings>
				<H1>HRnet</H1>
				<StyledLink href="list">View Current Employees</StyledLink>
			</Headings>
				
			<Form onSubmit={handleSubmit}>
				<h2 style={{textAlign: 'center'}}>Create Employee</h2>
				<Input type='text' name='first-name' value={firstname} setFunction={setFirstname} required/>
				<Input type='text' name='last-name' value={lastname} setFunction={setLastname} required/>
				<DatePicker value={dateOfBirth} setFunction={setDateOfBirth} label='date-of-birth' maxDate={new Date()} required />
				<DatePicker value={startDate} setFunction={setStartDate} label='start-date' required noWeekends/>
				<Fieldset>
					<Input type='text' name='street' value={street} setFunction={setStreet} required/>
					<Legend>Address</Legend>
					<Input type='text' name='city' value={city} setFunction={setCity} required/>
					<StateDropdown setFunction={setState} />
					<Input type='number' name='zip-code' value={zipCode} setFunction={setZipCode} min={0} required/>
				</Fieldset>
				
				<DepartmentDropdown setFunction={setDepartment} />
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
	max-width: 1000px;
    margin: 0 auto;
    -webkit-justify-content: space-around;
	@media screen and (max-width: 700px) {
		flex-direction: column;
		-webkit-justify-content: inherit;
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
const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	background: rgba( 255, 255, 255, 0.45 );
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
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
	margin-top: 6px;
	padding: 5px 10px 10px;
	border: 1px solid #8a2be270;
	border-radius: 3px;
`
const Legend = styled.legend`
	padding: 0 5px;
    line-height: 1rem;
`
const SubmitBtn = styled.button`
	margin-top: 1rem;
	padding: 10px 0;
	border: 1px solid lightgray;
	border-radius: 5px;
	cursor: pointer;
`
