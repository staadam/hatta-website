import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 20px 30px;
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
`;

export const Navigation = () => (
  <Wrapper>
    <StyledLogo to='/'>Hatta</StyledLogo>
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
  </Wrapper>
);
