import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.ternary};
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.main};
    font-size: 32px;
    font-weight: 700;
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
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
`;

export const Link = styled.a`
    width: 150px;
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.main};
    font-size: 24px;
    font-weight: 400;
    margin-left: 6px;
    &:hover{
        color: ${props => props.theme.colors.primary};
        text-shadow: 1px 1px 2px #888888;
    }
`;