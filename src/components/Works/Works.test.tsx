import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Works from './Works';
import { CustomThemeProvider } from '../../hooks/theme';

type Props = {
  widthPage: number
}

const props: Props = {
  widthPage: 1000
}

test('renders my name', () => {
  render(
    <CustomThemeProvider>
      <Works {...props}/>
    </CustomThemeProvider>
  );
  const title = screen.getByText('My Works');
  expect(title).toBeInTheDocument();
});

test('renders (About Me) tab button', () => {
    render(
      <CustomThemeProvider>
        <Works {...props}/>
      </CustomThemeProvider>
    );
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
});