import { useEffect, useState } from "react";
import { THEME } from "../utils/Constants";

export const UseDarkMode = () => {
	const [theme, setTheme] = useState(window.localStorage.getItem("theme") || THEME.light);

	const toggleTheme = () => {
		if (theme === THEME.light) {
			window.localStorage.setItem("theme", THEME.dark);
			setTheme(THEME.dark);
			console.log(THEME.dark);
		} else {
			window.localStorage.setItem("theme", THEME.light);
			setTheme(THEME.light);
			console.log(THEME.light);
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
	}, []);

	return [theme, toggleTheme];
};
