import styled from 'styled-components';

export const Title = styled.div`
  background: ${props => props.theme.colors.quaternary};
  display: flex;  
`;

export const TextTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  font-family: ${props => props.theme.fonts.name};
`

export const FirstPart = styled(TextTitle)`
  color: ${props => props.theme.colors.secondary};
`;

export const SecondPart = styled(TextTitle)`
  color: ${props => props.theme.colors.primary};
`;

export const ThirdPart = styled(TextTitle)`
  color: ${props => props.theme.colors.secondary};
`;