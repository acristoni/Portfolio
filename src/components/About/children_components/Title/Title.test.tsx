import React from 'react';
import { aboutTitle } from '../../../../types/aboutTitle.type'
import { render, screen } from '@testing-library/react';
import Title from './Title';
import { CustomThemeProvider } from '../../../../hooks/theme';

const props: aboutTitle = {
  name: 'Ayrton Senna',
  title: 'F1 Race Pilot',
  subTitle: 'Best pilot ever',
  mobileSize: 1000
}

test('renders name through props', () => {
  render(
    <CustomThemeProvider>
      <Title {...props}/>
    </CustomThemeProvider>
  );
  const name = screen.getByText('Ayrton Senna');
  expect(name).toBeInTheDocument();
});

test('renders title through props', () => {
  render(
    <CustomThemeProvider>
      <Title {...props}/>
    </CustomThemeProvider>
  );
  const title = screen.getByText('F1 Race Pilot');
  expect(title).toBeInTheDocument();
});

test('renders sub-title through props', () => {
  render(
    <CustomThemeProvider>
      <Title {...props}/>
    </CustomThemeProvider>
  );
  const subTitle = screen.getByText('Best pilot ever');
  expect(subTitle).toBeInTheDocument();
});