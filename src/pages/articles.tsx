import * as React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import slugify from 'slugify';

import { Title } from '../components/Title/Title';
import SEO from '../components/SEO/SEO';
import { AnimatedTitle } from '../components/AnimatedTitle/AnimatedTitle';
import { AnimatedParagraph } from '../components/AnimatedParagraph/AnimatedParagraph';
import { DisplayGallery } from '../components/DisplayGallery/DisplayGallery';
import { ImagesWrapper } from '../components/ImagesWrapper/ImagesWrapper';

interface IArticleNode {
  title: string;
  featuredImage: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface IIndexProps {
  data: {
    allDatoCmsArticle: {
      nodes: Array<IArticleNode>;
    };
  };
}

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;

const IndexPage = ({ data }: IIndexProps) => {
  console.log(data);

  return (
    <ImagesWrapper>
      <SEO title={'Hatta articles'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>articles</AnimatedTitle>
        <AnimatedParagraph>
          While artists work from real to the abstract, architects must work from the abstract to the real.
        </AnimatedParagraph>
      </Title>
      <DisplayGallery />
    </ImagesWrapper>
  );
};

export default IndexPage;
