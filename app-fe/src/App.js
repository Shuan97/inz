import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { light, dark } from "./assets/theme";
import { UseDarkMode } from "./utils/UseDarkMode";
import { THEME } from "./utils/Constants";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, getUser, getToken } from "./features/userSlice";
import Login from "./components/Auth/Login";
import { Redirect, Route, Switch } from "react-router-dom";
import API from "utils/API";
import { isEmpty } from "lodash";

const localStorageToken = localStorage.getItem("token");

function App() {
  const [theme, toggleTheme] = UseDarkMode();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const notify = () =>
    toast.info("🦄 This is 🌯 <burrittto>! 😂", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    console.log("User", user);
  }, [user]);

  useEffect(() => {
    console.log("TokenLocal", localStorageToken);
    console.log("TokenStore", token);
    if (localStorageToken) {
      API.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorageToken}`;
    } else {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  useEffect(() => {
    console.log("token", localStorageToken);
    (!!localStorageToken || !!token) &&
      isEmpty(user) &&
      dispatch(fetchUserProfile());
  }, [dispatch, token, user]);

  return (
    <ThemeProvider theme={theme === THEME.light ? light : dark}>
      <StyledApp>
        {!user && <Redirect to='/login' />}
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Navbar toggleTheme={toggleTheme} notify={notify} />
            <Sidebar />
            <Layout />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </StyledApp>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div`
  background: ${({ theme }) => theme.backgroundTertiary};
  display: flex;
  height: 100vh;

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.textPrimary};
    transition: font-size 100ms linear, color 100ms linear;
    cursor: pointer;

    ::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-left: 0 solid ${({ theme }) => theme.backgroundAccent};
      transition: border 100ms linear;
    }
  }

  .MuiSvgIcon-root:hover {
    color: ${({ theme }) => theme.backgroundAccent};
  }
`;
