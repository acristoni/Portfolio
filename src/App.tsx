import React from 'react';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import skills from './data/skills.data'

function App() {
  return (
    <CustomThemeProvider>
      <>
       <GlobalStyle />
       <Header />
       <About />
       <Skills skills={skills}/>
      </>
    </CustomThemeProvider>
  );
}

export default App;
