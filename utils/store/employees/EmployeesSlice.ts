import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//creation d'une partie de notre store (slice). Contient le nom du slice, son state initial et les reducers
const initialState: Array<Employee> = [
	{
		firstname: 'John',
		lastname: 'Doe',
		dateOfBirth: '21/09/1987',
		startDate: '12/01/2023',
		street: 'street city',
		city: 'city street',
		state: 'Alabama',
		zipCode: '56945',
		department: 'Sales',
		id: '958sdzfz,'
	},
	{
		firstname: 'Tony',
		lastname: 'Stark',
		dateOfBirth: '01/12/1976',
		startDate: '01/01/2020',
		street: '1st avenue',
		city: 'New York City',
		state: 'New York',
		zipCode: '92000',
		department: 'Legal',
		id: 'sdfz5521z,'
	}
]

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action: PayloadAction<Employee>) => {
			state.push(action.payload)
		},
		deleteEmployee: (state, action: PayloadAction<string>) => {
			return state.filter(employee => JSON.parse(JSON.stringify(employee.id)) !== action.payload)
		}
	},
})

export const { addEmployee, deleteEmployee } = employeesSlice.actions 

export type Employee = {
	firstname: string
	lastname: string
	dateOfBirth: string
	startDate: string
	street: string
	city: string
	state: string
	zipCode: string
	department: string
	id: string
}

export default employeesSlice.reducer