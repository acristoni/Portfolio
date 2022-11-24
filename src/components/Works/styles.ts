import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.quaternary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    padding: 3%;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.main};
    margin-top: 1rem;
`;

export const TitleCarousel = styled.h1`
    color: ${props => props.theme.colors.ternary};
    font-family: ${props => props.theme.fonts.main};
`;

export const Carousel = styled.div`
    width: 80%;
    height: 50vh;
    background-color: ${props => props.theme.colors.primary};
    margin-top: 1rem;
`;