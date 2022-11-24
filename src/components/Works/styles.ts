import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.quaternary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 3%;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 600;
    font-size: 30px;
`;

export const TitleCarousel = styled.h1`
    color: ${props => props.theme.colors.ternary};
    font-family: ${props => props.theme.fonts.main};
`;

export const Carousel = styled.div`
    width: 80%;
    height: 50vh;
    border-radius: 5%;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 5px 10px 18px #888888;
    margin-top: 2rem;
`;