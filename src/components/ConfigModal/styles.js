import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  position: absolute;

  padding: 10px 20px;
  top: 70px;
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  /* z-index: 20; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > button {
    width: 40%;
    height: 30px;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: ${({ theme }) => theme.checked};
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.1em;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.unchecked};
  }
  button {
    border: none;
    line-height: 10px;
    border-radius: 50%;
    background-color: transparent;
    &:hover {
      background-color: #d8d8d8;
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 50px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div:first-child {
    padding: 0 5px;
    span:last-child {
      text-decoration: underline;
      font-size: 0.9em;
      cursor: pointer;
    }
  }
  div:last-child {
    margin-top: 20px;
    span {
      display: flex;
      flex-direction: column;
      width: 100%;
      input {
        width: 70%;
        padding: 20px 8px;
        height: 30px;
        border-radius: 4px;
        border: none;
        background-color: #d8d8d8;
        font-size: 20px;
      }
    }
  }
`;

export const Close = styled(GrFormClose)`
  font-size: 25px;
`;
