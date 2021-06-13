import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../images/logo.jpg";
import Menu from "./../images/menu.jpg";
import Menubar from "./MenuBar";

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

  .logo {
    height: 100%;

    img {
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    display: none;
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

    @media (max-width: 600px) {
      padding: 5px;
    }
  }
`;
const MenuBar = styled.div`
  display: flex;
  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
`;

const Navbar = () => {
  const [menubar, setMenubar] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setMenubar(!menubar);
  };

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
      <MenuBar>
        <div className="menu">
          <img src={Menu} alt="MENU" onClick={onClick} />
          {menubar && <Menubar />}
        </div>
      </MenuBar>
    </NavbarWrapper>
  );
};

export default Navbar;
