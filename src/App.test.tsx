import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});

test('renders app, with About component', () => {
  render(<App />);
  const about = screen.getByTestId('about');
  expect(about).toBeInTheDocument();
});

test('renders app, with Skills component', () => {
  render(<App />);
  const skills = screen.getByTestId('skills');
  expect(skills).toBeInTheDocument();
});

test('renders app, with Works component', () => {
  render(<App />);
  const works = screen.getByTestId('works');
  expect(works).toBeInTheDocument();
});

test('renders app footer', () => {
  render(<App />);
  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument();
});