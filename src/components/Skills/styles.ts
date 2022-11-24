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
`;

export const Skill = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    background-color: ${props => props.theme.colors.ternary};
    border: none;
`;

export const LogoSkill = styled.img`
    width: 8rem;
    height: 8rem;
`;

export const TitleSkill = styled.span`
    margin-top: 10%;
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.skills};
    font-weight: 400;
    font-size: 22px;
`;