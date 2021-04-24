import TextInput from "components/common/Form/Input";
import { authUser } from "features/userSlice";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import * as Yup from "yup";
import background from "../../assets/pexels-bg.jpg";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [validationSchema] = useState(
    Yup.object().shape({
      email: Yup.string().email("email to kurwa").required("Dupa"),
      password: Yup.string().required(),
    })
  );

  const handleLoginSubmit = ({ email, password }) => {
    dispatch(
      authUser({
        email: email,
        password: password,
      })
    );
  };

  return (
    <StyledLogin>
      <LoginForm>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleLoginSubmit(values);
          }}
        >
          {() => (
            <Form className='p-16 h-full'>
              <TextInput placeholder='email' label='Email' name='email' />
              <TextInput
                placeholder='password'
                label='Password'
                name='password'
              />
              <SubmitButton className='text-white' type='submit'>
                Login
              </SubmitButton>
            </Form>
          )}
        </Formik>
        {/* <CenteringWrapper>
          <LoginContainer>
            <Input label='test' name='test'></Input>
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
        </CenteringWrapper> */}
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

const LoginForm = styled.div`
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
  background: ${({ theme }) => theme.backgroundSecondary};
  margin-top: 1rem;
  width: 100%;
`;
