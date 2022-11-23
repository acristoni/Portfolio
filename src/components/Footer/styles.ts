import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.mainBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 1rem;
    width: 50%;
    padding: 3%;
`;

export const LeftContent = styled.div`
`;

export const RightContent = styled.div`
`;

export const FooterMessage = styled.div`
`;