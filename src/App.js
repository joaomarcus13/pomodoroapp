import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

import { AppProvider } from './context/themeContext';
import { TaskProvider } from './context/taskContext';
function App() {
  return (
    <>
      <AppProvider>
        <TaskProvider>
          <GlobalStyle></GlobalStyle>
          <Home></Home>
        </TaskProvider>
      </AppProvider>
    </>
  );
}
export default App;
