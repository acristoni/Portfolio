import React from 'react';
import { Title, FirstPart, SecondPart, ThirdPart} from './styles';

function Name() {
  return (
    <Title data-testid="myName">
      <FirstPart>{'</A'}</FirstPart>
      <SecondPart>Cristoni</SecondPart>
      <ThirdPart>{'>'}</ThirdPart>
    </Title>
  );
}

export default Name;
