import React from 'react';
import { skill } from '../../types/skill.type'
import { Container, Title, SkillsSection, Skill, LogoSkill, TitleSkill } from './styles';

type Props = {
  skills: skill[]
}

function Skills({skills}: Props) {
  return (
    <Container>
      <Title>My Skills</Title>
      <SkillsSection>
        {
          skills.map(skill => {
            return (
              <Skill key={skill.title}>
                <LogoSkill src={skill.logo} alt={skill.title}/>
                <TitleSkill>{skill.title}</TitleSkill>
              </Skill>
            )
          })
        }
      </SkillsSection>
    </Container>
  );
}

export default Skills;