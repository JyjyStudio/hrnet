import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import DefaultTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useTsDispatch, useTsSelector } from '../../utils/store/hooks'
import { getEmployees } from '../../utils/store/employees/selectors'
import styles from './Table.module.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { deleteEmployee, Employee } from '../../utils/store/employees/EmployeesSlice'
import { Order } from "./types"
import { TableHead, SearchBar, stableSort, getComparator } from './TableHead'
import styled from 'styled-components'

export default function Table() {
	const [order, setOrder] = useState<Order>('asc')
	const [orderBy, setOrderBy] = useState('firstname')
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const [isEditing, setIsEditing] = useState(false)
	const dispatch = useTsDispatch()
	
	const employees = useTsSelector(getEmployees)
	const [rows, setRows] = useState(employees)

	/* Re rendering when editing or deleting an employee */
	useEffect(() => {
		setRows(employees)
	}, [employees])

	/* sort the content by clicking on the arrow */
	const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}
	/* Pagination */
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}
	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}
	/**Sure about deleting an employee? */
	const handleDelete = (id:string, firstname:string) => confirm(`are u sure to delete ${firstname} ?`) && dispatch(deleteEmployee(id))

	return (
		<Box className={`${styles.bg} ${styles.center}`}>
			<SearchBar rows={rows} setRows={setRows} />
			<TableContainer>
				<DefaultTable sx={{ minWidth: 500 }} aria-labelledby="employees">
					<TableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
					/>
					<TableBody>
						{stableSort(rows, getComparator(order, orderBy))
							.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage )
							.map((row) => (
								<TableRow
									hover
									tabIndex={-1}
									key={`${row?.firstname}-${row?.lastname}`}
								>
									<TableCell>{isEditing? <input type="text"/> : row.firstname}</TableCell>
									<TableCell>{row.lastname}</TableCell>
									<TableCell>
										{row.startDate.toString()}
									</TableCell>
									<TableCell>{row.department}</TableCell>
									<TableCell>
										{row.dateOfBirth.toString()}
									</TableCell>
									<TableCell>{row.street}</TableCell>
									<TableCell>{row.city}</TableCell>
									<TableCell>{row.state}</TableCell>
									<TableCell align="center">
										{row.zipCode}
									</TableCell>
									<TableCell>
										<EditBtn onClick={() => alert(`edit user ${row.id}`)} /> 
										<DeleteBtn onClick={() => handleDelete(row.id, row.firstname)} />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</DefaultTable>
			</TableContainer>
			{/* Footer Table Pagination */}
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Box>
	)
}

const EditBtn = styled(FiEdit)`
	color: orange;
	cursor: pointer;
	font-size: 1.2rem;
	margin: 0 5px;
`
const DeleteBtn = styled(RiDeleteBin5Line)`
	color: red;
	cursor: pointer;
	font-size: 1.2rem;
	margin: 0 5px;
`