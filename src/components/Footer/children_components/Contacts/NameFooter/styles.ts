import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  width: 40%
`;

export const TextTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.name};
  font-size: 36px;
  font-weight: 400;
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