import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 17px;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;
