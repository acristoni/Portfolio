import React from 'react';
import { render, screen } from '@testing-library/react';
import Photo from './Photo';

const props = {
  photoPath: './path/to/photo'
}

test('renders photo through props', () => {
  render(<Photo {...props}/>);
  const title = screen.getByTestId('title');
  expect(title).toBeInTheDocument();
});