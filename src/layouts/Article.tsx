import * as React from 'react';
import { graphql } from 'gatsby';

import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Title } from '../components/Title/Title';
import { ArticleWrapper } from '../components/ArticleWrapper/ArticleWrapper';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedBlock } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { AnimatedImage } from '../components/Animation/AnimatedImage/AnimatedImage';

interface IDatoCMSHeading {
  heading: string;
}

interface IDatoCMSParagraph {
  paragraph: string;
}

interface IArticleProps {
  data: {
    datoCmsArticle: {
      title: string;
      author: string;
      featuredImage: {
        gatsbyImageData: IGatsbyImageData;
      };
      articleContent: Array<IDatoCMSHeading | IDatoCMSParagraph>;
    };
  };
}

export const query = graphql`
  query MyQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      featuredImage {
        gatsbyImageData
      }
      articleContent {
        ... on DatoCmsHeading {
          heading
        }
        ... on DatoCmsParagraph {
          paragraph
        }
      }
    }
  }
`;

const Article = ({ data }: IArticleProps) => {
  return (
    <ArticleWrapper>
      <Title>
        <AnimatedTitle headingElement={'h2'}>{data.datoCmsArticle.title}</AnimatedTitle>
        <AnimatedImage>
          <GatsbyImage
            alt={'Article image'}
            image={data.datoCmsArticle.featuredImage.gatsbyImageData}
          />
        </AnimatedImage>
      </Title>
      <div>
        {data.datoCmsArticle.articleContent.map((tag, index) => {
          const key = Object.keys(tag)[0];

          switch (key) {
            case 'heading':
              return (
                <AnimatedBlock key={index} extraDelay={1 + index * 0.1}>
                  <h2>{tag[key]}</h2>
                </AnimatedBlock>
              );
            case 'paragraph':
              return (
                <AnimatedBlock key={index} extraDelay={1 + index * 0.1}>
                  <p>{tag[key]}</p>
                </AnimatedBlock>
              );
            default:
              return null;
          }
        })}
      </div>
    </ArticleWrapper>
  );
};

export default Article;
