import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NameFooter from './NameFooter';
import { CustomThemeProvider } from '../../../../hooks/theme';

test('renders my name', () => {
  render(
    <CustomThemeProvider>
      <NameFooter/>
    </CustomThemeProvider>
  )
  const myName = screen.getByTestId('myName');
  expect(myName).toBeInTheDocument();
});