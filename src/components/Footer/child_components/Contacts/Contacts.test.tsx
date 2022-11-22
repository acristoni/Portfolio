import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contacts from './Contacts';

const props = {
  contacts: [
    {
        title: 'Something',
        icon: 'iconName',
        href: 'www.something.com'
    }
  ]
}

test('renders my name', () => {
  render(<Contacts {...props}/>);
  const myName = screen.getByText('Contacts');
  expect(myName).toBeInTheDocument();
});

test('renders contact information through props', () => {
    render(<Contacts {...props}/>);
    const contact = screen.getByText('Something');
    expect(contact).toBeInTheDocument();
});

test('contact information can be clicked', () => {
  render(<Footer {...props}/>);
  const contact = screen.getByText('Something');
  fireEvent.click(contact)
});