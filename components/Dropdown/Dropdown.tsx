import { Dropdown } from 'react-dropdown-now';
import styles from './Dropdown.module.css'
import 'react-dropdown-now/style.css';

export default function PersonnalDropdown({options, onChange, placeholder}:Props) {

	return (
		<Dropdown
			baseClassName="rdn"
			className={styles.styled_Dropdown}
			placeholder={placeholder}
			options={options}
			onChange={onChange}
		/>
	)
}

interface Props {
	options: Array<{id: string, value:string, view: any}> | Array<string>
	placeholder: string
	onChange: any
}
