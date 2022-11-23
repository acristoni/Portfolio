import React from 'react';
import { aboutTitle } from '../../../../types/aboutTitle.type'
import { Container, Name, STitle, SubTitle } from './styles';

function Title({name, title, subTitle}: aboutTitle) {
  return (
    <Container>
      <Name>{name}</Name>
      <STitle>{title}</STitle>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}

export default Title;
