import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  font-size: 5em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3em;
    gap: 0px;
  }

  span {
    color: ${({ theme }) => theme.font};
  }

  div {
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
      gap: 0px;
    }
  }
  div > span {
    width: 60px;
    text-align: center;
  }
`;
