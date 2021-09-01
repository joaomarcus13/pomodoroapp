import styled from 'styled-components';
import { BsFillGearFill } from 'react-icons/bs';

export const Container = styled.div`
  height: 70px;
  background-color: transparent;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  color: white;

  div {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid ${({ theme }) => theme.container};

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      &:first-child {
        font-size: 23px;
      }
      &:last-child {
        background-color: ${({ theme }) => theme.container};
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Gear = styled(BsFillGearFill)`
  font-size: 18px;
`;
