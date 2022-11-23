import styled from 'styled-components';

export const SHeader = styled.header`
    background: ${props => props.theme.colors.sectionBg};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12vh;
    box-shadow: 5px 10px 18px #888888;
    position: fixed;
    z-index: 2;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
`;


export const LeftContent = styled.div`
`;

export const RightContent = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-between;
`;