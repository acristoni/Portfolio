import React from 'react';
import { Icon } from '../../../Icon/Icon';
import { Container, Frame, IconLamp, TextDescription } from './styles';

type Props = {
  descriptionAboutMe: string
}

function Description({descriptionAboutMe}: Props) {
  return (
    <Container data-testid="description">
        <Frame>
          <IconLamp>
            <Icon iconName='lamp' size={30}/>
          </IconLamp>
        </Frame>
        <TextDescription>{descriptionAboutMe}</TextDescription>
    </Container>
  );
}

export default Description;