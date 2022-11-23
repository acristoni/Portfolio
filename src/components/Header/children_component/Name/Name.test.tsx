import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Name from './Name';
import { CustomThemeProvider } from '../../../../hooks/theme';

test('renders my name', () => {
  render(
    <CustomThemeProvider>
      <Name/>
    </CustomThemeProvider>
  )
  const myName = screen.getByTestId('myName');
  expect(myName).toBeInTheDocument();
});