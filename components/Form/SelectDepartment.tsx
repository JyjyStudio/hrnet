import { SetStateAction } from "react"
import SelectInput from './SelectInput'
/**
 * Used to standardize the style and usage of the department select menu in all our forms.
 */
export default function DepartmentSelect({value, setFunction}: Props) {
	
	// List of all the departements existing in our compagny
	const departments: Array<string> = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

	return <SelectInput name="department" options={departments} value={value} setFunction={setFunction} />

}
interface Props {
	value: string
	setFunction: React.Dispatch<SetStateAction<string>>
}