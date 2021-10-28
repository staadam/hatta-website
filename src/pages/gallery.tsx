import * as React from 'react';
import { graphql } from 'gatsby';

import { Title } from '../components/Title/Title';
import { DisplayGallery } from '../components/DisplayGallery/DisplayGallery';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedParagraph } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { ImagesLayoutWrapper } from '../components/ImagesWrapper/ImagesWrapper';
import SEO from '../components/SEO/SEO';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

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
        <AnimatedParagraph>
          While artists work from real to the abstract, architects must work from the abstract to
          the real.
        </AnimatedParagraph>
      </Title>
      <DisplayGallery>
        {data.datoCmsGallery.photos.map((image, index) => (
          <GatsbyImage
            key={index}
            alt={image.alt || 'gallery element'}
            image={image.gatsbyImageData}
            className='styledImage'
          />
        ))}
      </DisplayGallery>
    </ImagesLayoutWrapper>
  );
};

export default Gallery;
