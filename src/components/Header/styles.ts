import styled from 'styled-components';

export const ContainerHeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
`

export const SHeader = styled.header`
    background: ${props => props.theme.colors.quaternary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12vh;
    box-shadow: 5px 10px 18px #888888;
    position: fixed;
    z-index: 100;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
`;


export const LeftContent = styled.div`
`;

export const RightContentLargeSize = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-between;
`;

export const RightContentSmallSize = styled.button`
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.quaternary};
    border: none;
`

export const ToggleMenu = styled.div`
    background: ${props => props.theme.colors.quaternary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    margin-top: 12vh;
    padding: 3vh;
    z-index: 100;
`