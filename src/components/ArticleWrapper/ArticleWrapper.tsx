import styled from 'styled-components';

export const ArticleWrapper = styled.article`
  max-width: 1440px;
  width: 80%;
  margin: 125px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 150px;

  p {
    margin-top: 50px;
    max-width: 500px;
  }
`;
