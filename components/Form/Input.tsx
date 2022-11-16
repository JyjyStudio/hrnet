import { SetStateAction } from 'react'
import styled from 'styled-components'

/**
 * Used to standardize the style and usage of input text or date or number in all our forms.
 */
export default function Input({ type, name, label, min, required }: Props) {

	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				name={name}
				required={required ? true : false}
				min={min && "0"}
			/>
		</Container>
	)
}
interface Props {
	type: string
	name: string
	label?: string
	required?: boolean
	min?: number
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
