import React, { useState } from 'react';
import ThemeProvider, { useTheme } from '../../../../hooks/theme';
import { Icon } from '../../../Icon/Icon';
import { ComponentButton } from './styles';

const ButtonTheme: React.FC = () => {
  const [icon, setIcon] = useState(false)
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
    setIcon(!icon)
  }

  return (
    <ComponentButton onClick={handleToggleTheme} data-testid="buttonTheme">
      <Icon 
        iconName={ icon ? 'sun' : 'moon' }
      />
    </ComponentButton>
  );
};

export default ButtonTheme;