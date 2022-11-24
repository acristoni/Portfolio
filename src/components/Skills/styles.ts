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

export const SkillsSection = styled.div`
    display: flex; 
    align-items: baseline;
    margin-top: 12px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Skill = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2%;
    align-items: center;
    margin: 1rem;
    background-color: ${props => props.theme.colors.ternary};
    border: none;
    &:hover{
        background-color: ${props => props.theme.colors.quaternary};
        border-radius: 5%;
        box-shadow: 5px 10px 18px #888888;
    }
`;

export const LogoSkill = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const TitleSkill = styled.span`
    margin-top: 10%;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.skills};
    font-weight: 400;
    font-size: 19px;
`;