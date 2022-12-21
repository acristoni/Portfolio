import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.ternary};
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        margin-top: 0;
        align-items: start;
        justify-content: start;
        margin-bottom: 0;
    }
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.name};
    font-size: 32px;
    font-weight: 400;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        font-family: ${props => props.theme.fonts.main};
        font-weight: 700;
    }
`;

export const ContactsSection = styled.div`
    width: 100%;
    display: flex;  
    padding-left: 35%;
    flex-direction: column;

    @media (min-width: ${props => props.theme.miniSize}px) {
        width: 400px;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 0;
    }
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

    @media (min-width: ${props => props.theme.mobileSize}px) {
        width: 32px;
        height: 32px;
    }
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