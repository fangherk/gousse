import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Header = styled.h1``;

const IndexPage = () => {
  return (
    <main>
      <title>gousse</title>
      <Container>
        <Header>Hello</Header>
      </Container>
    </main>
  );
};

export default IndexPage;
