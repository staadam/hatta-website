import * as React from 'react';
import styled from 'styled-components';

interface IFormFieldProps {
  isTextarea?: boolean;
  type?: string;
  name: string;
  id: string;
  label: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 700px;
  width: 90%;
  margin: 10px 0;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 150px;
  border: 2px solid black;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  padding: 8px 15px;

  &:focus {
    outline: none;
    box-shadow: 0 0 12px 0 #c4c4c4;
  }
`;

const StyledInput = styled.input`
  border: 2px solid black;
  width: 50%;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  padding: 8px 15px;

  &:focus {
    outline: none;
    box-shadow: 0 0 12px 0 #c4c4c4;
  }
`;

const StyledLabel = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
`;
// eslint-disable-next-line react/display-name
export const FormField = React.forwardRef(
  ({ label, type = 'text', name, id, isTextarea = false, ...props }: IFormFieldProps, ref) => {
    return (
      <Wrapper>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {isTextarea ? (
          <StyledTextarea id={id} name={name} {...props} ref={ref} />
        ) : (
          <StyledInput {...props} id={id} name={name} type={type} ref={ref} />
        )}
      </Wrapper>
    );
  }
);
