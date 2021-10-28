import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.nav`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  z-index: 1;
`;

const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 25px;
  text-decoration: none;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  margin: 0 25px;
  text-decoration: none;

  &.active {
    font-weight: 700;
  }

  @media (max-width: 720px) {
    padding: 15px 50px;
    transition: background-color 0.1s;

    &:hover {
      background-color: #fff3ee;
    }
  }
`;

const HamburgerMenu = styled.button`
  position: absolute;
  display: none;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s;

  @media (max-width: 720px) {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.black};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translateY(7px)' : 'translateX(0)')};
    transition: transform 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.black};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translateY(-8px)' : 'translateX(0)')};
    transition: transform 0.3s;
  }
`;

const Subpage = styled.div`
  @media (max-width: 720px) {
    position: absolute;
    top: 0;
    left: 100%;
    width: 300px;
    height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(-300px)' : 'translateX(0)')};
    transition: transform 0.3s;
  }
`;

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper>
      <StyledLogo to='/'>Hatta</StyledLogo>
      <Subpage isOpen={isOpen}>
        <StyledLink to='/about' activeClassName='active'>
          about
        </StyledLink>
        <StyledLink to='/articles' activeClassName='active'>
          articles
        </StyledLink>
        <StyledLink to='/gallery' activeClassName='active'>
          gallery
        </StyledLink>
        <StyledLink to='/contact' activeClassName='active'>
          contact
        </StyledLink>
      </Subpage>
      <HamburgerMenu isOpen={isOpen} onClick={handleToggle} />
    </Wrapper>
  );
};
