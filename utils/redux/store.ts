import { configureStore } from '@reduxjs/toolkit'
import employeesSlice from '../features/employees/EmployeesSlice'

// creation et configuration du store
export const store = configureStore({
	reducer: {
		employees: employeesSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
