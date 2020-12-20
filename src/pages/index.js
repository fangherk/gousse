import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Header = styled.h1``;

const IndexPage = () => {
  return (
    <Container>
      <Header>Hello</Header>
    </Container>
  );
};

export default IndexPage;
