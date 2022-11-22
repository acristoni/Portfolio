import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders my name', () => {
  render(<Header />);
  const myName = screen.getByTestId('myName');
  expect(myName).toBeInTheDocument();
});

test('renders (About Me) tab button', () => {
    render(<Header />);
    const aboutMeButton = screen.getByText('About Me');
    expect(aboutMeButton).toBeInTheDocument();
});
  
test('(About Me) tab button can be clicked', () => {
    render(<Header />);
    const aboutMeButton = screen.getByText('About Me');
    fireEvent.click(aboutMeButton);
});

test('renders (Skills) tab button', () => {
    render(<Header />);
    const skillsButton = screen.getByText('Skills');
    expect(skillsButton).toBeInTheDocument();
});
  
test('(Skills) tab button can be clicked', () => {
    render(<Header />);
    const skillsButton = screen.getByText('Skills');
    fireEvent.click(skillsButton);
});

test('renders (Projects) tab button', () => {
    render(<Header />);
    const projectsButton = screen.getByText('Projects');
    expect(projectsButton).toBeInTheDocument();
});
  
test('(Projects) tab button can be clicked', () => {
    render(<Header />);
    const projectsButton = screen.getByText('Projects');
    fireEvent.click(projectsButton);
});

test('renders (Contacts) tab button', () => {
    render(<Header />);
    const contactsButton = screen.getByText('Contacts');
    expect(contactsButton).toBeInTheDocument();
});
  
test('(Contacts) tab button can be clicked', () => {
    render(<Header />);
    const contactsButton = screen.getByText('Contacts');
    fireEvent.click(contactsButton);
});

test('renders button to change theme', () => {
    render(<Header />);
    const themeButton = screen.getByTestId('themeButton');
    expect(themeButton).toBeInTheDocument();
});
  
test('button to change theme can be clicked', () => {
    render(<Header />);
    const themeButton = screen.getByText('themeButton');
    fireEvent.click(themeButton);
});