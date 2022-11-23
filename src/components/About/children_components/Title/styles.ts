import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 50%;
`;

export const Name = styled.h1`
    color: ${props => props.theme.colors.markText};
    margin: 1%;
`;

export const STitle = styled.h2`
    color: ${props => props.theme.colors.text};
`;

export const SubTitle = styled.span`
    color: ${props => props.theme.colors.text};
    margin: 1%;
    width: 40%;
    text-align: center;
`;