import React from "react";
import styled from "styled-components/macro";
import ChatIcon from "@material-ui/icons/Chat";
import PhoneIcon from "@material-ui/icons/Phone";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import AssignmentIcon from "@material-ui/icons/Assignment";
import WidgetsIcon from "@material-ui/icons/Widgets";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useDispatch } from "react-redux";
import { logout } from "features/userSlice";

const Navbar = ({ toggleTheme, notify }) => {
  const dispatch = useDispatch();

  return (
    <StyledNavbar>
      <NavbarList>
        <NavbarListElement onClick={() => dispatch(logout())}>
          <ChatIcon />
        </NavbarListElement>
        <NavbarListElement onClick={notify}>
          <PhoneIcon />
        </NavbarListElement>
        <NavbarListElement onClick={notify}>
          <AccountBoxIcon />
        </NavbarListElement>
        <NavbarListElement onClick={notify}>
          <AssignmentIcon />
        </NavbarListElement>

        {/* spacer */}
        <NavbarSpacer></NavbarSpacer>

        <NavbarListElement>
          <a
            href='https://github.com/Shuan97/inz'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
        </NavbarListElement>
        <NavbarListElement onClick={notify}>
          <WidgetsIcon />
        </NavbarListElement>
        <NavbarListElement onClick={toggleTheme}>
          <SettingsRoundedIcon />
        </NavbarListElement>
      </NavbarList>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  display: flex;
  min-width: 4rem;
  width: 4rem;
  height: 100vh;
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.backgroundSecondary};
`;

const NavbarListElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 4.25rem;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  transition: background-color 100ms linear;

  a {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-left: 0 solid ${({ theme }) => theme.backgroundAccent};
    transition: border 100ms linear;
  }

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};

    svg {
      color: ${({ theme }) => theme.backgroundAccent};
      font-size: 1.8rem;
    }

    &::after {
      border-left-width: 4px;
    }
  }
`;

const NavbarSpacer = styled.li`
  flex: 1;
`;
