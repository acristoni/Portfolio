import React from 'react';
import { subMenu } from '../../../../types/subMenu.type'
import { SubMenu, Container, SubMenuTitle } from './styles';

function TabButton({title, href}: subMenu) {
  return (
    <Container key={href}>
      <SubMenu href={href}>
        <SubMenuTitle>
          {title}
        </SubMenuTitle>  
      </SubMenu>
    </Container>
  );
}

export default TabButton;
