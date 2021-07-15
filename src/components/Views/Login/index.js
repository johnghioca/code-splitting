import React from 'react';
import Wrapper from 'components/Wrapper';
import H1 from 'components/H1';
import useDocumentTitle from 'hooks/useDocumentTitle';

const Login = () => {
  useDocumentTitle('Login');

  return (
    <Wrapper>
      <H1>Login</H1>
    </Wrapper>
  );
};

export default Login;
