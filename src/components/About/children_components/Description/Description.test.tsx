import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './Description';
import { CustomThemeProvider } from '../../../../hooks/theme';

const props = {
  descriptionAboutMe: 'Anything I want to say about me!'
}

test('renders description about me through props', () => {
  render(
    <CustomThemeProvider>
      <Description {...props}/>
    </CustomThemeProvider>
  );
  const description = screen.getByText('Anything I want to say about me!');
  expect(description).toBeInTheDocument();
});