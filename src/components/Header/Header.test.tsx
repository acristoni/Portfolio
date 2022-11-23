import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { CustomThemeProvider } from '../../hooks/theme';

test('renders my name', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const myName = screen.getByTestId('myName');
    expect(myName).toBeInTheDocument();
});

test('renders (About Me) tab button', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const aboutMeButton = screen.getByText('About Me');
    expect(aboutMeButton).toBeInTheDocument();
});
  
test('(About Me) tab button can be clicked', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const aboutMeButton = screen.getByText('About Me');
    fireEvent.click(aboutMeButton);
});

test('renders (Skills) tab button', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const skillsButton = screen.getByText('Skills');
    expect(skillsButton).toBeInTheDocument();
});
  
test('(Skills) tab button can be clicked', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const skillsButton = screen.getByText('Skills');
    fireEvent.click(skillsButton);
});

test('renders (Projects) tab button', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const projectsButton = screen.getByText('Projects');
    expect(projectsButton).toBeInTheDocument();
});
  
test('(Projects) tab button can be clicked', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const projectsButton = screen.getByText('Projects');
    fireEvent.click(projectsButton);
});

test('renders (Contacts) tab button', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const contactsButton = screen.getByText('Contacts');
    expect(contactsButton).toBeInTheDocument();
});
  
test('(Contacts) tab button can be clicked', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const contactsButton = screen.getByText('Contacts');
    fireEvent.click(contactsButton);
});

test('renders button to change theme', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const buttonTheme = screen.getByTestId('buttonTheme');
    expect(buttonTheme).toBeInTheDocument();
});
  
test('button to change theme can be clicked', () => {
    render(
        <CustomThemeProvider>
          <Header />
        </CustomThemeProvider>
    );
    const buttonTheme = screen.getByTestId('buttonTheme');
    fireEvent.click(buttonTheme);
});