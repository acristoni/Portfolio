import React, { useState } from 'react';
import { useTheme } from '../../../../hooks/theme';
import { Icon } from '../../../Icon/Icon';
import { ComponentButton } from './styles';

const Button: React.FC = () => {
  const [icon, setIcon] = useState(false)
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
    setIcon(!icon)
  }

  return (
    <ComponentButton onClick={handleToggleTheme} >
      <Icon 
        iconName={ !icon ? 'sun' : 'moon' }
      />
    </ComponentButton>
  );
};

export default Button;