import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Works from './Works';

test('renders my name', () => {
  render(<Works />);
  const title = screen.getByText('My Works');
  expect(title).toBeInTheDocument();
});

test('renders (About Me) tab button', () => {
    render(<Works />);
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
});