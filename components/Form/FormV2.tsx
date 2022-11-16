import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './Form.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validationSchema'
import DatePicker from './DatePicker'

type Inputs = {
	firstname: string
	lastname: string
	dateOfBirth: string
}

export default function Form() {
	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>({resolver: yupResolver(validationSchema),})
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
		reset()
	}
	console.log('dateOfBirth:', watch('dateOfBirth')) // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate inputs before invoking "onSubmit" */
		<form className={styles.employee_form} onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="firstname">First Name</label>
			<input
				id='firstname'
				aria-invalid={errors.firstname ? "true" : "false"}
				{...register('firstname', {
					pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
					required: true
				})}
			/>
			<small role="alert">{errors.firstname?.message}</small>

			<label htmlFor="lastname">Last Name</label>
			<input
				id='lastname'
				aria-invalid={errors.lastname ? "true" : "false"}
				{...register('lastname', { required: true })} />
			<small role="alert">{errors.lastname?.message}</small>

			{/* <label htmlFor="date-of-birth">Date Of Birth</label>
			<input
				id='date-of-birth'
				aria-invalid={errors.dateOfBirth ? "true" : "false"}
				{...register('dateOfBirth', { required: true })} />
			<small role="alert">{errors.dateOfBirth?.message}</small> */}
			
			<label htmlFor="dateOfBirth">Date Of Birth</label>
			<DatePicker
				value={watch('dateOfBirth')}
				named='dateOfBirth'
				id='dateOfBirth'
				maxDate={new Date()}
				aria-invalid={errors.dateOfBirth ? "true" : "false"}
				{...register('dateOfBirth', { required: true })} />
			<small role="alert">{errors.dateOfBirth?.message}</small>

			<input type="submit" />
		</form>
	)
}
