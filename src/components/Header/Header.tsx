import React from 'react';
import subMenusHeader from '../../data/subMenusHeader.data'
import ButtonTheme from './children_component/ButtonTheme/ButtonTheme';
import Name from './children_component/Name/Name';
import TabButton from './children_component/TabButton/TabButton';
import { SHeader, Container, LeftContent, RightContent } from './styles';

function Header() {
  return (
    <SHeader>
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