import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.container};
  height: 70%;
  width: 500px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px #00000096;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;

  & > button {
    width: 300px;
    height: 50px;
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.font};
    font-size: 1em;
    align-self: center;
    background-color: green;
    transition: all 0.3s ease;
  }
  & > button.pause {
    background-color: red;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.font};
  font-size: 1em;
  align-self: center;
  background-color: green;
`;
export const AriaButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    flex-grow: 1;
    height: 50px;
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.font};
    font-weight: 400;
    font-size: 1.3em;
  }
`;

export const TimerContainer = styled.div`
  height: 50%;
  display: grid;
  place-items: center;
`;
