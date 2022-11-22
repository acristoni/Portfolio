import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

const props  ={
    skills: [
        {
            title: 'HTML5',
            logo: '/path/to/logo',
            description: 'something about this stack'
        },
        {
            title: 'CSS3',
            logo: '/path/to/logo',
            description: 'something about this stack'
        },
        {
            title: 'JavaScript',
            logo: '/path/to/logo',
            description: 'something about this stack'
        }
    ]
}

test('renders title of My Skills section', () => {
    render(<Skills {...props} />);
    const title = screen.getByText('My Skills');
    expect(title).toBeInTheDocument();
});

test('renders skill HTML5 through props', () => {
    render(<Skills {...props} />);
    const skill = screen.getByText('HTML5');
    expect(skill).toBeInTheDocument();
});

test('renders skill CSS3 through props', () => {
    render(<Skills {...props} />);
    const skill = screen.getByText('CSS3');
    expect(skill).toBeInTheDocument();
});

test('renders skill JavaScript through props', () => {
    render(<Skills {...props} />);
    const skill = screen.getByText('JavaScript');
    expect(skill).toBeInTheDocument();
});