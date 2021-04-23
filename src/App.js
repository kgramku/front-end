import Navbar from "components/Navbar";
import AppRoutes from "routes/AppRoutes";

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
			<AppRoutes>
				<Navbar />
			</AppRoutes>
		</div>
	);
}

export default App;
