import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "components/SignUp/Login";
import SignUp from "components/SignUp/SignUp";
import Account from "components/Account/Profile";
import HomeView from "views/HomeView";
import UserList from "components/UserList";
import LogOut from "components/Account/LogOut";
import ChangePassword from "components/Account/ChangePassword";
import EditProfile from "components/Account/EditProfile";
import Profile from "components/Account/Profile";

function AppRoutes({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/explore" component={UserList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route path="/profile" component={Profile} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/logout" component={LogOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
