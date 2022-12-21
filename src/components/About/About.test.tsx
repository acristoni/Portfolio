import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import { CustomThemeProvider } from '../../hooks/theme';

test('renders about me main content (Title - component)', () => {
  render(
    <CustomThemeProvider>
      <About/>
    </CustomThemeProvider>
  ); 
  const title = screen.getByTestId('title');
  expect(title).toBeInTheDocument();
});

test('renders photo (Photo - component)', () => {
    render(
      <CustomThemeProvider>
        <About/>
      </CustomThemeProvider>
    );  
    const photo = screen.getByTestId('photo');
    expect(photo).toBeInTheDocument();
  });

test('renders description (Description - component)', () => {
    render(
      <CustomThemeProvider>
        <About/>
      </CustomThemeProvider>
    ); 
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
});