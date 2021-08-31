import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 65px;
  color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 10px;
  border-radius: 4px;
  margin: 5px 0 10px 0;
  cursor: pointer;
  transform: ${(props) => (props.selected ? 'translateY(1px)' : '')};
  box-shadow: ${(props) =>
    !props.selected ? '0 1px 2px 0px rgba(0,0,0,0.3)' : ''};
  border-left: ${(props) =>
    props.selected ? '6px solid black' : '6px solid white'};

  span:nth-of-type(1) {
    width: 60%;
    text-overflow: ellipsis;
    text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
  }
  span:nth-of-type(2) {
    font-size: 0.8em;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.fontSecondary};
  }

  div:last-child {
    display: flex;
    padding: 4px;
    border-radius: 4px;
    background-color: #dedede;
    &:active {
      transform: translateY(2px);
    }
  }
`;

const Check = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border-right: 4px solid ${({ theme }) => theme.font};
    border-bottom: 4px solid ${({ theme }) => theme.font};
    transform: rotateZ(45deg);
    margin-bottom: 2px;
  }
`;

export const Icons = {
  Check: styled(Check)`
    background-color: ${(props) =>
      props.completed ? props.theme.checked : props.theme.unchecked};
    z-index: 10;
  `,
  Dots: styled(BsThreeDotsVertical)`
    color: black;
  `,
};
