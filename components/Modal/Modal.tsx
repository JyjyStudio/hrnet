import styled from 'styled-components'

export default function Modal({ children, setModal }: Props): JSX.Element {
	return (
		<>
			<Overlay onClick={() => setModal(false)} />
			<Content>
				<CloseIcon onClick={() => setModal(false)}>X</CloseIcon>
				<p>{children}</p>
			</Content>
		</>
	)
}

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(49,49,49,0.8);
`
const Content = styled.div`
	position: absolute;
	width: 50%;
	background: white;
	border-radius: 5px;
	text-align: center;
	padding: 2rem 0;
	top: 40%;
	left: 50%;
    transform: translateX(-50%);
	@media screen and (max-width: 500px) {
	    width: 60%;
    	padding: 4rem 1rem;
    	top: 45%;
	    font-size: 1.2rem;
	}
`
const CloseIcon = styled.span`
	position: absolute;
	top: -10px;
	right: -10px;
	cursor: pointer;
	border-radius: 50%;
	background: black;
	color: white;
	padding: 5px 10px;
`
interface Props {
	children: string
	setModal: Function
}
