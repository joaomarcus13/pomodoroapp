/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import * as Styled from './styles';
import Timer from '../Timer';
import useTimer from '../../hooks/useTimer';
import TaskContext from '../../context/taskContext';

export default function TimerContainer() {
  const {
    timers,
    currentTimer,
    setIsActive,
    isActive,
    pauseTimer,
    changeTimer,
  } = useTimer();

  const { state } = useContext(TaskContext);

  const handleChangeTimer = (name) => {
    if (!state.currentTask) {
      changeTimer(name);
    }
  };

  return (
    <Styled.Container>
      <Styled.ContainerTimer>
        <header>
          <Styled.Button
            type="button"
            name="pomodoro"
            indicator={currentTimer.name === 'pomodoro'}
            onClick={(e) => {
              changeTimer(e.target.name);
            }}
          >
            pomodoro
          </Styled.Button>
          <Styled.Button
            type="button"
            name="shortBreak"
            indicator={currentTimer.name === 'shortBreak'}
            onClick={(e) => {
              handleChangeTimer(e.target.name);
            }}
          >
            pausa curta
          </Styled.Button>
          <Styled.Button
            type="button"
            name="longBreak"
            indicator={currentTimer.name === 'longBreak'}
            onClick={(e) => {
              handleChangeTimer(e.target.name);
            }}
          >
            pausa longa
          </Styled.Button>
        </header>

        <Timer seconds={currentTimer.time}></Timer>

        {isActive ? (
          <button type="button" className="pause" onClick={pauseTimer}>
            pausar
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsActive(true);
            }}
          >
            iniciar
          </button>
        )}
      </Styled.ContainerTimer>
      <div className="activity">
        <div>Atividade Atual</div>
        <div>{state.currentTask?.title}</div>
      </div>
    </Styled.Container>
  );
}
