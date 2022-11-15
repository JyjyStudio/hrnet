import { useEffect, useState } from 'react'
import DatePicker from './DatePicker'
import DepartmentDropdown from './DepartmentDropdown'
import StateDropdown from './StateDropdown'
import Input from './Input'
import styled from 'styled-components'
import Modal from '../Modal/Modal'
import { useTsDispatch } from '../../utils/redux/hooks'
import { addEmployee, Employee } from '../../utils/features/employees/EmployeesSlice'

export default function Form() {
	// local state to store every input value
	const [modal, setModal] = useState(false)
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [dateOfBirth, setDateOfBirth] = useState(new Date().toLocaleDateString())
	const [startDate, setStartDate] = useState(new Date().toLocaleDateString())
	const [street, setStreet] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [zipCode, setZipCode] = useState('')
	const [department, setDepartment] = useState('')
	const [newEmployee, setNewEmployee] = useState<Employee>(null)

	useEffect(() => {
		setNewEmployee({
			firstname,
			lastname,
			dateOfBirth,
			startDate,
			street,
			city,
			state,
			zipCode,
			department,
		})
	}, [firstname, lastname, dateOfBirth, startDate, street, city, state, zipCode, department])


	const dispatch = useTsDispatch()

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		setModal(true)
		dispatch(addEmployee(newEmployee))
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<h2 style={{ textAlign: 'center' }}>Create Employee</h2>
				<Input
					type="text"
					name="first-name"
					value={firstname}
					setFunction={setFirstname}
					required
				/>
				<Input
					type="text"
					name="last-name"
					value={lastname}
					setFunction={setLastname}
					required
				/>
				<DatePicker
					value={dateOfBirth}
					setFunction={setDateOfBirth}
					label="date-of-birth"
					maxDate={new Date()}
					required
				/>
				<DatePicker
					value={startDate}
					setFunction={setStartDate}
					label="start-date"
					required
					noWeekends
				/>
				<Fieldset>
					<Input
						type="text"
						name="street"
						value={street}
						setFunction={setStreet}
						required
					/>
					<Legend>Address</Legend>
					<Input
						type="text"
						name="city"
						value={city}
						setFunction={setCity}
						required
					/>
					<StateDropdown setFunction={setState} />
					<Input
						type="number"
						name="zip-code"
						value={zipCode}
						setFunction={setZipCode}
						min={0}
						required
					/>
				</Fieldset>

				<DepartmentDropdown setFunction={setDepartment} />
				<SubmitBtn type="submit">Save</SubmitBtn>
			</StyledForm>
			{modal && (
				<Modal setModal={setModal}>
					Employee Created Successfully !
				</Modal>
			)}
		</>
	)
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	background: rgba(255, 255, 255, 0.45);
	box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
	backdrop-filter: blur(1.5px);
	-webkit-backdrop-filter: blur(1.5px);
	border: 1px solid rgba(255, 255, 255, 0.18);
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
