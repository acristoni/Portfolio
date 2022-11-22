import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

const props = {
  message: "If you liked my work and you need me, I am ready to talk to you."
}

test('renders my name', () => {
  render(<Footer {...props}/>);
  const myName = screen.getByTestId('myName');
  expect(myName).toBeInTheDocument();
});

test('renders message to contat me through props', () => {
    render(<Footer {...props}/>);
    const message = screen.getByText('If you liked my work and you need me, I am ready to talk to you.');
    expect(message).toBeInTheDocument();
});

test('renders Contacts component', () => {
  render(<Footer {...props}/>);
  const contacts = screen.getByTestId('contacts');
  expect(contacts).toBeInTheDocument();
});