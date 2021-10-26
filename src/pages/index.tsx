import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Title } from '../components/Title/Title';
import SEO from '../components/SEO/SEO';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1.7fr minmax(300px, 1fr);
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 30px;
`;

interface IIndexProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const siteDescription: string =
  'While artists work from real to the abstract, architects must work from the abstract to the real';

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, breakpoints: [750, 1080, 1366])
      }
    }
  }
`;

const IndexPage = ({ data }: IIndexProps) => {
  return (
    <Wrapper>
      <SEO title={'Hatta'} article={false} description={siteDescription} />
      <Banner>
        <Title isBanner>
          <h1>Your new space</h1>
          <p>
            While artists work from real to the abstract, architects must work from the abstract to the real.
          </p>
        </Title>
      </Banner>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt='hero image' />
    </Wrapper>
  );
};

export default IndexPage;
