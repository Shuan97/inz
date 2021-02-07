import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { light, dark } from "./assets/theme";
import { UseDarkMode } from "./utils/UseDarkMode";
import { THEME } from "./utils/Constants";

function App() {
	const [theme, toggleTheme] = UseDarkMode();
	return (
		<ThemeProvider theme={theme === THEME.light ? light : dark}>
			<StyledApp>
				<Sidebar />
				<div>
					<button onClick={toggleTheme}>Click</button>
				</div>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;

const StyledApp = styled.div`
	background: #2c2c2c;
	display: flex;
`;
