import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "components/SignUp/Login";
import SignUp from "components/SignUp/SignUp";
import Account from "components/Account/Profile";
import HomeView from "views/HomeView";
import MakePost from "views/MakePost";
import LogOut from "components/Account/LogOut";

function AppRoutes({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/post" component={MakePost} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route path="/logout" component={LogOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
