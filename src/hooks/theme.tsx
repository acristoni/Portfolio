import React, { createContext, ReactElement, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { firstTheme, secondTheme } from '../styles/themes';
import Theme from '../types/theme.interface'

type Props = {
  children: ReactElement
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(firstTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'first'){
      setTheme(secondTheme);
    }
    else if (theme.name === 'second') {
      setTheme(firstTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;