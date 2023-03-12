import EmployeesTable from "../components/Table/Table"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Employees() {
	return (
		<>
			<StyledTitle>
				<StyledLink to="/">
					<ArrowLeftIcon /> Add a new employee
				</StyledLink>
			</StyledTitle>
			<EmployeesTable />
		</>
	)
}

const StyledTitle = styled.h2`
	padding: 5% 5% 2%;
`
const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	width: fit-content;
`
const ArrowLeftIcon = styled(KeyboardBackspaceIcon)`
	margin-right: 5px;
`
