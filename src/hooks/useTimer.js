/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { themes } from '../styles/theme';
import ThemeContext from '../context/themeContext';
import TaskContext from '../context/taskContext';

export default function useTimer() {
  const pomodoro = 0.2;
  const shortBreak = 0.2;
  const longBreak = 0.2;
  let interval;
  function minToSec(min) {
    return min * 60;
  }
  const timers = {
    pomodoro: {
      name: 'pomodoro',
      time: minToSec(pomodoro),
      notification: 'Hora de Trabalhar! Inicie o Timer',
    },
    shortBreak: {
      name: 'shortBreak',
      time: minToSec(shortBreak),
      notification: 'Pausa curta!',
    },
    longBreak: {
      name: 'longBreak',
      time: minToSec(longBreak),
      notification: 'Pausa Longa, Descanse um pouco!',
    },
  };

  const [isActive, setIsActive] = useState(false);
  const [currentTimer, setcurrentTimer] = useState(timers.pomodoro);
  const [n_pomodoros, setN_pomodoros] = useState(0);
  const { setTheme } = useContext(ThemeContext);
  const { dispatch } = useContext(TaskContext);

  function showNotification(notification) {
    // const audio = new Audio('../assets/notification.mp3');
    // audio.play();
    // const msg = state.currentTask
    //   ? `Trabalhando em: ${state.currentTask?.title}`
    //   : 'adicione/selecione uma atividade';
    // if (Notification.permission === 'granted') {
    //   new Notification(notification, {
    //     body: msg,
    //   });
    // } else {
    //   Notification.requestPermission();
    // }
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
    if (isActive) {
      initTimer();
    }
    return () => clearTimeout(interval);
  }, [initTimer, isActive]);

  return {
    currentTimer,
    setIsActive,
    isActive,
    pauseTimer,
    changeTimer,
  };
}
