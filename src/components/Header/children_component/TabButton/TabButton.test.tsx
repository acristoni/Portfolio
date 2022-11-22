import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabButton from './TabButton';

const props = {
    title: 'Something',
    href: '/some/path'
}

test('renders tab button with title through props', () => {
    render(<TabButton {...props}/>);
    const tabButton = screen.getByText('Something');
    expect(tabButton).toBeInTheDocument();
});
  
test('tab button can be clicked', () => {
    render(<TabButton {...props}/>);
    const tabButton = screen.getByText('Something');
    fireEvent.click(tabButton);
});
