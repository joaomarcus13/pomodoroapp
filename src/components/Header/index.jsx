import React, { useContext } from 'react';
import ConfigContext from '../../context/configContext';
import * as Styled from './styles';

export default function Header() {
  const { dispatchConfig } = useContext(ConfigContext);

  return (
    <Styled.Container>
      <div>
        <span>Pomodoro App</span>
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
