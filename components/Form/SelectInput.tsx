import { SetStateAction } from 'react'
import styled from 'styled-components'
/**
 * Used to standardize the style and usage of select menus in all our forms.
 */
export default function SelectMenu({ name, options, value, setFunction }: Props) {

	const formatName = (name : string) => name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1) + ' ')

	return (
		<Container>
			<Label htmlFor={name}>{formatName(name)}</Label>
			<Select
				id={name}
				name={name}
				value={value}
				onChange={(event) => {
					setFunction(event.target.value)
				}}
			>
				{options.map((option, index) => {
					return (
						<Option value={option} key={index}>
							{option}
						</Option>
					)
				})}
			</Select>
		</Container>
	)
}

interface Props {
	name: string
	options: Array<string>
	value: string
	setFunction: React.Dispatch<SetStateAction<string>>
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Label = styled.label`
	margin: 5px 0;
`
const Select = styled.select`
	border: 1px solid #c5c5c5;
	background: #f6f6f6;
	padding: 0.4em 1em;
	cursor: pointer;
`
const Option = styled.option`
	padding: 3px 1em 3px 0.4em;
	cursor: pointer;
`