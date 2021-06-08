import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../images/logo.jpg";
import Menu from "./../images/menu.jpg";
import Dropdown from "./Dropdown";

const NavbarWrapper = styled.nav`
  margin: 0;
  padding: 10px;
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  background-color: teal;
  justify-content: space-between;
  box-sizing: border-box;

  box-shadow: 0px 2px 6px lightgrey;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    height: 60px;
    padding: 0px;
  }

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

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    gap: 10px;
    font-size: 15px;
  }

  /* .menu {
    display: none;

    image {
      width: 40px;
      height: 40px;
      padding: 20px;
    }
  } */
  /* @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.8rem;
  } */

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;
const MenuBar = styled.div`
  .menu {
    display: flex;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.8rem;
    }

    image {
      width: 40px;
      height: 40px;
      padding: 20px;
    }
  }
`;

const Searchbar = styled.div`
  display: flex;
  gap: 30px;
  font-size: 22px;
  margin: 20px;

  @media only screen and (min-width: 300px) and (max-width: 600px) {
    gap: 10px;
    font-size: 12px;
    margin: 15px 5px 5px;
  }

  input {
    padding: 5px;

    outline-width: 0;
    border-radius: 999px;
    background-color: white;
    box-sizing: border-box;

    @media only screen and (min-width: 300px) and (max-width: 600px) {
      padding: 1px;
    }
  }
`;

const Navbar = () => {
  // const history = useHistory("");

  // const logout = () => {
  //   history.push("/signup");
  // };
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const onClick = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
    setButton(button);
  };

  const showButton = () => {
    if (window.innerWidth < 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // UseEffect(() => {
  //   showButton();
  // }, []);
  window.addEventListener("resize", showButton);
  // const onDoubleClick = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
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
          {/* <MenuBar>
            <div className="menu" onclick={onClick}>
              <image src={Menu} alt="MENU" />
            </div>
          </MenuBar> */}
          <li>
            <Link to="/">Home</Link>
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
            <Link onClick={onClick}>Account</Link>

            {dropdown && <Dropdown />}
          </li>
          {/* <li>
            <Link to="/logout">LogOut</Link>
          </li> */}
        </NavListWrapper>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
