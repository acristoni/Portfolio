import React from 'react';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <CustomThemeProvider>
      <>
       <GlobalStyle />
       <Header />
       <About />
      </>
    </CustomThemeProvider>
  );
}

export default App;
