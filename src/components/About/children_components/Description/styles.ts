import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.quaternary};
    display: flex;
    flex-direction: column;
    padding: 4% 12%;
    align-items: center;
    box-shadow: 5px 10px 18px #888888;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Frame = styled.div`
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const IconLamp = styled.div`
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.ternary};
    color: ${props => props.theme.colors.primary}
`;


export const TextDescription = styled.span`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 400;
    font-size: 24px;
    width: 80%;
    margin: 36px 0;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        margin: 0;
    }
`;

