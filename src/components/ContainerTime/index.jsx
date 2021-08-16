/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import Timer from '../Timer';
import AppContext from '../../context/appContext';
import { ThemeContext } from 'styled-components';
export default function TimerContainer() {
  const {
    timer,
    currentTimer,
    setIsActive,
    isActive,
    pauseTimer,
    changeTimer,
  } = useContext(AppContext);
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  return (
    <Styled.Container>
      <Styled.AriaButtons>
        <button
          type="button"
          name="pomodoro"
          onClick={(e) => {
            changeTimer(e.target.name);
          }}
        >
          pomodoro
        </button>
        <button
          type="button"
          name="shortBreak"
          onClick={(e) => {
            changeTimer(e.target.name);
          }}
        >
          pausa curta
        </button>
        <button
          type="button"
          name="longBreak"
          onClick={(e) => {
            changeTimer(e.target.name);
          }}
        >
          pausa longa
        </button>
      </Styled.AriaButtons>
      <Styled.TimerContainer>
        {/* <div>{secondToTimer(timer)}</div> */}
        <Timer seconds={currentTimer.time}></Timer>
      </Styled.TimerContainer>

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
    </Styled.Container>
  );
}
