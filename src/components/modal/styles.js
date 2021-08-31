import styled from 'styled-components';

export const Container = styled.div`
  height: 130px;
  width: 240px;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  display: flex;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  top: 30px;
  right: 35px;
  transition: all 0.2s ease;
  transform: ${({ state }) => (state === 'entered' ? 'scale(1)' : 'scale(0)')};
  transform-origin: 100% 0;
  z-index: 10;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);

  li {
    color: black;
    font-size: 0.7em;
    list-style: none;
    cursor: pointer;
    width: 100%;
    padding: 6px 8px;
    &:hover {
      background-color: #e8e8e8;
    }
  }
`;
