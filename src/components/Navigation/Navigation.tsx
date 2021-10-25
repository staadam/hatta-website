import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 30px;
`;

const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 25px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  margin: 0 25px;
  text-decoration: none;
`;

export const Navigation = () => (
  <Wrapper>
    <StyledLogo to='/'>Hatta</StyledLogo>
    <StyledLink to='/about'>about</StyledLink>
    <StyledLink to='/articles'>articles</StyledLink>
    <StyledLink to='/gallery'>gallery</StyledLink>
    <StyledLink to='/contact'>contact</StyledLink>
  </Wrapper>
);
