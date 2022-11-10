import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//creation d'une partie de notre store (slice). Contient le nom du slice, son state initial et les reducers
const initialState: Employees = []

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action: PayloadAction<Employee>) => {
			state.push(action.payload)
		},
	},
})

export const { addEmployee } = employeesSlice.actions 

export interface Employee {
	firstname: string
	lastname: string
	dateOfBirth: string
	startDate: string
	street: string
	city: string
	state: string
	zipCode: string
	department: string
}

type Employees = [] | [Employee]

export default employeesSlice.reducer