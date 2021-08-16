import React from 'react';
import Task from '../Task';
import * as Styled from './styles';
// import { BsThreeDotsVertical } from 'react-icons/bs';

export default function TaskContainer() {
  return (
    <Styled.Container>
      <div className="header">
        <span>Atividades</span>
        {/* <BsThreeDotsVertical style={{ color: 'white' }}></BsThreeDotsVertical> */}
        <Styled.DotsIcons></Styled.DotsIcons>
      </div>
      <div className="body">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </div>
    </Styled.Container>
  );
}
