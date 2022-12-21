import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  padding-top: 15vh;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4%;

  @media (min-width: ${props => props.theme.mobileSize}px) {
    flex-direction: row;
    padding-bottom: 0;
  }
`;

export const DescriptionSection = styled.div`
  display: flex;  
`;