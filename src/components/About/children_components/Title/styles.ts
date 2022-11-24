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
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 900;
    font-size: 64px;
    margin: 0;
`;

export const STitle = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 700;
    font-size: 40px;
    margin-top: 17px;
`;

export const SubTitle = styled.span`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
    margin-top: 17px;
    width: 50%;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
`;