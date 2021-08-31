import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

import { ThemeProvider } from './context/themeContext';
import { TaskProvider } from './context/taskContext';
import { CookiesProvider } from 'react-cookie';
function App() {
  return (
    <ThemeProvider>
      <CookiesProvider>
        <TaskProvider>
          <GlobalStyle></GlobalStyle>
          <Home></Home>
        </TaskProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}
export default App;
