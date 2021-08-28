import React, { useContext } from 'react';
import ContainerTimer from '../../components/ContainerTime';
import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import ContainerTask from '../../components/ContainerTask';
import ThemeContext from '../../context/themeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container>
        <ContainerTimer></ContainerTimer>
        <ContainerTask></ContainerTask>
      </Styled.Container>
    </ThemeProvider>
  );
}
