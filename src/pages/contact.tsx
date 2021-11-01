import * as React from 'react';

import { Title } from '../components/Title/Title';
import SEO from '../components/SEO/SEO';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedBlock } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { ImagesLayoutWrapper } from '../components/ImagesWrapper/ImagesWrapper';
import { ContactForm } from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <ImagesLayoutWrapper>
      <SEO title={'Hatta contact'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>contact</AnimatedTitle>
        <AnimatedBlock>
          <p>
            While artists work from real to the abstract, architects must work from the abstract to
            the real.
          </p>
        </AnimatedBlock>
      </Title>
      <ContactForm />
    </ImagesLayoutWrapper>
  );
};

export default Contact;
