import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { CustomThemeProvider } from '../../hooks/theme';
import { contact } from '../../types/contact.type';

type Props = {
  message: string,
  contacts: contact[],
  widthPage: number
}

const props: Props = {
  message: "If you liked my work and you need me, I am ready to talk to you.",
  contacts: [
    {
      title: "GitHub",
      icon: "github",
      href: "https://github.com/acristoni"
    },
  ],
  widthPage: 1000
}

test('renders my name', () => {
  render(
    <CustomThemeProvider>
      <Footer {...props} />
    </CustomThemeProvider>
  );
  const myName = screen.getByTestId('myName');
  expect(myName).toBeInTheDocument();
});

test('renders message to contact me through props', () => {
    render(
      <CustomThemeProvider>
        <Footer {...props} />
      </CustomThemeProvider>
    );
    const message = screen.getByText('If you liked my work and you need me, I am ready to talk to you.');
    expect(message).toBeInTheDocument();
});

test('renders Contacts component', () => {
  render(
    <CustomThemeProvider>
      <Footer {...props} />
    </CustomThemeProvider>
  );
  const contacts = screen.getByTestId('contacts');
  expect(contacts).toBeInTheDocument();
});