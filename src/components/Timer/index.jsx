/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './styles';

export default function Timer({ seconds }) {
  //   function secondToTimer(seconds) {
  //     const min = Math.floor(seconds / 60);
  //     const sec = Math.floor(seconds % 60);
  //     return `${min}:${sec}`;
  //   }
  const minutes = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

  return (
    <Styled.Container>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </Styled.Container>
  );
}
