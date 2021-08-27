import React, { useContext } from 'react';
import ContainerTimer from '../../components/ContainerTime';
import Header from '../../components/Header';
import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import ContainerTask from '../../components/ContainerTask';
import ThemeContext from '../../context/themeContext';
// import { useCookies } from 'react-cookie';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Styled.Container>
        <ContainerTimer></ContainerTimer>
        <ContainerTask></ContainerTask>
      </Styled.Container>
    </ThemeProvider>
  );
}
