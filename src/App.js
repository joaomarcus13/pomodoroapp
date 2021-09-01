import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

import { ThemeProvider } from './context/themeContext';
import { TaskProvider } from './context/taskContext';
import { ConfigProvider } from './context/configContext';
import { CookiesProvider } from 'react-cookie';
import Compose from './compose';
function App() {
  return (
    // <ThemeProvider>
    //   <CookiesProvider>
    //     <TaskProvider>
    //       <GlobalStyle></GlobalStyle>
    //       <Home></Home>
    //     </TaskProvider>
    //   </CookiesProvider>
    // </ThemeProvider>
    <Compose
      components={[
        TaskProvider,
        ConfigProvider,
        CookiesProvider,
        ThemeProvider,
      ]}
    >
      <>
        <GlobalStyle></GlobalStyle>
        <Home></Home>
      </>
    </Compose>
  );
}
export default App;
