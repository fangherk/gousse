import * as React from "react";
import styled from "styled-components";

import StyledBackgroundSection from "../components/StyledBackgroundSection";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const EmptySpace = styled.div`
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const MainTitle = styled.h1`
  font-family: Rouge Script;
  font-style: normal;
  font-weight: normal;
  font-size: 200px;
  margin: 44px 0 0 0;
`;

const PageNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageNameText = styled.h1`
  font-family: "Miniver";
  font-size: 36px;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
`;

const PageNameSubtext = styled.h2`
  font-family: "Miniver";
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
  margin: 0;
`;

const CopyRightText = styled.h1`
  font-family: "ZCOOL KuaiLe";
  font-size: 24px;
  color: #ffffff;
  font-weight: 400;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage = () => {
  return (
    <>
      <StyledBackgroundSection></StyledBackgroundSection>
      <Container>
        <Header>
          <PageNameContainer>
            <PageNameText>Home</PageNameText>
            <PageNameSubtext>(Home)</PageNameSubtext>
          </PageNameContainer>
          <PageNameContainer>
            <PageNameText>Blonk</PageNameText>
            <PageNameSubtext>(Blog)</PageNameSubtext>
          </PageNameContainer>
          <PageNameText>
            <MainTitle>Gousse</MainTitle>
          </PageNameText>
          <PageNameContainer>
            <PageNameText>Shonk</PageNameText>
            <PageNameSubtext>(Shop)</PageNameSubtext>
          </PageNameContainer>
          <PageNameContainer>
            <PageNameText>Contonkt</PageNameText>
            <PageNameSubtext>(Contact)</PageNameSubtext>
          </PageNameContainer>
        </Header>
        <EmptySpace />
        <CopyRight>
          <CopyRightText>copyright 2020 by gousse club ltd.</CopyRightText>
        </CopyRight>
      </Container>
    </>
  );
};

export default IndexPage;
