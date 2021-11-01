import * as React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Title } from '../components/Title/Title';
import { DisplayGallery } from '../components/DisplayGallery/DisplayGallery';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedBlock } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { ImagesLayoutWrapper, StyledGatsbyImage } from '../components/ImagesWrapper/ImagesWrapper';
import SEO from '../components/SEO/SEO';

interface IPhotosArrayItem {
  gatsbyImageData: IGatsbyImageData;
  alt: string | null;
}

interface IIndexProps {
  data: {
    datoCmsGallery: {
      photos: Array<IPhotosArrayItem>;
    };
  };
}

export const query = graphql`
  {
    datoCmsGallery {
      photos {
        gatsbyImageData
        alt
      }
    }
  }
`;

const Gallery = ({ data }: IIndexProps) => {
  return (
    <ImagesLayoutWrapper>
      <SEO title={'Hatta gallery'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>gallery</AnimatedTitle>
        <AnimatedBlock>
          <p>
            While artists work from real to the abstract, architects must work from the abstract to
            the real.
          </p>
        </AnimatedBlock>
      </Title>
      <DisplayGallery>
        {data.datoCmsGallery.photos.map((image, index) => (
          <StyledGatsbyImage
            key={index}
            alt={image.alt || 'gallery element'}
            image={image.gatsbyImageData}
            style={{ width: '100%', height: '100%' }}
          />
        ))}
      </DisplayGallery>
    </ImagesLayoutWrapper>
  );
};

export default Gallery;
