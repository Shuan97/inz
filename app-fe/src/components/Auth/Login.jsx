import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import background from "../../assets/pexels-bg.jpg";
import { authUser } from "features/userSlice";
import InputField from "./InputField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    dispatch(authUser(body));
  };

  return (
    <StyledLogin>
      <LoginForm>
        <CenteringWrapper>
          <LoginContainer>
            <InputField
              label='Email'
              type='text'
              value={email}
              onChange={(value) => setEmail(value)}
            />
            <InputField
              label='Password'
              type='password'
              value={password}
              onChange={(value) => setPassword(value)}
            />
            <SubmitButton type='submit' onClick={handleLoginSubmit}>
              Login
            </SubmitButton>
          </LoginContainer>
          <LogoContainer>Logo</LogoContainer>
        </CenteringWrapper>
      </LoginForm>
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
  background-image: url(${background});
  background-size: cover;
  background-position: 100%;
`;

const LoginForm = styled.form`
  height: 564px;
  width: 768px;
  padding: 2rem;
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
`;

const CenteringWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 100%;
  margin-left: 4rem;
  border: 2px solid gold;
  background-image: url(${background});
  background-size: cover;
  background-position: 100%;
  /*  */
  color: white;
  font-size: 24px;
`;

const SubmitButton = styled.button`
  width: 100%;
`;