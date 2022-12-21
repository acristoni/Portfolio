import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.ternary};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2%;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        flex-direction: row;
        align-items: start;
        justify-content: center;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        align-items: baseline;
        width: 25%;
    }
`;

export const LeftContent = styled(Column)`
  
`;

export const RightContent = styled(Column)`
    
`;

export const FooterMessage = styled.div`
    margin-top: 1rem;
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.primary};
    width: 60%;
    font-size: 20px;
    font-weight: 400;
`;