import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from './About';

test('renders about me main content (Title - component)', () => {
  render(<About />);
  const title = screen.getByTestId('title');
  expect(title).toBeInTheDocument();
});

test('renders photo (Photo - component)', () => {
    render(<About />);
    const photo = screen.getByTestId('photo');
    expect(photo).toBeInTheDocument();
  });

test('renders description (Description - component)', () => {
    render(<About />);
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
});