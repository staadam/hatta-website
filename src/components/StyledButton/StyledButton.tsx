import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  padding: 5px 15px;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 3px solid black;
  cursor: pointer;
  z-index: 5;
  transition: background-color 0.03s;
  //overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: red;
    transform: scaleX(0);
    transform-origin: left center;
  }
  &::before {
    background-color: #fff;
    transition: transform 0s;
  }

  &::after {
    background-color: #000;
    transition: transform 0s 0s;
  }

  &:hover::before {
    transform: scaleX(1);
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
    transition: transform 0.5s 0.4s;
  }
`;
