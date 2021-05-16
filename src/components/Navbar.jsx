import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../images/logo.jpg";

const NavbarWrapper = styled.nav`
  margin: 0;
  padding: 10px;
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  background-color: #545a8f;
  justify-content: space-between;
  box-sizing: border-box;

  box-shadow: 0px 2px 6px lightgrey;

  .logo {
    height: 100%;

    img {
      height: 100%;
    }
  }
`;

const NavListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: 24px;

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const Searchbar = styled.div`
  display: flex;
  gap: 30px;
  font-size: 22px;
  margin: 20px;

  input {
    padding: 5px;

    outline-width: 0;
    border-radius: 999px;
    background-color: white;
    box-sizing: border-box;
  }
`;

const Navbar = () => {
  // const history = useHistory("");

  // const logout = () => {
  //   history.push("/signup");
  // };

  return (
    <NavbarWrapper>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Searchbar>
        <div className="search">
          <input type="text" placeholder="Search bar" />
        </div>
      </Searchbar>
      <div className="links">
        <NavListWrapper>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/notifications">Notification</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/logout">LogOut</Link>
          </li>
        </NavListWrapper>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
