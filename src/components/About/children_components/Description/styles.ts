import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.sectionBg};
    display: flex;
    padding: 3% 19%;
    justify-content: space-between;
    align-items: center;
`;

export const Frame = styled.div`
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.text};
`;

export const IconLamp = styled.div`
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.mainBg};
    color: ${props => props.theme.colors.text}
`;


export const TextDescription = styled.span`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.main};
    width: 70%;
`;

