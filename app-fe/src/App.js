import React from "react";
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

function App() {
	const [theme, toggleTheme] = UseDarkMode();
	const notify = () =>
		toast.info("🦄 This button has no action yet! 😂", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	return (
		<ThemeProvider theme={theme === THEME.light ? light : dark}>
			<StyledApp>
				<Navbar toggleTheme={toggleTheme} notify={notify} />
				<Sidebar />
				<Layout />
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
