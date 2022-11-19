import Head from 'next/head'
import EmployeesTable from '../components/Table/Table'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Link from 'next/link'
import styled from "styled-components"

export default function list() {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>HRNET - Employees</title>
			</Head>
			<StyledTitle>
				<Link href="/">
					<KeyboardBackspaceIcon /> Add a new employee
				</Link>
			</StyledTitle>
			<EmployeesTable />
		</>
	)
}

const StyledTitle = styled.h2`
	position: absolute;
	top: 20%;
	left: 5%;
` 
