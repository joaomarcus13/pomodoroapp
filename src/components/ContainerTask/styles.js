import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Container = styled.section`
  height: min(500px, 60%);
  width: 500px;
  font-weight: 500;
  box-shadow: 0px 0px 5px 0px #00000040;
  padding: 0 10px;
  border-radius: 8px;
  position: relative;

  @media (max-width: 768px) {
    width: 80vw;
  }

  & > div.header {
    padding: 0 10px;
    height: 50px;
    font-size: 1.3em;
    color: ${({ theme }) => theme.font};
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div.icon {
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.container};
      border-radius: 4px;
      margin-left: 5px;
      &:active {
        transform: translateY(2px);
      }
    }
    & > span {
      width: 80%;
    }
  }

  & > div.body {
    padding: 10px 0;
    overflow-y: scroll;
    height: calc(100% - 50px);
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.container};
      border-radius: 20px;
      border: 3px solid transparent;
    }
  }
`;

export const Icons = {
  Dots: styled(BsThreeDotsVertical)`
    color: ${({ theme }) => theme.font};
    font-size: 22px;
    cursor: pointer;
  `,
  Add: styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.font};
    border-radius: 4px;
    cursor: pointer;
    &:active {
      transform: translateY(2px);
      opacity: 0.8;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.main};
    }

    &:before {
      left: 50%;
      top: 6px;
      bottom: 6px;
      width: 3px;
      transform: translateX(-50%);
    }

    &:after {
      top: 50%;
      left: 6px;
      right: 6px;
      height: 3px;
      transform: translateY(-50%);
    }
  `,
};
