/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useState } from 'react';
import ConfigContext from '../../context/configContext';
import * as Styled from './styles';

export default function Modal() {
  const { stateConfig, dispatchConfig } = useContext(ConfigContext);
  const init = () => {
    return {
      pomodoro: stateConfig.pomodoro,
      shortBreak: stateConfig.shortBreak,
      longBreak: stateConfig.longBreak,
    };
  };
  const [timers, setTimers] = useState(init);

  function close() {
    dispatchConfig({ type: 'CLOSE_CONFIG' });
  }

  function handleChange(e) {
    let temp = { ...timers };
    temp[e.target.id] = e.target.value;
    setTimers(temp);
  }

  function handleSubmit() {
    dispatchConfig({ type: 'UPDATE_TIMERS', payload: timers });
    close();
  }

  function reset() {
    dispatchConfig({ type: 'RESET' });
  }

  return (
    <Styled.Container>
      <Styled.Modal>
        <Styled.Header>
          <div>
            <span>Configuração do Timer</span>
            <button type="button">
              <Styled.Close onClick={close}></Styled.Close>
            </button>
          </div>
        </Styled.Header>
        <Styled.Section>
          <div>
            <span>Tempo (minutos)</span> <span onClick={reset}>redefinir</span>
          </div>
          <div>
            <span>
              <label htmlFor="pomodoro">Pomodoro</label>
              <input
                type="number"
                id="pomodoro"
                min="1"
                value={timers.pomodoro}
                onChange={handleChange}
              />
            </span>
            <span>
              <label htmlFor="shortBreak">Pausa Curta</label>
              <input
                type="number"
                id="shortBreak"
                min={1}
                value={timers.shortBreak}
                onChange={handleChange}
              />
            </span>
            <span>
              <label htmlFor="longBreak">Pausa Longa</label>
              <input
                type="number"
                id="longBreak"
                min={1}
                value={timers.longBreak}
                onChange={handleChange}
              />
            </span>
          </div>
        </Styled.Section>
        <button type="button" onClick={handleSubmit}>
          OK
        </button>
      </Styled.Modal>
    </Styled.Container>
  );
}
