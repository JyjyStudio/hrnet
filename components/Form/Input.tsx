import { SetStateAction } from 'react'
import styled from 'styled-components'

/**
 * Used to standardize the style and usage of input text or date or number in all our forms.
 */
export default function Input({ type, name, value, setFunction, min, required }: Props) {

	const formatName = (name : string) => name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1) + ' ')

	return (
		<Container>
			<label htmlFor={name}>{formatName(name)}</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={(event) => setFunction(event.target.value)}
				required={required ? true : false}
				min={min && "0"}
			/>
		</Container>
	)
}
interface Props {
	type: string
	name: string
	value: string
	setFunction: React.Dispatch<SetStateAction<string>>
	required?: boolean
	min?: number
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
