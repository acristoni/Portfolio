import React from 'react';
import { Container, Title, Carousel, TitleCarousel } from './styles';

function Works() {
  return (
    <Container>
      <Title>My Works</Title>
      <Carousel data-testid="carousel">
        <TitleCarousel>EM BREVE!!</TitleCarousel>
      </Carousel>
    </Container>
  );
}

export default Works;
