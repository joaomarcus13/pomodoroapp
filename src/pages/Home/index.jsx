import React, { useContext } from 'react';
import ContainerTimer from '../../components/ContainerTime';
import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import ContainerTask from '../../components/ContainerTask';
import ThemeContext from '../../context/themeContext';
import Header from '../../components/Header';
import ConfigContext from '../../context/configContext';
import ConfigModal from '../../components/ConfigModal';

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { stateConfig } = useContext(ConfigContext);

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Styled.Container>
        {stateConfig.configIsOpen && <ConfigModal></ConfigModal>}
        <ContainerTimer></ContainerTimer>
        <ContainerTask></ContainerTask>
      </Styled.Container>
    </ThemeProvider>
  );
}
