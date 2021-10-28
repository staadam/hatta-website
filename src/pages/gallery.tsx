import * as React from 'react';

import { Title } from '../components/Title/Title';
import { DisplayGallery } from '../components/DisplayGallery/DisplayGallery';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedParagraph } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { ImagesLayoutWrapper } from '../components/ImagesWrapper/ImagesWrapper';
import SEO from '../components/SEO/SEO';

const Gallery = () => {
  return (
    <ImagesLayoutWrapper>
      <SEO title={'Hatta gallery'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>gallery</AnimatedTitle>
        <AnimatedParagraph>
          While artists work from real to the abstract, architects must work from the abstract to the real.
        </AnimatedParagraph>
      </Title>
      <DisplayGallery />
    </ImagesLayoutWrapper>
  );
};

export default Gallery;
