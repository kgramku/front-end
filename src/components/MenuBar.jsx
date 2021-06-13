import React, { useState } from "react";
import { BarItems } from "./BarItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuList = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  top: 100px;
  background: teal;
  border-radius: 15px;
  text-align: start;

  @media (max-width: 600px) {
    top: 90px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    /* background: lightgrey; */

    padding: 8px 10px;
    font-size: 22px;

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
    height: 100%;
    text-decoration: none;
    color: black;
  }
`;

const MenuBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <MenuList>
        <ul
          onClick={handleClick}
          className={click ? "menu-bar clicked" : "menu-bar"}
        >
          {BarItems.map((items, index) => {
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
      </MenuList>
    </div>
  );
};

export default MenuBar;
