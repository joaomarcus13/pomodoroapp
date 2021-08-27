/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import TaskContext from '../../context/taskContext';
import * as Styled from './styles';

export default function TaskToAdd({ task, save, cancel }) {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState(task?.title || '');
  const [n_pomodoros, setN_Pomodoros] = useState(task?.n_pomodoros || 1);

  function handleConfirm() {
    if (title) {
      const taskToAdd = {
        id: task ? task.id : Date.now().toString(),
        title,
        n_pomodoros,
        current_n_pomodoros: 0,
        completed: false,
      };

      task
        ? dispatch({ type: 'EDIT', payload: taskToAdd })
        : dispatch({ type: 'CREATE', payload: taskToAdd });
    }

    save();
  }

  function handleDelete() {
    dispatch({ type: 'DELETE', payload: task?.id });
  }

  return (
    <Styled.Container>
      <input
        type="text"
        value={title}
        maxLength="20"
        placeholder="digite o nome da atividade"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <div>
        <input
          type="number"
          min="1"
          max="30"
          step="1"
          value={n_pomodoros}
          onChange={(e) => {
            setN_Pomodoros(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setN_Pomodoros((state) => state + 1);
          }}
        >
          <Styled.Icons.Up></Styled.Icons.Up>
        </button>
        <button
          onClick={() => {
            if (n_pomodoros > 1) setN_Pomodoros((state) => state - 1);
          }}
        >
          <Styled.Icons.Down></Styled.Icons.Down>
        </button>

        <span>Número de pomodoros necessários</span>
      </div>

      <footer>
        <button onClick={handleConfirm}>Salvar</button>
        <button onClick={cancel}>Cancelar</button>
        <button onClick={handleDelete}>Excluir</button>
      </footer>
    </Styled.Container>
  );
}
