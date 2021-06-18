import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownList = styled.div`
  width: 200px;
  position: absolute;
  right: 0;
  top: 80px;
  background: #9de4da;
  border-radius: 15px;
  text-align: start;

  @media only screen and (max-width: 600px) {
    top: 60px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    /* background: lightgrey; */

    padding: 8px 10px;
    font-size: 18px;

    :hover {
      background: #08c5c5;
      cursor: pointer;
    }
  }

  .clicked {
    display: none;
  }
  .dropdown-link {
    /* display: block; */
    width: 100%;
    height: 100% text-decoration= none;
    color: black;
  }
`;

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const MenuItems = [
    {
      title: "Profile",
      path: "/profile",
      cName: "dropdown-link",
    },
    {
      title: "Edit Profile",
      path: "/editprofile",
      cName: "dropdown-link",
    },
    {
      title: "ChangePassword",
      path: "/changepassword",
      cName: "dropdown-link",
    },
    {
      title: "LogOut",
      path: "/logout",
      cName: "dropdown-link",
    },
  ];

  return (
    <div>
      <DropdownList>
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link
                  className={items.cName}
                  to={items.path}
                  onClick={() => setClick(false)}
                >
                  {items.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </DropdownList>
    </div>
  );
};

export default Dropdown;
