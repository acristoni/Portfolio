import React from 'react';
import { Container, FirstSection, DescriptionSection } from './styles';
import AboutTitle from '../../data/aboutTitle.data'
import descriptionAboutMe from '../../data/descriptionAboutMe.data'
import Description from './children_components/Description/Description';
import Title from './children_components/Title/Title';
import Photo from './children_components/Photo/Photo';

function About({ widthPage }: { widthPage: number }) {
  return (
    <Container data-testid="about" id="aboutme">
      <FirstSection>
        <Title
          name={AboutTitle.name}
          title={AboutTitle.title}
          subTitle={AboutTitle.subTitle}
        />
        <Photo/>
      </FirstSection>
      <DescriptionSection>
        <Description descriptionAboutMe={descriptionAboutMe}/>
      </DescriptionSection>
    </Container>
  );
}

export default About;