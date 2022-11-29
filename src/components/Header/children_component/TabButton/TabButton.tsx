import React, { useState } from 'react';
import { SubMenu, Container, SubMenuTitle, SubMenuTitleActive } from './styles';

type Props = {
  title: string,
  href: string,
  section: string,
  mobileSize: number
}

function TabButton({title, href, section, mobileSize}: Props) {
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
          <SubMenuTitle mobileSize={mobileSize}>
            {title}
          </SubMenuTitle> :
          <SubMenuTitleActive mobileSize={mobileSize}>
            {title}
          </SubMenuTitleActive> 
        }
      </SubMenu>
    </Container>
  );
}

export default TabButton;
