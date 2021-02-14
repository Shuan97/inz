import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import { auth, provider } from "../../utils/firebase";

const Login = () => {
	const signIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};
	return (
		<StyledLogin>
			<LoginCard>
				<Button onClick={signIn}>Sign in</Button>
			</LoginCard>
		</StyledLogin>
	);
};

export default Login;

const StyledLogin = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const LoginCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 500px;
	border-radius: 0.5rem;
	background: ${({ theme }) => theme.backgroundPrimary};

	button {
		width: 200px;
		background: ${({ theme }) => theme.backgroundTertiary};
		color: ${({ theme }) => theme.textPrimary};
		font-weight: bold;

		:hover {
			background: ${({ theme }) => theme.backgroundAccent};
		}
	}
`;
