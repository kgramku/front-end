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

  @media (max-width: 650px) {
    display: none;
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

  @media (max-width: 850px) {
    gap: 25px;
    font-size: 20px;
  }

  /* @media (min-width: 768px) {
    display: none;
    gap: 20px;
    font-size: 15px;
  } */

  /* @media (max-width: 500px) {
    gap: 20px;
    font-size: 12px;
  }

  @media (max-width: 468px) {
    display: none;
  } */

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
  /* 
  @media only screen and (min-width: 300px) and (max-width: 600px) {
    gap: 10px;
    font-size: 12px;
    margin: 15px 5px 5px;
  } */

  input {
    padding: 5px;

    outline-width: 0;
    border-radius: 999px;
    background-color: white;
    box-sizing: border-box;
  }
`;

const Navbar = () => {
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
          <div className="menu">
            <image src={Menu} alt="MENU" />
          </div>

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
        </NavListWrapper>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
