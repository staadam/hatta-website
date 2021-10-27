import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 25px;
  margin-top: 50px;
`;

const fadeIn = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  
  70%{
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledImage = styled(GatsbyImage)`
  animation: ${fadeIn} 0.7s ${({ delay }) => `${0.8 + delay}s`} cubic-bezier(0.17, 0.84, 0.95, 1.01) both;
`;

interface IPhotosArrayItem {
  gatsbyImageData: IGatsbyImageData;
  alt: string | null;
}

interface IDisplayGalleryData {
  datoCmsGallery: {
    photos: Array<IPhotosArrayItem>;
  };
}

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
    <Wrapper>
      {data.datoCmsGallery.photos.map((photo, index) => (
        <StyledImage
          alt={photo.alt || 'gallery element'}
          image={photo.gatsbyImageData}
          key={index}
          delay={index * 0.1}
          className='styledImage'
        />
      ))}
    </Wrapper>
  );
};
