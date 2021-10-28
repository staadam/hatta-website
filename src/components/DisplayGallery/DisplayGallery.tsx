import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ImagesWrapper } from '../ImagesWrapper/ImagesWrapper';
import { animateImage } from '../Animation/AnimatedImage/AnimatedImage';

interface IPhotosArrayItem {
  gatsbyImageData: IGatsbyImageData;
  alt: string | null;
}

interface IDisplayGalleryData {
  datoCmsGallery: {
    photos: Array<IPhotosArrayItem>;
  };
}
const StyledImage = animateImage(GatsbyImage);

export const DisplayGallery = () => {
  const data: IDisplayGalleryData = useStaticQuery(graphql`
    {
      datoCmsGallery {
        photos {
          gatsbyImageData
          alt
        }
      }
    }
  `);

  return (
    <ImagesWrapper>
      {data.datoCmsGallery.photos.map((photo, index) => (
        <StyledImage
          alt={photo.alt || 'gallery element'}
          image={photo.gatsbyImageData}
          key={index}
          delay={index * 0.1}
          className='styledImage'
        />
      ))}
    </ImagesWrapper>
  );
};
