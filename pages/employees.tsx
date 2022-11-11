import Head from 'next/head'
import EmployeesTable from '../components/Table/Table'
export default function list() {
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>HRNET - Employees</title>
			</Head>

			<EmployeesTable />
		</>
	)
}
