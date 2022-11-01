import { useState } from "react"
import { FaChevronUp } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"
import { FcSalesPerformance, FcStatistics } from "react-icons/fc"
import { BsFillGearFill } from "react-icons/bs"
import { GiHumanPyramid } from "react-icons/gi"
import { GoLaw } from "react-icons/go"
import styled from "styled-components"

export default function Dropdown() {

	const departments: Array<{name:string, icon: any}> = [
		{ name: "Sales", icon: FcSalesPerformance},
		{ name: "Marketing", icon: FcStatistics},
		{ name: "Engineering", icon: BsFillGearFill},
		{ name: "Human Resources", icon: GiHumanPyramid},
		{ name: "Legal", icon: GoLaw},
	]
	const [value, setValue] = useState('')

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
		  console.log('✅ Checkbox is checked: ', value);
		  setValue(event.target.value)
		} else {
		  console.log('⛔️ Checkbox is NOT checked');
		}
	};
	
	return (

		<Container>
			<div id="select-box">
				<input type="checkbox" id="options-view-button" />
				<div id="select-button" className="brd">
					<div id="selected-value">
						<span>{departments[0].name}</span>
					</div>
					<div id="chevrons">
						<FaChevronUp/>
						<FaChevronDown/>
					</div>
				</div>
				<div id="options">
					{
						departments.map((department, index) => {						
							return <div className="option" key={`${department}-${index}`}>
								<input className="s-c top" type="radio" name="platform" onInput={handleChange} value={department.name} />
								<input className="s-c bottom" type="radio" name="platform" onInput={handleChange} value={department.name} />
								<department.icon />
								<span className="label">{department.name}</span>
								<span className="opt-val">{department.name}</span>
							</div>
						})
					}
					<div id="option-bg"></div>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	top: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`