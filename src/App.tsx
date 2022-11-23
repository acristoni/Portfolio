import React from 'react';
import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';
import skills from './data/skills.data';
import { footerMessage } from './data/footerMessage.data'
import contacts from './data/contacts.data';

function App() {
  return (
    <CustomThemeProvider>
      <>
       <GlobalStyle />
       <Header />
       <About />
       <Skills skills={skills}/>
       <Works />
       <Footer message={footerMessage} contacts={contacts} />
      </>
    </CustomThemeProvider>
  );
}

export default App;
