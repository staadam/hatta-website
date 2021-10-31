import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AnimatedTitle } from '../components/Animation/AnimatedTitle/AnimatedTitle';
import { AnimatedBlock } from '../components/Animation/AnimatedParagraph/AnimatedParagraph';
import { Title } from '../components/Title/Title';
import { ImagesLayoutWrapper } from '../components/ImagesWrapper/ImagesWrapper';
import SEO from '../components/SEO/SEO';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormField } from '../components/FormField/FormField';
import styled from 'styled-components';
import { StyledButton } from '../components/StyledButton/StyledButton';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;

  div {
    width: 100%;
  }
`;

const RecaptchaTerms = styled.div`
  max-width: 300px;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: #555058;
  margin-top: 10px;

  a {
    text-decoration: none;
  }
`;

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
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    reset();
    const mailRes = axios.post('/.netlify/functions/sendgrid', { ...data, token });
  };

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
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_PUBLIC_KEY} size='invisible' ref={reRef} />
        <AnimatedBlock extraDelay={0.3}>
          <FormField
            name={'name'}
            id={'name'}
            label={'Name'}
            {...register('name', { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </AnimatedBlock>
        <AnimatedBlock extraDelay={0.4}>
          <FormField
            name={'email'}
            id={'email'}
            label={'E-mail'}
            {...register('email', { required: true })}
          />
          {errors.email && <p>This field is required</p>}
        </AnimatedBlock>
        <AnimatedBlock extraDelay={0.5}>
          <FormField
            name={'message'}
            id={'message'}
            label={'Message'}
            isTextarea
            {...register('message', { required: true })}
          />
          {errors.message && <p>This field is required</p>}
        </AnimatedBlock>
        <StyledButton type='submit'>send message</StyledButton>

        <RecaptchaTerms>
          This site is protected by reCAPTCHA and the Google
          <a href='https://policies.google.com/privacy'>Privacy Policy</a> and
          <a href='https://policies.google.com/terms'>Terms of Service</a> apply.
        </RecaptchaTerms>
      </FormWrapper>
    </ImagesLayoutWrapper>
  );
};

export default Contact;
