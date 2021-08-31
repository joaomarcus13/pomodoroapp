/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../../context/taskContext';
import TaskToAdd from '../TaskToAdd';
import * as Styled from './styles';

export default function Task({ task }) {
  const [edit, setEdit] = useState(false);
  const { state, dispatch } = useContext(TaskContext);
  const isCurrentTask = state.currentTask?.id === task.id;

  function handleCurrentActivity() {
    if (!isCurrentTask) {
      dispatch({ type: 'UPDATE_CURRENT_TASK', payload: task });
    }
    return;
  }

  function handlecompleted() {
    dispatch({
      type: 'EDIT',
      payload: { ...task, completed: !task.completed },
    });
  }

  return (
    <>
      {edit ? (
        <TaskToAdd
          task={task}
          save={() => {
            setEdit(false);
          }}
          cancel={() => {
            setEdit(false);
          }}
        ></TaskToAdd>
      ) : (
        <Styled.Container
          onClick={handleCurrentActivity}
          selected={isCurrentTask ?? false}
          completed={task.completed}
        >
          <Styled.Icons.Check
            onClick={handlecompleted}
            completed={task.completed}
          ></Styled.Icons.Check>

          <span>{task.title}</span>
          <span>
            {task.current_n_pomodoros}/{task.n_pomodoros}
          </span>
          <div>
            <Styled.Icons.Dots
              onClick={() => {
                setEdit(true);
              }}
            ></Styled.Icons.Dots>
          </div>
        </Styled.Container>
      )}
    </>
  );
}
