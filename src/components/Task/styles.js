import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 10px;
  border-radius: 4px;
  margin: 5px 0 20px 0;

  span:nth-of-type(1) {
    width: 60%;
  }
  span:nth-of-type(2) {
    font-size: 0.8em;
    color: ${({ theme }) => theme.fontSecondary};
  }
`;

export const Icons = {
  Check: styled(FaCheckCircle)`
    font-size: 1.3em;
    color: ${({ theme }) => theme.unchecked};
  `,
  Dots: styled(BsThreeDotsVertical)``,
};
