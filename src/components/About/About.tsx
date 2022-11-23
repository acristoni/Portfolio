import React from 'react';
import { Container, FirstSection, DescriptionSection } from './styles';
import AboutTitle from '../../data/aboutTitle.data'
import Description from './children_components/Description/Description';
import Title from './children_components/Title/Title';

function About() {
  return (
    <Container>
      <FirstSection>
        <Title
          name={AboutTitle.name}
          title={AboutTitle.title}
          subTitle={AboutTitle.subTitle}
        />
      </FirstSection>
      <DescriptionSection>

      </DescriptionSection>
    </Container>
  );
}

export default About;
