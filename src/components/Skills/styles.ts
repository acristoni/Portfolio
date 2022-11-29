import styled from 'styled-components';

export const Container = styled.div`
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

export const SkillsSection = styled.div<{mobileSize: number}>`
    display: flex; 
    flex-direction: column;
    margin-top: 12px;
    width: 100%;

    @media (min-width: ${props => props.mobileSize}px) {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Skill = styled.button<{mobileSize: number}>`
    display: flex;
    align-items: center;
    margin-bottom: 4%;
    padding: 3%;
    background-color: ${props => props.theme.colors.ternary};
    border: none;
    &:hover{
        background-color: ${props => props.theme.colors.quaternary};
        border-radius: 10px;
        box-shadow: 5px 10px 18px #888888;
    }

    @media (min-width: ${props => props.mobileSize}px) {
        flex-direction: column;
        justify-content: center;
        padding: 2%;
        align-items: center;
        margin: 1rem;
    }
`;

export const LogoSkill = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const TitleSkill = styled.span<{mobileSize: number}>`
    margin-top: 0;
    margin-left: 5%;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.skills};
    font-weight: 500;
    font-size: 24px;

    @media (min-width: ${props => props.mobileSize}px) {
        margin-top: 10%;
        margin-left: 0;
        font-weight: 400;
        font-size: 19px;
    }
`;