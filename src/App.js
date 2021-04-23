import Navbar from "components/Navbar";
import AppRoutes from "routes/AppRoutes";

function App() {
	return (
		<div className="App">
			<AppRoutes>
				<Navbar />
			</AppRoutes>
		</div>
	);
}

export default App;
