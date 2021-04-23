import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from "views/HomeView";
import MakePost from "views/MakePost";

function AppRoutes({ children }) {
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route path="/" exact component={HomeView} />
				<Route path="/post" component={MakePost} />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRoutes;
