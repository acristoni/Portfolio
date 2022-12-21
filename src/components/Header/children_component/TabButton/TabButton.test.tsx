import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabButton from './TabButton';
import { CustomThemeProvider } from '../../../../hooks/theme';

type Props = {
    title: string,
    href: string,
    section: string,
  }

const props: Props = {
    title: 'Something',
    href: '/some/path',
    section: '/some/path',
}

test('renders tab button with title through props', () => {
    render(
        <CustomThemeProvider>
          <TabButton {...props}/>
        </CustomThemeProvider>
    );
    const tabButton = screen.getByText('Something');
    expect(tabButton).toBeInTheDocument();
});
  
test('tab button can be clicked', () => {
    render(
        <CustomThemeProvider>
          <TabButton {...props}/>
        </CustomThemeProvider>
    );
    const tabButton = screen.getByText('Something');
    fireEvent.click(tabButton);
});
