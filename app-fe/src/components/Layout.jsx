import React from "react";
import Chat from "./Chat/Chat";
import styled from "styled-components/macro";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";

const Layout = ({ toggleTheme, notify }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} notify={notify} />
      <Sidebar />
      <StyledLayout>
        <Chat />
      </StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.div`
  flex: 1;
  overflow: hidden;
`;
