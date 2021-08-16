import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* background-color: red; */
  /* width: 80%; */
  /* justify-content: space-evenly; */
  gap: 20px;
  font-size: 5em;
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.font};
  }

  div {
    display: flex;
    /* flex-grow: 1; */
    /* justify-content: space-evenly; */
    gap: 10px;
  }
  div > span {
    width: 60px;
    text-align: center;

    /* background-color: blue; */
  }
`;
