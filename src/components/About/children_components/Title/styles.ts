import styled from 'styled-components';

export const Container = styled.div<{mobileSize: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;

    @media (min-width: ${props => props.mobileSize}px) {
        width: 50%;
    }
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

export const SubTitle = styled.span<{characters: number}>`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
    margin-top: 17px;
    width: ${props => props.characters}ch   ;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 4px solid ${props => props.theme.colors.primary};
    animation: typing 4s steps(${props => props.characters}), blinking 0.5s infinite step-end alternate;

    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes blinking {
        50% {
            border-color: transparent;
            
        }
    }
`;