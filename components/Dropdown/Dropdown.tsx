import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import styles from './Dropdown.module.css'

export default function CustomizedMenus({ options, onChange, defaultPlaceholder, scrollable }: Props) {

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const [placeHolder, setPlaceholder] = React.useState<string>(defaultPlaceholder)

	const open = Boolean(anchorEl)
	
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		if(event.currentTarget.textContent) {
			onChange(event.currentTarget.textContent)
			setPlaceholder(event.currentTarget.textContent)
		}
		setAnchorEl(null)
	}

	return (
		<div className={styles.dropdown_container}>
			<Button
				id="demo-customized-button"
				aria-controls={open ? 'demo-customized-menu' : undefined}
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
			<StyledMenu
				id="demo-customized-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
					sx: { 
						width: anchorEl && (scrollable ? `calc(${anchorEl.clientWidth}px - 8px)` : anchorEl.clientWidth),
						maxHeight: 400,
					 },
				}}
			>
				{options.map((option:any, index) => (
					<MenuItem key={index} onClick={handleClose} disableRipple>
						{option.view || option}
					</MenuItem>
				))}
			</StyledMenu>
		</div>
	)
}

const StyledMenu = styled((props: MenuProps) => (
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
		{...props}
	/>
)) (({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: '0',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}))


interface Option { id: string, value: string, view: any }
interface Props {
	options: Array<Option> | Array<string>
	defaultPlaceholder: string
	onChange: Function
	scrollable?: boolean
}