import React from 'react';
import Wrapper from 'components/Wrapper';
import H1 from 'components/H1';
import useDocumentTitle from 'hooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Home');

  return (
    <Wrapper>
      <H1>Home</H1>
    </Wrapper>
  );
};

export default Home;
