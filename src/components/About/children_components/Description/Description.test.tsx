import React from 'react';
import { render, screen } from '@testing-library/react';
import Description from './Description';

const props = {
  descriptionAboutMe: 'Anything I want to say about me!'
}

test('renders description about me through props', () => {
  render(<Description {...props}/>);
  const description = screen.getByText('Anything I want to say about me!');
  expect(description).toBeInTheDocument();
});