import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import { useWindowSize } from './hooks/useWindowSize'
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
  const [pageWidth, setPageWidth] = useState(0)
  const mobileSize = 900

  let { width, height } = useWindowSize()

  useEffect(()=>{
    if (width) {
      setPageWidth(width)
    }
  },[width])

  return (
    <CustomThemeProvider>
      <>
       <GlobalStyle />
       <Header widthPage={pageWidth} mobileSize={mobileSize}/>
       <About mobileSize={mobileSize}/>
       <Skills skills={skills} mobileSize={mobileSize}/>
       <Works widthPage={pageWidth}/>
       <Footer message={footerMessage} contacts={contacts} widthPage={pageWidth}/>
      </>
    </CustomThemeProvider>
  );
}

export default App;
