import React, { useContext, useState } from 'react';
import TaskContext from '../../context/taskContext';
import Modal from '../modal';
import Task from '../Task';
import TaskToAdd from '../TaskToAdd';
import * as Styled from './styles';

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
        <Styled.Icons.Add
          onClick={() => {
            setCreateTask((state) => !state);
          }}
        ></Styled.Icons.Add>
        <div
          className="icon"
          onClick={() => {
            setOpenModal((state) => !state);
          }}
        >
          <Styled.Icons.Dots></Styled.Icons.Dots>
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
