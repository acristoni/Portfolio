import React from 'react';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import Header from './components/Header/Header';

function App() {
  return (
    <CustomThemeProvider>
      <>
       <GlobalStyle />
       <Header />
      </>
    </CustomThemeProvider>
  );
}

export default App;
