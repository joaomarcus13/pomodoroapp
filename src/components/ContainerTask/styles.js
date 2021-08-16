import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Container = styled.section`
  height: 70%;
  width: 500px;
  color: ${({ theme }) => theme.font};
  font-weight: 500;
  font-size: 1.3em;

  & > div.header {
    padding: 0 10px;
    height: 50px;
    border-bottom: 1px solid white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  & > div.body {
    padding: 10px 0;
    overflow-y: auto;
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

export const DotsIcons = styled(BsThreeDotsVertical)`
  color: ${({ theme }) => theme.font};
  font-size: 22px;
  cursor: pointer;
`;
