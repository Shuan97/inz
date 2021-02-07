import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
	return (
		<StyledSidebar>
			<SidebarHeader>
				<h4>Hello</h4>
				<ExpandMoreIcon />
			</SidebarHeader>
			<SidebarContentWrapper></SidebarContentWrapper>
			<SidebarFooter></SidebarFooter>
		</StyledSidebar>
	);
};

export default Sidebar;

const StyledSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.25;
	min-width: 200px;
	max-width: 350px;
	height: 100vh;
	background: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.text};
	border-right: 2px solid #161616;
`;

const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	padding: 1rem;
	font-size: 20px;
	border-bottom: 2px solid #161616;
`;

const SidebarContentWrapper = styled.div`
	padding: 16px;
	padding: 1rem;
	height: auto;
	flex: 1;
`;

const SidebarFooter = styled.div`
	border-top: 2px solid #161616;
	height: 80px;
`;
