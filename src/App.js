import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

import { AppProvider } from './context/themeContext';
import { TaskProvider } from './context/taskContext';
import { CookiesProvider } from 'react-cookie';
function App() {
  return (
    <>
      <AppProvider>
        <CookiesProvider>
          <TaskProvider>
            <GlobalStyle></GlobalStyle>
            <Home></Home>
          </TaskProvider>
        </CookiesProvider>
      </AppProvider>
    </>
  );
}
export default App;
