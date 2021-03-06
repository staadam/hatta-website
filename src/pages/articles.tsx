import * as React from 'react';
import slugify from 'slugify';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Title } from '../components/Title/Title';
import SEO from '../components/SEO/SEO';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { DisplayGallery } from '../components/DisplayGallery/DisplayGallery';
import { AnimatedBlock } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { ImagesLayoutWrapper, StyledGatsbyImage } from '../components/ImagesWrapper/ImagesWrapper';
import { StyledArticleLink } from '../components/GalleryStyles/gallery.styled';

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

const IndexPage = ({ data }: IIndexProps) => {
  const { nodes } = data.allDatoCmsArticle;

  return (
    <ImagesLayoutWrapper>
      <SEO title={'Hatta articles'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>articles</AnimatedTitle>
        <AnimatedBlock>
          <p>
            While artists work from real to the abstract, architects must work from the abstract to
            the real.
          </p>
        </AnimatedBlock>
      </Title>
      <DisplayGallery>
        {nodes.map((node, index) => (
          <StyledArticleLink
            to={slugify(node.title, { lower: true })}
            key={index}
            delay={index * 0.1}
          >
            <StyledGatsbyImage image={node.featuredImage.gatsbyImageData} alt={node.title} />
            <p>
              {node.title}
              <span>{node.meta.createdAt}</span>
            </p>
          </StyledArticleLink>
        ))}
      </DisplayGallery>
    </ImagesLayoutWrapper>
  );
};

export default IndexPage;
