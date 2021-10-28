import * as React from 'react';
import { graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Title } from '../components/Title/Title';
import { AnimatedTitle } from '../components/AnimatedTitle/AnimatedTitle';
import { AnimatedParagraph, Author } from '../components/AnimatedParagraph/AnimatedParagraph';
import { StyledImage } from '../components/IndexStyled/Index.styled';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const TitlePosition = styled.div`
  padding: 125px 85px 0;
`;

const showLines = keyframes`
  from{
    transform: scaleX(0);
  }

  to{
    transform: scaleX(1);
  }
`;

const AboutDescription = styled.div`
  position: relative;
  margin-top: 60px;
  padding: 40px 85px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.black};
    transform-origin: left center;
    transform: scaleX(0);
    animation: ${showLines} 0.3s 0.7s ease both;
  }

  &::after {
    top: 0;
    left: 0;
  }

  &::before {
    bottom: 0;
    left: 0;
  }
`;

interface IGalleryProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

export const query = graphql`
  {
    file(name: { eq: "person" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

const Gallery = ({ data }: IGalleryProps) => {
  return (
    <Wrapper>
      <div>
        <TitlePosition>
          <Title>
            <AnimatedTitle headingElement={'h2'}>about</AnimatedTitle>
            <AnimatedParagraph>
              While artists work from real to the abstract, architects must work from the abstract to the
              real.
            </AnimatedParagraph>
          </Title>
        </TitlePosition>
        <AboutDescription>
          <AnimatedParagraph from={'left'} extraDelay={0.5}>
            Architectural design is primarily driven by the holistically creative manipulation of mass, space,
            volume, texture, light, shadow, materials, program, and Realistic elements such as cost,
            construction and technology, in order to achieve an end which is aesthetic, functional and often
            artistic. This distinguishes Architecture from engineering design, which is usually driven
            primarily by the creative application of mathematical and scientific principles.
            <Author>Abigail Donutdough</Author>
          </AnimatedParagraph>
        </AboutDescription>
      </div>
      <StyledImage image={data.file.childImageSharp.gatsbyImageData} alt={'Abigail'} />
    </Wrapper>
  );
};

export default Gallery;
