import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledArticleLink = styled(Link)`
  position: relative;
  display: block;

  p {
    position: absolute;
    left: 0;
    bottom: 10%;
    width: 80%;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.black};
    padding: 10px;

    span {
      display: block;
      font-weight: 400;
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }
  }
`;
