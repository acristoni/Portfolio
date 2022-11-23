import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
    width: 100%;
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.markText};
`;

export const SkillsSection = styled.div`
    display: flex; 
    align-items: baseline;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
`;

export const LogoSkill = styled.img`
    width: 8rem;
    height: 8rem;
`;

export const TitleSkill = styled.span`
    margin-top: 10%;
    color: ${props => props.theme.colors.text};
`;