import * as React from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAlert } from '../../hooks/useAlert';
import { AnimatedBlock } from '../Animation/AnimatedParagraph/AnimatedParagraph';
import { FormField } from '../FormField/FormField';
import { StyledButton } from '../StyledButton/StyledButton';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const RecaptchaTerms = styled.div`
  max-width: 300px;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: #555058;
  margin-top: 10px;

  a {
    text-decoration: none;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;

  div {
    width: 100%;
  }
`;

export const ContactForm = () => {
  const reRef = React.useRef<ReCAPTCHA>();
  const { dispatchAlert } = useAlert();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    const { data } = await axios.post('/.netlify/functions/sendgrid', { ...formData, token });
    dispatchAlert(data.message);
    reset();
  };

  return (
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
          type={'email'}
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
  );
};
