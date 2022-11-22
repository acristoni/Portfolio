import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

const props = {
  name: 'Ayrton Senna',
  title: 'F1 Race Pilot',
  subTitle: 'Best pilot ever'
}

test('renders name through props', () => {
  render(<Title {...props}/>);
  const name = screen.getByText('Ayrton Senna');
  expect(name).toBeInTheDocument();
});

test('renders title through props', () => {
  render(<Title {...props}/>);
  const title = screen.getByText('F1 Race Pilot');
  expect(title).toBeInTheDocument();
});

test('renders sub-title through props', () => {
  render(<Title {...props}/>);
  const subTitle = screen.getByText('Best pilot ever');
  expect(subTitle).toBeInTheDocument();
});