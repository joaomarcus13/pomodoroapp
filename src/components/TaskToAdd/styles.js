import styled from 'styled-components';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
// import { BsThreeDotsVertical } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;

  /* color: #2e2e2e; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  /* padding: 20px 10px; */
  border-radius: 4px;
  margin-top: 5px;
  animation: div 0.3s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @keyframes div {
    from {
      height: 100px;
    }
  }

  input[type='text'] {
    border: none;
    padding: 0px 15px;
    letter-spacing: 1px;
    font-size: 1.3em;
    margin: 20px 10px 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 10px;
    input[type='number'] {
      height: 30px;
      width: 50px;
      border-radius: 4px;
      border: none;
      background-color: #d8d8d8;
      padding-left: 15px;
      margin-left: 10px;
      font-size: 0.9em;
      font-weight: bold;
    }

    button {
      height: 30px;
      width: 30px;
      border: none;
      background-color: ${({ theme }) => theme.container};
      border-radius: 4px;
    }
  }

  footer {
    height: 40px;
    background-color: #d8d8d8;
    border-radius: 0 0 4px 4px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
    button {
      padding: 5px;
      border: none;
      border-radius: 4px;
      color: ${({ theme }) => theme.fontSecondary};
      background: none;
      &:first-child {
        background-color: ${({ theme }) => theme.main};
        color: white;
      }
      &:last-child {
        margin-left: auto;
      }
    }
  }
`;

export const Icons = {
  Up: styled(BiUpArrow)`
    font-size: 1.3em;
    color: ${({ theme }) => theme.font};
  `,
  Down: styled(BiDownArrow)`
    font-size: 1.3em;
    color: ${({ theme }) => theme.font};
  `,
};
