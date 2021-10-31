import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedParagraph } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { Title } from '../components/Title/Title';
import { ImagesLayoutWrapper } from '../components/ImagesWrapper/ImagesWrapper';
import SEO from '../components/SEO/SEO';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const reRef = React.useRef<ReCAPTCHA>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    const mailRes = axios.post('/.netlify/functions/sendgrid', { ...data, token });
  };

  return (
    <ImagesLayoutWrapper>
      <SEO title={'Hatta contact'} article={false} />
      <Title>
        <AnimatedTitle headingElement={'h2'}>contact</AnimatedTitle>
        <AnimatedParagraph>
          While artists work from real to the abstract, architects must work from the abstract to
          the real.
        </AnimatedParagraph>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_PUBLIC_KEY} size='invisible' ref={reRef} />
        <div>
          <input {...register('name', { required: true })} />
          {errors.name && <p>This field is required</p>}
        </div>
        <div>
          <input {...register('email', { required: true })} />
          {errors.email && <p>This field is required</p>}
        </div>
        <div>
          <textarea {...register('message', { required: true })} />
          {errors.message && <p>This field is required</p>}
        </div>
        <input type='submit' />
        <div>
          This site is protected by reCAPTCHA and the Google
          <a href='https://policies.google.com/privacy'>Privacy Policy</a> and
          <a href='https://policies.google.com/terms'>Terms of Service</a> apply.
        </div>
      </form>
    </ImagesLayoutWrapper>
  );
};

export default Contact;
