import React from "react";
import Chat from "./Chat/Chat";
import styled from "styled-components/macro";

const Layout = () => {
	return (
		<StyledLayout>
			<Chat />
		</StyledLayout>
	);
};

export default Layout;

const StyledLayout = styled.div`
	flex: 0.75;
`;
