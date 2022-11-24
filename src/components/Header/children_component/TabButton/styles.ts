import styled from 'styled-components';

export const Container = styled.div``;

export const SubMenu = styled.a`
    text-decoration:none;
`;

export const SubMenuTitle = styled.h3`
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.main};
`;