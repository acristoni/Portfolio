import React from 'react';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import ButtonTheme from './components/Header/children_component/ButtonTheme/ButtonTheme';

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
