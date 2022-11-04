import { Dropdown } from 'react-dropdown-now';
import styles from './Dropdown.module.css'
import 'react-dropdown-now/style.css';

export default function PersonnalDropdown({options, setFunction, placeholder}:Props) {

	return (
		<Dropdown 
			baseClassName="rdn"
			className={styles.styled_Dropdown}
			placeholder={placeholder}
			options={options}
			onChange={(value) => {
				console.log('change!', value)
				setFunction(value.value)
			}}
			// onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
		/>
	)
}

interface Props {
	options: Array<{id: string, value:string, view: any}> | Array<string>
	setFunction: Function
	placeholder: string
}
