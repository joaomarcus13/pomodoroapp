import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

import { AppProvider } from './context/appContext';
function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyle></GlobalStyle>

        <Home></Home>
      </AppProvider>
    </>
  );
}
export default App;
