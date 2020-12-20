import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

export const StyledFullScreenWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

// Taken from https://github.com/timhagn/gbitest
const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "gousse-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageData = desktop.childImageSharp.fluid;
  return (
    <StyledFullScreenWrapper>
      <StyledWelcomeImage
        fluid={imageData}
        backgroundColor={`#040e18`}
        objectFit="cover"
        objectPosition="0% 0%"
      />
    </StyledFullScreenWrapper>
  );
};

const StyledWelcomeImage = styled(Img)`
  width: 100vw;
  height: auto;
`;

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
`;

export default StyledBackgroundSection;
