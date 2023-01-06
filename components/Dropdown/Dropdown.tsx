import { useState, MouseEvent} from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Slide from '@mui/material/Slide'
import styles from './Dropdown.module.css'

export default function CustomizedMenus({ error, options, onChange, defaultPlaceholder, scrollable }: Props) {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [placeHolder, setPlaceholder] = useState<string>(defaultPlaceholder)
	const open = Boolean(anchorEl)
	
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (event: MouseEvent<HTMLElement>) => {
		if(event.currentTarget.textContent) {
			onChange(event.currentTarget.textContent)
			setPlaceholder(event.currentTarget.textContent)
		}
		setAnchorEl(null)
	}

	return (
		<div className={styles.dropdown_container}>
			<Button
				// className={error ? "error" : ""}
				className={error ? styles.input_error : ""}
				id="dropdown-button"
				aria-controls={open ? 'dropdown-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				fullWidth
			>
				{placeHolder}
			</Button>

			<Menu
				elevation={0}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				id="dropdown-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Slide}
				MenuListProps={{
					sx: { 
						width: anchorEl && (scrollable ? `calc(${anchorEl.clientWidth}px - 8px)` : anchorEl.clientWidth),
						maxHeight: 400,
					 },
					'aria-labelledby': 'dropdown-button',
				}}
			>
				{options.map((option:any, index) => (
					<MenuItem key={index} onClick={handleClose} disableRipple>
						{option.view || option}
					</MenuItem>
				))}
			</Menu>
			
		</div>
	)
}

interface Option { id: string, value: string, view: any }
interface Props {
	error: boolean
	options: Array<Option> | Array<string>
	defaultPlaceholder: string
	onChange: Function
	scrollable?: boolean
}