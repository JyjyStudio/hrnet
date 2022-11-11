import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { visuallyHidden } from '@mui/utils'
import styles from './Table.module.css'
import { useTsSelector } from '../../utils/redux/hooks'
import { getEmployees } from '../../utils/features/employees/selectors'
import { Employee } from '../../utils/features/employees/EmployeesSlice'

export default function EnhancedTable() {
	const [order, setOrder] = React.useState<Order>('asc')
	const [orderBy, setOrderBy] = React.useState<keyof Employee>('firstname')
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(5)

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Employee
	) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	
	const employees = useTsSelector(getEmployees)
	console.log(employees);


	return (
		<Box className={styles.bg} >
			<EnhancedTableToolbar />
			<TableContainer>
				<Table sx={{ minWidth: 500 }} aria-labelledby="employees">
					<EnhancedTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
					/>
					<TableBody>
						{/* if you don't need to support IE11, you can replace the `stableSort` call with:
						rows.sort(getComparator(order, orderBy)).slice() 
						@ts-ignore*/}
						{stableSort(employees, getComparator(order, orderBy))
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row) => {
								return (
									<TableRow
										hover
										tabIndex={-1}
										key={row.firstname}
									>
										<TableCell>{row.firstname}</TableCell>
										<TableCell>{row.lastname}</TableCell>
										<TableCell>{row.startDate.toString()}</TableCell>
										<TableCell>{row.department}</TableCell>
										<TableCell>{row.dateOfBirth.toString()}</TableCell>
										<TableCell>{row.street}</TableCell>
										<TableCell>{row.city}</TableCell>
										<TableCell>{row.state}</TableCell>
										<TableCell align="center">
											{row.zipCode}
										</TableCell>
									</TableRow>
								)
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={employees.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Box>
	)
}



function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
	array: readonly T[],
	comparator: (a: T, b: T) => number
) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0])
		if (order !== 0) {
			return order
		}
		return a[1] - b[1]
	})
	return stabilizedThis.map((el) => el[0])
}

interface HeadCell {
	disablePadding: boolean
	id: keyof Employee
	label: string
}

const headCells: readonly HeadCell[] = [
	{
		id: 'firstname',
		disablePadding: false,
		label: 'First Name',
	},
	{
		id: 'lastname',
		disablePadding: false,
		label: 'Last Name',
	},
	{
		id: 'startDate',
		disablePadding: false,
		label: 'Start Date',
	},
	{
		id: 'department',
		disablePadding: false,
		label: 'Department',
	},
	{
		id: 'dateOfBirth',
		disablePadding: false,
		label: 'Date Of Birth',
	},
	{
		id: 'street',
		disablePadding: false,
		label: 'street',
	},
	{
		id: 'city',
		disablePadding: false,
		label: 'City',
	},
	{
		id: 'state',
		disablePadding: false,
		label: 'State',
	},
	{
		id: 'zipCode',
		disablePadding: false,
		label: 'ZipCode',
	},
]

interface EnhancedTableProps {
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Employee
	) => void
	order: Order
	orderBy: string
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { order, orderBy, onRequestSort } = props
	const createSortHandler =
		(property: keyof Employee) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property)
		}

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc'
										? 'sorted descending'
										: 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

function EnhancedTableToolbar() {
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
			}}
		>
			<Typography
				sx={{ flex: '1 1 100%' }}
				variant="h6"
				id="tableTitle"
				component="h2"
			>
				Employees
			</Typography>
		</Toolbar>
	)
}
