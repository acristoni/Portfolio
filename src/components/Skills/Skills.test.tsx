import React from 'react';
import { render, screen } from '@testing-library/react';
import { skill } from '../../types/skill.type'
import Skills from './Skills';
import { CustomThemeProvider } from '../../hooks/theme';

type Props = {
    skills: skill[]
}

const props: Props  ={
    skills: [
        {
            title: 'ReactJS',
            logo: '../../assets/logo/react.svg',
            description: 'something about this stack'
        },
    ]
}

test('renders title of My Skills section', () => {
    render(
        <CustomThemeProvider>
          <Skills {...props} />
        </CustomThemeProvider>
    );
    const title = screen.getByText('My Skills');
    expect(title).toBeInTheDocument();
});

test('renders skill ReactJS through props', () => {
    render(
        <CustomThemeProvider>
          <Skills {...props} />
        </CustomThemeProvider>
    );
    const skill = screen.getByText('ReactJS');
    expect(skill).toBeInTheDocument();
});