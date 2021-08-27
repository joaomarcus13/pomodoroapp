import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.main};
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;

  transition: all 0.5s ease;
  @media (max-width: 1025px) {
    padding: 70px 0;
    flex-direction: column;
    gap: 50px;
    overflow: scroll;
  }
`;
