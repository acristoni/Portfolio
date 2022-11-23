import React from 'react';
import { render, screen } from '@testing-library/react';
import Photo from './Photo';
import { CustomThemeProvider } from '../../../../hooks/theme';

test('renders photo through props', () => {
  render(
    <CustomThemeProvider>
      <Photo/>
    </CustomThemeProvider>
  );
  const title = screen.getByTestId('photo');
  expect(title).toBeInTheDocument();
});