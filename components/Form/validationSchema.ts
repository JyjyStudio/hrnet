import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	firstname: Yup.string()
		.required('This field is required')
		.matches(/^[a-z-éèêëçäà]+[ \-']?[[a-z]+[ \-']?]*[a-z-éèêëçäà]+$/gi, 'verifiez votre saisie'),
	lastname: Yup.string()
		.required("This field is required")
		.matches(/^[a-z-éèêëçäà]+[ \-']?[[a-z]+[ \-']?]*[a-z-éèêëçäà]+$/gi, 'verifiez votre saisie'),
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
		.matches(/^[0-9]*$/, 'verifiez votre saisie'),
	department: Yup.string()
		.required('This field is required'),
})
