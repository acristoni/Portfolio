import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonTheme from './ButtonTheme';

test('renders tab button with title through props', () => {
    render(<ButtonTheme />);
    const buttonTheme = screen.getByTestId('buttonTheme');
    expect(buttonTheme).toBeInTheDocument();
});
  
test('tab button can be clicked', () => {
    render(<ButtonTheme />);
    const buttonTheme = screen.getByTestId('buttonTheme');
    fireEvent.click(buttonTheme);
});
