import styled from 'styled-components';

export const Title = styled.div`
  background: ${props => props.theme.colors.sectionBg};
  display: flex;  
`;

export const TextTitle = styled.h1`
  margin: 0;
  font-family: ${props => props.theme.fonts.name};
`

export const FirstPart = styled(TextTitle)`
  color: ${props => props.theme.colors.markText};
`;

export const SecondPart = styled(TextTitle)`
  color: ${props => props.theme.colors.text};
`;

export const ThirdPart = styled(TextTitle)`
  color: ${props => props.theme.colors.markText};
`;