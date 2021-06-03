import React, { useContext } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import { SidebarData } from "./SidebarData";
import SidebarMenu from "./SidebarMenu";
import { AppContext } from "./../../App";

const Nav = styled.div`
  background: #15171c;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavTitle = styled.h1`
  position: absolute; /* new */
  // left: 50%;
  left: ${({ isSidebarDisplayed }) => (isSidebarDisplayed ? "60%" : "50%")};
  transform: translateX(-50%);
  transition: 350ms;
`;

const SidebarNav = styled.div`
  background: #15171c;
  width: 250px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: ${({ isSidebarDisplayed }) => (isSidebarDisplayed ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function Sidebar() {
  const appContext = useContext(AppContext);

  const toggleSidebar = () => appContext.dispatch({ type: "toggleNavbar" });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={toggleSidebar} />
          </NavIcon>
          <NavTitle isSidebarDisplayed={appContext.state.isSidebarDisplayed}>
            React Experiments
          </NavTitle>
        </Nav>
        <SidebarNav isSidebarDisplayed={appContext.state.isSidebarDisplayed}>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={toggleSidebar} />
          </NavIcon>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SidebarMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
