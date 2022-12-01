import React from 'react';
import { Title, FirstPart, SecondPart, ThirdPart} from './styles';

function NameFooter({mobileSize}: {mobileSize: number}) {
  return (
    <Title data-testid="myName" mobileSize={mobileSize}>
      <FirstPart mobileSize={mobileSize}>{'</A'}</FirstPart>
      <SecondPart mobileSize={mobileSize}>Cristoni</SecondPart>
      <ThirdPart mobileSize={mobileSize}>{'>'}</ThirdPart>
    </Title>
  );
}

export default NameFooter;
