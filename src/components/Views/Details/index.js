import React from 'react';
import Wrapper from 'components/Wrapper';
import H1 from 'components/H1';
import useDocumentTitle from 'hooks/useDocumentTitle';

const Details = () => {
  useDocumentTitle('Details');

  return (
    <Wrapper>
      <H1>Details</H1>
    </Wrapper>
  );
};

export default Details;
