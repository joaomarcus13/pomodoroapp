import React, { useContext } from 'react';
import ConfigContext from '../../context/configContext';
import logo from '../../assets/icons/logo.svg';
import * as Styled from './styles';

export default function Header() {
  const { dispatchConfig } = useContext(ConfigContext);

  return (
    <Styled.Container>
      <div>
        <img src={logo} alt="pomodoro app" />
        <span
          onClick={() => {
            dispatchConfig({ type: 'OPEN_CONFIG' });
          }}
        >
          <Styled.Gear></Styled.Gear>
          settings
        </span>
      </div>
    </Styled.Container>
  );
}
