import React from 'react';
import { aboutTitle } from '../../../../types/aboutTitle.type'
import { Container, Name, STitle, SubTitle } from './styles';

function Title({name, title, subTitle}: aboutTitle) {
  const characters = subTitle.length
  
  return (
    <Container data-testid="title">
      <Name>{name}</Name>
      <STitle>{title}</STitle>
      <SubTitle characters={characters}>{subTitle}</SubTitle>
    </Container>
  );
}

export default Title;
