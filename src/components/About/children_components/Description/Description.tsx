import React from 'react';
import { Icon } from '../../../Icon/Icon';
import { Container, Frame, IconLamp, TextDescription } from './styles';

type Props = {
  descriptionAboutMe: string,
  mobileSize: number
}

function Description({descriptionAboutMe, mobileSize}: Props) {
  return (
    <Container data-testid="description" mobileSize={mobileSize}>
        <Frame>
          <IconLamp>
            <Icon iconName='lamp' size={30}/>
          </IconLamp>
        </Frame>
        <TextDescription mobileSize={mobileSize}>{descriptionAboutMe}</TextDescription>
    </Container>
  );
}

export default Description;