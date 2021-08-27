/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import TaskContext from '../../context/taskContext';
import Modal from '../modal';
import Task from '../Task';
import TaskToAdd from '../TaskToAdd';
import * as Styled from './styles';
// import { BsThreeDotsVertical } from 'react-icons/bs';

export default function TaskContainer() {
  const { state } = useContext(TaskContext);
  const [createTask, setCreateTask] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { dispatch } = useContext(TaskContext);

  function options(type) {
    dispatch({ type });
    setOpenModal(false);
  }

  return (
    <Styled.Container>
      <div className="header">
        <span>Atividades</span>
        {/* <Styled.AddIcon
          onClick={() => {
            setCreateTask((state) => !state);
          }}
        ></Styled.AddIcon> */}
        <Styled.Add
          onClick={() => {
            setCreateTask((state) => !state);
          }}
        ></Styled.Add>
        <div
          className="icon"
          onClick={() => {
            setOpenModal((state) => !state);
          }}
        >
          <Styled.DotsIcons></Styled.DotsIcons>
        </div>
        <Modal visible={openModal} options={options}></Modal>
      </div>

      <div className="body">
        {createTask && (
          <TaskToAdd
            save={() => {
              setCreateTask(false);
            }}
            cancel={() => {
              setCreateTask(false);
            }}
          ></TaskToAdd>
        )}
        {state.tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
      </div>
    </Styled.Container>
  );
}
