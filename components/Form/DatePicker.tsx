import { useState } from 'react'
import type { Value } from 'react-multi-date-picker'
import ElementPopper from "react-element-popper"
import transition from "react-element-popper/animations/transition"
import DatePicker from "react-multi-date-picker"
import InputIcon from "react-multi-date-picker/components/input_icon"

export default function DPicker({ label, maxDate, required }: Props) {
	
	const formatLabel = (label: string) => label.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1) + ' ')
	const [date, setDate] = useState<Value>(new Date())

	return (
		<>
			<label htmlFor={label}>{formatLabel(label)}</label>
			<DatePicker
				value={date}
				onChange={setDate}
				id={label}
				maxDate={maxDate && maxDate}
				required={required && required}
				calendarPosition="bottom-end"
				animations={[transition()]} 
				render={<InputIcon />}
				fixMainPosition={true}
			/>
		</>
	)
}

interface Props {
	label: string
	maxDate?: Date
	required?: boolean
}
