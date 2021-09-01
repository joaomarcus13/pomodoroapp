/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { themes } from '../styles/theme';
import ThemeContext from '../context/themeContext';
import TaskContext from '../context/taskContext';
import ConfigContext from '../context/configContext';

export default function useTimer() {
  // const pomodoro = 25;
  // const shortBreak = 5;
  // const longBreak = 15;
  let interval;
  function minToSec(min) {
    return min * 60;
  }
  const { stateConfig } = useContext(ConfigContext);
  const [isActive, setIsActive] = useState(false);
  const [n_pomodoros, setN_pomodoros] = useState(0);
  const { setTheme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(TaskContext);

  const timersState = {
    pomodoro: {
      name: 'pomodoro',
      time: minToSec(25),
      notification: 'Hora de Trabalhar! Inicie o Timer',
    },
    shortBreak: {
      name: 'shortBreak',
      time: minToSec(5),
      notification: 'Pausa curta!',
    },
    longBreak: {
      name: 'longBreak',
      time: minToSec(15),
      notification: 'Pausa Longa, Descanse um pouco!',
    },
  };

  const [timers, setTimers] = useState(timersState);
  const [currentTimer, setcurrentTimer] = useState(timers.pomodoro);

  function showNotification(notification) {
    const msg = state.currentTask
      ? `Trabalhando em: ${state.currentTask?.title}`
      : 'adicione/selecione uma atividade';
    if (Notification.permission === 'granted') {
      new Notification(notification, {
        body: msg,
      });
    } else {
      Notification.requestPermission();
    }
  }

  function resetTimer(timer, action = null) {
    setcurrentTimer(timer);
    setTheme(themes[timer.name]);
    showNotification(timer.notification);
    if (action) {
      dispatch(action);
    }
  }

  function initTimer() {
    if (currentTimer.time <= 0) {
      // clearTimeout(interval);
      let nextTimer = {
        pomodoro: () => {
          setN_pomodoros((state) => state + 1);
          resetTimer(n_pomodoros >= 3 ? timers.longBreak : timers.shortBreak, {
            type: 'CHANGE_N_POMODOROS',
          });
        },
        shortBreak: () => {
          resetTimer(timers.pomodoro);
          setIsActive(false);
        },
        longBreak: () => {
          setN_pomodoros(0);
          resetTimer(timers.pomodoro);
          setIsActive(false);
        },
      };

      nextTimer[currentTimer.name]();
      return;
    }

    interval = setTimeout(() => {
      setcurrentTimer((timer) => {
        return { ...timer, time: timer.time - 1 };
      });
    }, 1000);
  }

  function pauseTimer() {
    clearTimeout(interval);
    setIsActive(false);
  }

  function changeTimer(timerName) {
    pauseTimer();
    setTheme(themes[timerName]);
    setcurrentTimer(timers[timerName]);
  }

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    let temp = { ...timersState };
    temp.pomodoro.time = minToSec(stateConfig.pomodoro);
    temp.shortBreak.time = minToSec(stateConfig.shortBreak);
    temp.longBreak.time = minToSec(stateConfig.longBreak);
    setTimers(temp);
    setcurrentTimer(temp[currentTimer.name]);
  }, [stateConfig]);

  useEffect(() => {
    if (isActive) {
      initTimer();
    }
    return () => clearTimeout(interval);
  }, [initTimer, isActive]);

  return {
    timers,
    currentTimer,
    setIsActive,
    isActive,
    pauseTimer,
    changeTimer,
  };
}
