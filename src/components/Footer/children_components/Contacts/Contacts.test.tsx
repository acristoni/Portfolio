import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contacts from './Contacts';
import { contact } from '../../../../types/contact.type';
import { CustomThemeProvider } from '../../../../hooks/theme';

type Props = {
  contacts: contact[],
}

const props: Props = {
  contacts: [
    {
        title: 'Something',
        icon: 'iconName',
        href: 'www.something.com'
    }
  ],
}

test('renders Contacts', () => {
  render(
    <CustomThemeProvider>
      <Contacts {...props} />
    </CustomThemeProvider>
  );
  const myName = screen.getByText('Contacts');
  expect(myName).toBeInTheDocument();
});

test('renders contact information through props', () => {
    render(
      <CustomThemeProvider>
        <Contacts {...props} />
      </CustomThemeProvider>
    );
    const contact = screen.getByText('Something');
    expect(contact).toBeInTheDocument();
});

test('contact information can be clicked', () => {
  render(
    <CustomThemeProvider>
      <Contacts {...props} />
    </CustomThemeProvider>
  );
  const contact = screen.getByText('Something');
  fireEvent.click(contact)
});