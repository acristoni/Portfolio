import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.mainBg};
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    padding: 2%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
`;

export const LeftContent = styled(Column)`
  
`;

export const RightContent = styled(Column)`
    
`;

export const FooterMessage = styled.div`
    margin-top: 1rem;
    color: ${props => props.theme.colors.text};
    width: 60%
`;