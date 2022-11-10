import ElementPopper from "react-element-popper"
import transition from "react-element-popper/animations/transition"
import DatePicker, { DateObject } from "react-multi-date-picker"
import InputIcon from "react-multi-date-picker/components/input_icon"

export default function DPicker({ label, maxDate, value, setFunction, noWeekends }: Props) {
	
	const formatLabel = (label: string) => label.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1) + ' ')
	
	return (
	<>
		<label htmlFor={label}>{formatLabel(label)}</label>
		<DatePicker
			value={value}
			onChange={ (dateObject:DateObject) => setFunction(dateObject.format()) }
			id={label}
			maxDate={maxDate && maxDate}
			format="MM/DD/YYYY"
			editable={false}
			calendarPosition="bottom-end"
			weekStartDayIndex={1}
			animations={[transition()]} 
			fixMainPosition={true}
			render={<InputIcon />}
			mapDays={({ date }) => {
				let props = {className:''}
				let isWeekend = [0, 6].includes(date.weekDay.index)
				if (isWeekend && noWeekends) props.className = "highlight highlight-red"
				return props
			}}
		/>
	</>
	)
}

interface Props {
	label: string
	maxDate?: Date
	required?: boolean
	setFunction: Function
	noWeekends?: boolean
	value: string
}
