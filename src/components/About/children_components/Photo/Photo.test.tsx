import React from 'react';
import { render, screen } from '@testing-library/react';
import Photo from './Photo';
import { CustomThemeProvider } from '../../../../hooks/theme';

type Props = {
  mobileSize: number
}

const props = {
  mobileSize: 900
}

test('renders photo through props', () => {
  render(
    <CustomThemeProvider>
      <Photo {...props}/>
    </CustomThemeProvider>
  );
  const title = screen.getByTestId('photo');
  expect(title).toBeInTheDocument();
});