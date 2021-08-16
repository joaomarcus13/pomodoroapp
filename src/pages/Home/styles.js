import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.main};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 1s ease;
`;
