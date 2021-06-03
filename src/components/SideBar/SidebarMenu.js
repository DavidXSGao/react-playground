import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831
    border-left: 4px solid #632ce4
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: #f5f5f5;
  background: #414757;
  align-items: center;
  padding-left: 3rem;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #652ce4
    cursor: pointer;
  }
`;

function SidebarMenu({ item }) {
  const [isSubNavDisplayed, setIsSubNavDisplayed] = useState(false);

  const toggleSubNav = () =>
    setIsSubNavDisplayed((prevDisplayed) => !prevDisplayed);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && toggleSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && isSubNavDisplayed
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {isSubNavDisplayed &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default SidebarMenu;
