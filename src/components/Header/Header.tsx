import React, { useEffect, useState } from 'react';
import subMenusHeader from '../../data/subMenusHeader.data'
import ButtonTheme from './children_component/ButtonTheme/ButtonTheme';
import Name from './children_component/Name/Name';
import TabButton from './children_component/TabButton/TabButton';
import { SHeader, Container, LeftContent, RightContent } from './styles';

function Header() {
  const [offset, setOffset] = useState(0);
  const [prevOffSet, setPrevOffset] = useState(0);
  const [visible, setVisible] = useState(true)
  const [section, setSection] = useState("about")

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    useEffect(()=>{
    if ( offset > 1000 ) {
      setSection("#contacts")
    } else if ( offset > 900 ) {
      setSection("#projects")
    } else if ( offset > 600 ) {
      setSection("#skills")
    } else if ( offset <= 600 ) {
      setSection("#aboutme")
    }

    setTimeout(()=>{
        setPrevOffset(offset)
      }, 300
    )
  },[offset])
  
  useEffect(()=>{
    if ( offset <= prevOffSet ) {
      return setVisible(true)
    }
    return setVisible(false)
  },[prevOffSet])

  return (
    <SHeader 
      data-testid="header" 
      style={{'display': `${visible ? 'flex' : 'none '}`}}
    >
      <Container>
        <LeftContent>
          <Name/>
        </LeftContent>
        <RightContent>
          {
            subMenusHeader.map(subMenu => {
              return (
                <TabButton 
                  section={section}
                  key={subMenu.href}
                  href={subMenu.href}
                  title={subMenu.title}
                  data-testid={subMenu.title}
                />
              )
            })  
          }
          <ButtonTheme/>
        </RightContent>
      </Container>
    </SHeader>
  );
}

export default Header;