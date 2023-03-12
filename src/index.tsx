import ReactDOM from "react-dom/client"
import BgImage from "./assets/Abstract-Gradient-5.png"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./utils/store/store"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import styled from "styled-components"
import Home from "./screens/Home"
import Employees from "./screens/Employees"
import "./utils/styles/globals.css"

const BgContainer = styled.div`
	z-index: -1;
	position: fixed;
	width: 100vw;
	height: 100vh;
	@media (max-width: 500px) {
		background-attachment: scroll;
		min-width: 100%;
		min-height: 100%;
	}
`

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<BgContainer>
			<img src={BgImage} alt="background" />
		</BgContainer>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/employees" element={<Employees />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</>
)

