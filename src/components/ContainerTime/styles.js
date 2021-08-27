/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  height: min(500px, 60%);
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div.activity {
    color: white;
    max-width: 500px;
    max-height: 50px;
    text-align: center;
    padding-top: 5px;
    div:first-child {
      font-weight: bold;
      height: 25px;
    }
    div:last-child {
      height: 25px;
    }
  }
`;

export const ContainerTimer = styled.div`
  background-color: ${({ theme }) => theme.container};
  height: 90%;
  width: 100%;
  /* align-self: center; */
  border-radius: 8px;
  box-shadow: 0px 0px 3px 0px #00000046;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 80vw;
    min-height: 210px;
    font-size: 0.7em;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    width: 100%;
    margin: 10px 0;
  }

  & > button {
    width: 80%;
    height: 50px;
    border-radius: 8px;
    border: none;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 2px 6px 5px 1px rgba(0, 0, 0, 0.3);
    border: 10px thick black;
    align-self: center;
    background-color: white;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    &:hover {
      /* transform: scale(1.03); */
      box-shadow: 2px 6px 8px 3px rgba(0, 0, 0, 0.3);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  & > button.pause {
    transform: scale(0.98);
  }
`;

// export const Button = styled.button`
//   flex-grow: 1;
//   height: 50px;
//   background-color: transparent;
//   border: none;
//   border-bottom: ${(props) => (props.indicator ? `2px solid white` : '')};
//   color: ${({ theme }) => theme.font};
//   font-weight: 400;
//   font-size: 1.3em;
// `;
export const Button = styled.button`
  ${(props) => css`
    /* flex-grow: 1; */
    /* height: 50px; */
    padding: 6px 8px;
    background-color: ${props.indicator
      ? props.theme.main
      : props.theme.container};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.font};
    font-weight: 400;
    font-size: 1.3em;
  `}
`;

// export const AriaButtons = styled.div`
//   button {
//     flex-grow: 1;
//     height: 50px;
//     background-color: transparent;
//     border: none;

//     color: ${({ theme }) => theme.font};
//     font-weight: 400;
//     font-size: 1.3em;
//   }
// `;
