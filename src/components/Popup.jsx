import React, { useState } from "react";
import { PopupItems } from "./PopupItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PopupList = styled.div`
  width: 100px;
  position: absolute;
  right: 350px;
  top: 310px;
  background: #9de4da;
  border-radius: 15px;
  @media (max-width: 1024px) {
    right: 200px;
  }

  @media (max-width: 968px) {
    right: 100px;
  }
  @media (max-width: 768px) {
    right: 40px;
  }

  @media (max-width: 600px) {
    right: 0;
  }

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
      background: #5ec7b9;
      cursor: pointer;
    }
  }

  .clicked {
    display: none;
  }
  .popup-link {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: rgb(0, 0, 0);
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
