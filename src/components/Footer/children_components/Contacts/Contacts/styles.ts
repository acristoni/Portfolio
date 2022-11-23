import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.mainBg};
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.markText};
`;

export const ContactsSection = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Contact = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    margin-right: 20%;
    color: ${props => props.theme.colors.text};
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.markText};
    margin-left: 1rem;
`;