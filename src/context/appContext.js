/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { themes } from '../styles/theme';
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const pomodoro = 1;
  const shortBreak = 5;
  const longBreak = 15;
  let interval;
  function minToSec(min) {
    return min * 60;
  }
  const timers = {
    pomodoro: { name: 'pomodoro', time: minToSec(0.5) },
    shortBreak: { name: 'shortBreak', time: minToSec(0.2) },
    longBreak: { name: 'longBreak', time: minToSec(0.3) },
  };

  const [timer, setTimer] = useState(minToSec(timers.pomodoro.time));
  const [isActive, setIsActive] = useState(false);
  const [numberPomodoro, setNumberPomodoro] = useState(0);
  const [currentTimer, setcurrentTimer] = useState(timers.pomodoro);
  const [theme, setTheme] = useState(themes.pomodoro);

  function initTimer() {
    if (currentTimer.time <= 0) {
      clearTimeout(interval);

      console.log('n pom', numberPomodoro);
      if (numberPomodoro >= 3) {
        setcurrentTimer(timers.longBreak);
        setNumberPomodoro(0);
        return;
      }

      if (currentTimer.name == 'pomodoro') {
        setNumberPomodoro((state) => state + 1);
        setcurrentTimer(timers.shortBreak);
        return;
      }
      if (currentTimer.name == 'shortBreak') {
        setcurrentTimer(timers.pomodoro);
        return;
      }

      setIsActive(false);
      setcurrentTimer(timers.pomodoro);
      return;
    }

    interval = setTimeout(() => {
      setcurrentTimer((timer) => {
        return { ...timer, time: timer.time - 1 };
      });
      // initTimer();
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
    if (isActive) {
      initTimer();
    }
  }, [initTimer, isActive]);

  return (
    <AppContext.Provider
      value={{
        timers,
        timer,
        isActive,
        currentTimer,
        theme,
        setcurrentTimer,
        setTimer,
        initTimer,
        pauseTimer,
        setIsActive,
        changeTimer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
