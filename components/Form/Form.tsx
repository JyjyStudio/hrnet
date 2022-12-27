import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './Form.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validationSchema'
import DatePicker from '../Datepicker/DatePicker'
import StateDropdown from '../Dropdown/StateDropdown'
import DepartmentDropdown from '../Dropdown/DepartmentDropdown'
import { useTsDispatch } from '../../utils/store/hooks'
import { addEmployee, Employee } from '../../utils/store/employees/EmployeesSlice'
import Modal from 'simple-react-modal-plugin'
// import Modal from '../Modal/Modal'
import useModal from '../Modal/useModal'

type Inputs = {
	firstname: string
	lastname: string
	dateOfBirth: string
	startDate: string
	street: string
	state: string
	city: string
	zipCode: string
	department: string
}

export default function Form() {
	const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(validationSchema) })
	const { visible, toggle } = useModal()
	const dispatch = useTsDispatch()

	const onSubmit: SubmitHandler<Inputs> = (newEmployee: Employee) => {
		toggle()
		console.log('newEmployee:', newEmployee)
		dispatch(addEmployee(newEmployee))
		reset()
	}
	// console.log('dateOfBirth:', watch('dateOfBirth')) // watch input value by passing the name of it

	return (
		<>
			{/* "handleSubmit" will validate inputs before invoking "onSubmit" */}
			<form
				className={styles.employee_form}
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Firstname */}
				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="firstname">
						First Name
					</label>
					<small className={styles.error_msg} role="alert">
						{errors.firstname?.message}
					</small>
					<input
						id="firstname"
						className={errors.firstname && styles.input_error}
						aria-invalid={errors.firstname ? 'true' : 'false'}
						{...register('firstname', {
							pattern:
								/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
							required: true,
						})}
					/>
				</div>
				{/* Lastname */}
				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="lastname">
						Last Name
					</label>
					<small className={styles.error_msg} role="alert">
						{errors.lastname?.message}
					</small>
					<input
						id="lastname"
						className={errors.lastname && styles.input_error}
						aria-invalid={errors.lastname ? 'true' : 'false'}
						{...register('lastname', { required: true })}
					/>
				</div>
				{/* Date of birth */}
				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="dateOfBirth">
						Date Of Birth
					</label>
					<small className={styles.error_msg} role="alert">
						{errors.dateOfBirth?.message}
					</small>
					<DatePicker
						error={errors.dateOfBirth}
						aria-invalid={errors.dateOfBirth ? 'true' : 'false'}
						maxDate={new Date()}
						onChange={(val: string) => {
							setValue('dateOfBirth', val)
							register('dateOfBirth', { required: true })
						}}
					/>
				</div>
				{/* Start Date */}
				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="startDate">
						Start Date
					</label>
					<small className={styles.error_msg} role="alert">
						{errors.startDate?.message}
					</small>
					<DatePicker
						error={errors.startDate}
						aria-invalid={errors.startDate ? 'true' : 'false'}
						noWeekends
						onChange={(val: string) => {
							setValue('startDate', val)
							register('startDate', { required: true })
						}}
					/>
				</div>
				<fieldset className={styles.employee_form__fieldset}>
					<legend className={styles.employee_form__legend}>
						Adress
					</legend>

					{/* Street */}
					<div className={styles.input_container}>
						<label className={styles.label} htmlFor="street">
							Street
						</label>
						<small className={styles.error_msg} role="alert">
							{errors.street?.message}
						</small>
						<input
							id="street"
							className={errors.street && styles.input_error}
							aria-invalid={errors.street ? 'true' : 'false'}
							{...register('street', { required: true })}
						/>
					</div>
					{/* City */}
					<div className={styles.input_container}>
						<label className={styles.label} htmlFor="city">
							City
						</label>
						<small className={styles.error_msg} role="alert">
							{errors.city?.message}
						</small>
						<input
							id="city"
							className={errors.city && styles.input_error}
							aria-invalid={errors.city ? 'true' : 'false'}
							{...register('city', { required: true })}
						/>
					</div>
					{/* State Dropdown */}
					<div className={styles.input_container}>
						<label className={styles.label} htmlFor="state">
							State
						</label>
						<small className={styles.error_msg} role="alert">
							{errors.state?.message}
						</small>
						<StateDropdown
							onChange={(value: string) => {
								setValue('state', value)
								register('state', { required: true })
							}}
						/>
					</div>
					{/* zipCode */}
					<div className={styles.input_container}>
						<label className={styles.label} htmlFor="zipCode">
							Zip Code
						</label>
						<small className={styles.error_msg} role="alert">
							{errors.zipCode?.message}
						</small>
						<input
							id="zipCode"
							className={errors.zipCode && styles.input_error}
							aria-invalid={errors.zipCode ? 'true' : 'false'}
							{...register('zipCode', { required: true })}
						/>
					</div>
				</fieldset>
				{/* Department Dropdown */}
				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="department">
						Department
					</label>
					<small className={styles.error_msg} role="alert">
						{errors.department?.message}
					</small>
					<DepartmentDropdown
						onChange={(value: string) => {
							register('department', { required: true, min: 0 })
							setValue('department', value)
						}}
					/>
				</div>
				<input className={styles.employee_form__submit} type="submit" />
			</form>

			{/* modal */}
			<Modal visible={visible} hide={toggle}>
				Employee Created Successfully !
			</Modal>
		</>
	)
}
