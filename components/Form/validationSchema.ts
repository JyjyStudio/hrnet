import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	firstname: Yup.string()
		.required('This field is required')
		.matches(/^[a-z-éèêëçäà]+[ \-']?[[a-z]+[ \-']?]*[a-z-éèêëçäà]+$/gi, 'Check your input'),
	lastname: Yup.string()
		.required("This field is required")
		.matches(/^[a-z-éèêëçäà]+[ \-']?[[a-z]+[ \-']?]*[a-z-éèêëçäà]+$/gi, 'Check your input'),
	dateOfBirth: Yup.string()
		.required('This field is required'),
	startDate: Yup.string()
		.required('This field is required'),
	street: Yup.string()
		.required('This field is required'),
	state: Yup.string()
		.required('This field is required'),
	city: Yup.string()
		.required('This field is required'),
	zipCode: Yup.string()
		.required('This field is required')
		.matches(/^[0-9]*$/, 'Check your input'),
	department: Yup.string()
		.required('This field is required'),
})
