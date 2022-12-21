import React, { useState } from 'react';
import Overlay from '../ModalStackDescription/ModalStackDescription';
import { skill } from '../../types/skill.type'
import { Container, Title, SkillsSection, Skill, LogoSkill, TitleSkill } from './styles';

type Props = {
  skills: skill[]
}

function Skills({skills}: Props) {
  const [stackInfo, setStackInfo] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModalStackInfo = (description: string) => {
    setIsOpen(true);
    setStackInfo(description);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  
  return (
    <Container data-testid="skills" id="skills">
      <Title>My Skills</Title>
      <SkillsSection>
        {
          skills.map(skill => {
            return (
              <Skill 
                key={skill.title} 
                onClick={() => openModalStackInfo(skill.description)}
              >
                <LogoSkill src={skill.logo} alt={skill.title}/>
                <TitleSkill>{skill.title}</TitleSkill>
              </Skill>
            )
          })
        }
      </SkillsSection>
      <Overlay
        stackInfo={stackInfo}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </Container>
  );
}

export default Skills;