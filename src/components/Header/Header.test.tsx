import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders my name', () => {
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders (About Me) tab button', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  
test('(About Me) tab button can be clicked', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders (Skills) tab button', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  
test('(Skills) tab button can be clicked', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders (Projects) tab button', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  
test('(Projects) tab button can be clicked', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders (Contacts) tab button', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  
test('(Contacts) tab button can be clicked', () => {
    render(<Header />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});