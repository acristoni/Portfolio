import React, { useState } from 'react';
import { SubMenu, Container, SubMenuTitle, SubMenuTitleActive } from './styles';

type Props = {
  title: string,
  href: string,
  section: string
}

function TabButton({title, href, section}: Props) {
  const [isSection, setIsSection] = useState(false)
  
  if (!isSection && section === href) {
    setIsSection(true)
  } else if (isSection && section !== href) {
    setIsSection(false)
  }
  
  return (
    <Container key={href}>
      <SubMenu href={href}>
        {
          !isSection ? 
          <SubMenuTitle>
            {title}
          </SubMenuTitle> :
          <SubMenuTitleActive>
            {title}
          </SubMenuTitleActive> 
        }
      </SubMenu>
    </Container>
  );
}

export default TabButton;
