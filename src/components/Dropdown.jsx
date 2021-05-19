import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownList = styled.div`
  width: 200px;
  position: absolute;
  right: 0;
  top: 80px;
  background: lightgrey;
  border-radius: 15px;

  text-align: start;
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
      background: whitesmoke;
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
