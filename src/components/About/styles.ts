import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  padding-top: 15vh;
`;

export const FirstSection = styled.div<{mobileSize: number}>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media (min-width: ${props => props.mobileSize}px) {
    flex-direction: row;
  }
`;

export const DescriptionSection = styled.div`
  display: flex;  
`;