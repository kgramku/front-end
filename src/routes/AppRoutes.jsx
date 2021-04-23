import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from "views/HomeView";
import AboutView from "views/AboutView";

function AppRoutes({ children }) {
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route path="/" exact component={HomeView} />
				<Route path="/about" component={AboutView} />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRoutes;
