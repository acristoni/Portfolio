import styled from 'styled-components';

export const Title = styled.div<{mobileSize: number}>`
  display: flex;
  width: 40%;
  margin-top: 30px;

  @media (min-width: ${props => props.mobileSize}px) {
    width: 45%;
    margin-top: 0;
  }
`;

export const TextTitle = styled.h1<{mobileSize: number}>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.name};
  font-weight: 400;
  font-size: 40px;
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