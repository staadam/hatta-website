import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import slugify from 'slugify';

import { Title } from '../components/Title/Title';
import SEO from '../components/SEO/SEO';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedParagraph } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { ImagesLayoutWrapper, ImagesWrapper } from '../components/ImagesWrapper/ImagesWrapper';
import { StyledArticleLink } from '../components/GalleryStyles/gallery.styled';
import { animateImage } from '../components/Animation/AnimatedImage/AnimatedImage';

interface IArticleNode {
  title: string;
  meta: {
    createdAt: string;
  };
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
        meta {
          createdAt(formatString: "DD.MM.YYYY")
        }
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
const AnimatedLink = animateImage(StyledArticleLink);

const IndexPage = ({ data }: IIndexProps) => {
  const { nodes } = data.allDatoCmsArticle;

  return (
    <ImagesLayoutWrapper>
      <SEO title={'Hatta articles'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>articles</AnimatedTitle>
        <AnimatedParagraph>
          While artists work from real to the abstract, architects must work from the abstract to the real.
        </AnimatedParagraph>
      </Title>
      <ImagesWrapper>
        {nodes.map((node, index) => (
          <AnimatedLink to={slugify(node.title, { lower: true })} key={index} delay={index * 0.1}>
            <GatsbyImage image={node.featuredImage.gatsbyImageData} alt={node.title} />
            <p>
              {node.title}
              <span>{node.meta.createdAt}</span>
            </p>
          </AnimatedLink>
        ))}
      </ImagesWrapper>
    </ImagesLayoutWrapper>
  );
};

export default IndexPage;
