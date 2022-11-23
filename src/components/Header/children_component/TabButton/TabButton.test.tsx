import React from 'react';
import { subMenu } from '../../../../types/subMenu.type'
import { render, screen, fireEvent } from '@testing-library/react';
import TabButton from './TabButton';
import { CustomThemeProvider } from '../../../../hooks/theme';

const props: subMenu = {
    title: 'Something',
    href: '/some/path'
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
