/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useEffect } from 'react';

import { useCookies, Cookies } from 'react-cookie';

const initialState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  configIsOpen: false,
};

const ConfigContext = createContext({});

const actions = {
  OPEN_CONFIG: (state, { payload }) => {
    return {
      ...state,
      configIsOpen: true,
    };
  },
  CLOSE_CONFIG: (state, { payload }) => {
    return {
      ...state,
      configIsOpen: false,
    };
  },
  UPDATE_TIMERS: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
  RESET: (state, { payload }) => {
    return initialState;
  },
};

function reducerConfig(state, action) {
  console.log(action.type);
  const fn = actions[action.type];
  return fn ? fn(state, action) : state;
}
function init(initialState) {
  let cookie = new Cookies();
  const state = cookie.get('config');
  return state || initialState;
}
export const ConfigProvider = ({ children }) => {
  const [_, setCookie] = useCookies(['config']);
  const [stateConfig, dispatchConfig] = useReducer(
    reducerConfig,
    initialState,
    init
  );

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setCookie('config', stateConfig, {
      path: '/',
      expires: date,
    });
  }, [stateConfig]);

  return (
    <ConfigContext.Provider
      value={{
        stateConfig,
        dispatchConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;
