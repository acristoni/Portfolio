import styled from 'styled-components';

export const Container = styled.div``;

export const SubMenu = styled.a`
    text-decoration:none;
`;

export const Title = styled.h3<{ mobileSize: number }>`
    font-size: 24px;
    margin: 50px 0;

    @media (min-width: ${props => props.mobileSize}px) {
        font-size: 20px;
        margin: 0;
    }
`

export const SubMenuTitle = styled(Title)`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
`;

export const SubMenuTitleActive = styled(Title)`
    color: ${props => props.theme.colors.quintenary};
    font-family: ${props => props.theme.fonts.main};
`;