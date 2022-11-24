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
    width: 400px;
    display: flex;
    flex-wrap: wrap;
`;

export const Contact = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
`;

export const IconBox = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text};
`;

export const Link = styled.a`
    width: 150px;
    text-decoration: none;
    color: ${props => props.theme.colors.markText};
    margin-left: 6px;
`;