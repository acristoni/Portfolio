import React from 'react';
import { useTheme } from '../../../../hooks/theme';
import { Icon } from '../../../Icon/Icon';
import { Container, ComponentButton } from './styles';

const Button: React.FC = () => {
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  return (
    <Container>
      <ComponentButton onClick={handleToggleTheme} >
        <Icon 
          iconName='question'
        />  
        Clique aqui para mudar o tema
      </ComponentButton>
    </Container>
  );
};

export default Button;