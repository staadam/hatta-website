import * as React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Title } from '../components/Title/Title';
import { StyledButton } from '../components/StyledButton/StyledButton';
import SEO from '../components/SEO/SEO';
import { Wrapper, Banner, StyledImage } from '../components/IndexStyled/Index.styled';

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
        gatsbyImageData(placeholder: BLURRED, breakpoints: [750, 1080, 1366])
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
        <StyledButton>estimate project</StyledButton>
      </Banner>
      <StyledImage image={data.file.childImageSharp.gatsbyImageData} alt='hero image' />
    </Wrapper>
  );
};

export default IndexPage;
