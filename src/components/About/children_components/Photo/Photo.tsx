import React from 'react';
import orange_spot from '../../../../assets/img/orange_spot.svg'
import grey_spot from '../../../../assets/img/grey_spot.svg'
import me from '../../../../assets/img/me.png'
import sampleCodeBackGround from '../../../../data/sampleCodeBackGround.data'
import { Container, BackGroundCode, BackGrondImg1, BackGrondImg2, MyPhoto } from './styles';

function Photo() {
  return (
    <Container data-testid="photo">
      {/* <BackGroundCode>{sampleCodeBackGround}</BackGroundCode> */}
      <BackGrondImg1 src={orange_spot} alt="orange spot"/>
      <BackGrondImg2 src={grey_spot} alt="grey spot"/>
      <MyPhoto src={me} alt="my picture"/>
    </Container>
  );
}

export default Photo;
