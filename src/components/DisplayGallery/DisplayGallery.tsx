import * as React from 'react';
import { ImagesWrapper } from '../ImagesWrapper/ImagesWrapper';
import { AnimatedImage } from '../Animation/AnimatedImage/AnimatedImage';
import { ReactNode } from 'react';

interface IDisplayGalleryProps {
  children: Array<ReactNode>;
}

export const DisplayGallery = ({ children }: IDisplayGalleryProps) => {
  return (
    <ImagesWrapper>
      {children.map((child, index) => (
        <AnimatedImage key={index} delay={index * 0.1}>
          {child}
        </AnimatedImage>
      ))}
    </ImagesWrapper>
  );
};
