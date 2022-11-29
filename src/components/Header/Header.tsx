import React, { useEffect, useState } from 'react';
import subMenusHeader from '../../data/subMenusHeader.data'
import maxScroll from '../../utils/maxScroll';
import { Icon } from '../Icon/Icon';
import ButtonTheme from './children_component/ButtonTheme/ButtonTheme';
import Name from './children_component/Name/Name';
import TabButton from './children_component/TabButton/TabButton';
import { SHeader, 
         Container, 
         LeftContent, 
         RightContentLargeSize, 
         RightContentSmallSize, 
         ContainerHeaderMenu,
         ToggleMenu } from './styles';

type PropsHeader = {
  widthPage: number,
  mobileSize: number
}

type PropsMenuItens = {
  mobileSize: number,
  section: string
}

function Header({ widthPage, mobileSize }: PropsHeader) {
  const [scrollLimit, setScrollLimit] = useState(0)
  const [offset, setOffset] = useState(0);
  const [prevOffSet, setPrevOffset] = useState(0);
  const [visible, setVisible] = useState(true)
  const [section, setSection] = useState("about")
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const limit = maxScroll()
    setScrollLimit(limit)

    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
    
  useEffect(()=>{
    const contactsSectionPosition = 0.55 * scrollLimit;
    const projectsSectionPosition = 0.5 * scrollLimit;
    const skillsSectionPosition = 0.2 * scrollLimit;

    switch (true) {
      case ( offset > contactsSectionPosition ):
        setSection("#contacts")
        break;
      case ( offset > projectsSectionPosition ):
        setSection("#projects")
        break;
      case ( offset > skillsSectionPosition ):
        setSection("#skills")
        break;
      case ( offset <= skillsSectionPosition ):
        setSection("#aboutme")
        break;
      default:
        break;
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
    <ContainerHeaderMenu>
      <SHeader 
        data-testid="header" 
        style={{'display': `${visible ? 'flex' : 'none '}`}}
      >
        <Container>
          <LeftContent>
            <Name/>
          </LeftContent>
          {
            widthPage > mobileSize ?
            <RightContentLargeSize>
              <MenuItens mobileSize={mobileSize} section={section} />
            </RightContentLargeSize> :
            <RightContentSmallSize onClick={()=>setToggleMenu(!toggleMenu)}>
              {
                toggleMenu ?
                <Icon iconName={'close'} size={30} /> :
                <Icon iconName={'hamburguerMenu'} size={30} />
              }
            </RightContentSmallSize>
          }
        </Container>
      </SHeader>
      {
        widthPage <= mobileSize && toggleMenu && visible &&
        <ToggleMenu>
          <MenuItens mobileSize={mobileSize} section={section} />
        </ToggleMenu>
      }
    </ContainerHeaderMenu>
  );
}

export function MenuItens({mobileSize, section}: PropsMenuItens){
  return (
    <>
      {
        subMenusHeader.map(subMenu => {
          return (
            <TabButton 
              mobileSize={mobileSize}
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
    </>
  )
}

export default Header;