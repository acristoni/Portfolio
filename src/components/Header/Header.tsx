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

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
        setPrevOffset(offset)
      }, 1000
    )
  },[offset])
  
  useEffect(()=>{
    if ( offset <= prevOffSet ) {
      return setVisible(true)
    }
    return setVisible(false)
  },[prevOffSet])

  return (
    <SHeader data-testid="header" style={{'display': `${visible ? 'flex' : 'none '}`}}>
      <Container>
        <LeftContent>
          <Name/>
        </LeftContent>
        <RightContent>
          {
            subMenusHeader.map(subMenu => {
              return (
                <TabButton 
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