import styled from 'styled-components';

export const Container = styled.div<{mobileSize: number}>`
    position: relative;
    width: 100%;
    height: 80vh;

    @media (min-width: ${props => props.mobileSize}px) {
        width: 50%;
    }
`;

export const BackGroundCode = styled.span`
    position: absolute;
    height: 60vh;
    z-index: 3;
`;

export const BackGrondImg1 = styled.img`
    position: absolute;
    height:55vh;
    top: 20%;
    left: 20%;
    z-index: 2;
`;

export const BackGrondImg2 = styled.img`
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 4;
`;

export const MyPhoto = styled.img`
    position: absolute;
    border-radius: 50%;
    top: 20%;
    left: 25%;
    height: 50vh;
    z-index: 5;
`;

