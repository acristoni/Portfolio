import React from 'react';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import ButtonTheme from './components/ButtonTheme/ButtonTheme';

function App() {
  return (
    <CustomThemeProvider>
      <>
       <GlobalStyle />
       <ButtonTheme/>
      </>
    </CustomThemeProvider>
  );
}

export default App;
