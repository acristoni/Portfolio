import React from 'react';
import { Container, FirstSection, DescriptionSection } from './styles';
import AboutTitle from '../../data/aboutTitle.data'
import descriptionAboutMe from '../../data/descriptionAboutMe.data'
import Description from './children_components/Description/Description';
import Title from './children_components/Title/Title';
import Photo from './children_components/Photo/Photo';

type Props = {
  mobileSize: number
}

function About({ mobileSize }: Props) {
  return (
    <Container data-testid="about" id="aboutme">
      <FirstSection mobileSize={mobileSize}>
        <Title
          name={AboutTitle.name}
          title={AboutTitle.title}
          subTitle={AboutTitle.subTitle}
          mobileSize={mobileSize}
        />
        <Photo mobileSize={mobileSize}/>
      </FirstSection>
      <DescriptionSection>
        <Description descriptionAboutMe={descriptionAboutMe} mobileSize={mobileSize}/>
      </DescriptionSection>
    </Container>
  );
}

export default About;