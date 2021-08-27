/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Transition } from 'react-transition-group';
import * as Styled from './styles';

export default function ModalTask({ visible, options }) {
  return (
    <Transition in={visible} timeout={100}>
      {(state) => (
        <Styled.Container visible={visible} state={state}>
          <li
            onClick={() => {
              options('DELETE_ALL');
            }}
          >
            Apagar todas as atividades
          </li>
          <li
            onClick={() => {
              options('DELETE_COMPLETED');
            }}
          >
            Apagar atividades concluidas
          </li>
          <li
            onClick={() => {
              options('RESET_POMODOROS');
            }}
          >
            Zerar pomodoros
          </li>
        </Styled.Container>
      )}
    </Transition>
  );
}
