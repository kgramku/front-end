import React, { useState } from "react";
import { PopupItems } from "./PopupItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PopupList = styled.div`
  width: 100px;
  position: absolute;
  right: 0;
  top: 80px;
  background: #9de4da;
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
      background: #72a09a;
      cursor: pointer;
    }
  }

  .clicked {
    display: none;
  }
  .dropdown-link {
    width: 100%;
    height: 100% text-decoration= none;
    color: black;
  }
`;

const Popup = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <PopupList>
        <ul
          onClick={handleClick}
          className={click ? "popup-menu clicked" : "popup-menu"}
        >
          {PopupItems.map((items, index) => {
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
      </PopupList>
    </div>
  );
};

export default Popup;
