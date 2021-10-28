import styled from 'styled-components';

export const ImagesLayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 80%;
  margin: 125px auto 20px;
`;

export const ImagesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 25px;
  margin-top: 50px;
`;
