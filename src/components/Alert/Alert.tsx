import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const showAlert = keyframes`
  from{
    transform: translateY(-500px);
  }

  to{
    transform: translateY(0);
  }
`;

const hideAlert = keyframes`
  from{
    transform: translateY(0);
  }

  to{
    transform: translateY(-500px);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  left: calc(50% - 150px);
  width: 300px;
  min-height: 100px;
  background-color: #fff;
  border: 2px solid black;
  animation: ${showAlert} 1s ease forwards, ${hideAlert} 1s 6s ease forwards;
  z-index: 999;
`;

export const Alert = ({ message }: { message: string }) => {
  return <Wrapper>{message}</Wrapper>;
};
