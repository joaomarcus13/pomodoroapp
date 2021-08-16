import React from 'react';
import * as Styled from './styles';

export default function Task() {
  return (
    <Styled.Container>
      <Styled.Icons.Check></Styled.Icons.Check>
      <span>task name</span>
      <span>2/2</span>
      <Styled.Icons.Dots></Styled.Icons.Dots>
    </Styled.Container>
  );
}
