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

export const Title = styled.h2`
    color: ${props => props.theme.colors.markText};
    margin-top: 1rem;
`;

export const ContactsSection = styled.div`
    margin-top: 1rem;
`;

export const Contact = styled.div`
    margin-top: 1rem;
`;

export const Link = styled.a`
    margin-top: 1rem;
    text-decoration: none;
`;