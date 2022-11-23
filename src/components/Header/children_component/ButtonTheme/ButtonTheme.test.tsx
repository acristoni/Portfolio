import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTheme from './ButtonTheme';
import { CustomThemeProvider } from '../../../../hooks/theme';

test('renders tab button with title through props', () => {
    render(
        <CustomThemeProvider>
          <ButtonTheme />
        </CustomThemeProvider>
    );
    const buttonTheme = screen.getByTestId('buttonTheme');
    expect(buttonTheme).toBeInTheDocument();
});
  
test('tab button can be clicked', () => {
    render(
        <CustomThemeProvider>
          <ButtonTheme />
        </CustomThemeProvider>
    );
    const buttonTheme = screen.getByTestId('buttonTheme');
    fireEvent.click(buttonTheme);
});
