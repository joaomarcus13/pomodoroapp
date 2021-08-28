/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useEffect } from 'react';

import { useCookies, Cookies } from 'react-cookie';

const initialState = {
  tasks: [],
  currentTask: null,
};

const TaskContext = createContext({});

const actions = {
  CREATE: (state, { payload }) => {
    return {
      ...state,
      tasks: [payload, ...state.tasks],
    };
  },
  EDIT: (state, { payload }) => {
    let arr = [...state.tasks];
    arr[arr.findIndex((e) => e.id === payload.id)] = payload;
    return {
      ...state,
      tasks: arr,
    };
  },
  DELETE: (state, { payload }) => {
    let arr = [...state.tasks];
    if (!payload) return state;

    arr.splice(
      arr.findIndex((e) => e.id === payload),
      1
    );
    return {
      ...state,
      tasks: arr,
      currentTask: state.currentTask.id === payload ? null : state.currentTask,
    };
  },
  DELETE_ALL: (state, { payload }) => {
    return {
      ...state,
      tasks: [],
      currentTask: null,
    };
  },
  DELETE_COMPLETED: (state, { payload }) => {
    let arr = state.tasks.filter((e) => !e.completed);
    return {
      ...state,
      tasks: arr,
    };
  },
  UPDATE_CURRENT_TASK: (state, { payload }) => {
    return {
      ...state,
      currentTask: payload,
    };
  },
  CHANGE_N_POMODOROS: (state, { payload }) => {
    const obj = { ...state };
    if (state.currentTask) {
      let taskId = state.tasks.findIndex((e) => e.id === state.currentTask.id);
      let arr = [...state.tasks];
      arr[taskId].current_n_pomodoros += 1;
      obj.tasks = arr;
      obj.currentTask = arr[taskId];
    }
    return obj;
  },
  RESET_POMODOROS: (state, { payload }) => {
    const arr = [...state.tasks];
    arr.forEach((e) => (e.current_n_pomodoros = 0));
    return {
      ...state,
      tasks: arr,
    };
  },
};

function reducerTask(state, action) {
  const fn = actions[action.type];
  return fn ? fn(state, action) : state;
}
function init(initialState) {
  let cookie = new Cookies();
  const state = cookie.get('taskcontext');
  return state || initialState;
}
export const TaskProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['taskcontext']);
  const [state, dispatch] = useReducer(reducerTask, initialState, init);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setCookie('taskcontext', state, {
      path: '/',
      expires: date,
    });
  }, [state]);

  return (
    <TaskContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
