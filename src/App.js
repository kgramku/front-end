import Navbar from "components/Navbar";
// import SignUp from "components/SignUp/SignUp";
// import Login from "components/SignUp/Login";
import AppRoutes from "routes/AppRoutes";
import MobileNavbar from "components/MobileNavbar";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
	}
`;

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			{/* <SignUp/> */}
			<AppRoutes>
				<Navbar />
				<MobileNavbar/>
			</AppRoutes>
		
		</div>
	);
}

export default App;
