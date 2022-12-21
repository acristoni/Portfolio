import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        width: 50%;
    }
`;

export const BackGrondImg = styled.img`
    position: absolute;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        height:55vh;
        top: 20%;
        left: 20%;
    }
    @media screen and 
        (max-width: ${props => props.theme.mobileSize}px) and
        (min-width: ${props => props.theme.miniSize}px) {
        height:70vh;
        top: 7%;
        left: 30%;
    }

    @media (max-width: ${props => props.theme.miniSize}px) {
        height:70vh;
        top: 7%;
        left: 10%;
    }
`;

export const BackGrondImg1 = styled(BackGrondImg)`
    z-index: 2;
`;

export const BackGrondImg2 = styled(BackGrondImg)`
    z-index: 4;
`;

export const MyPhoto = styled.img`
    position: absolute;
    border-radius: 50%;
    z-index: 5;

    @media (min-width: ${props => props.theme.mobileSize}px) {
        height:55vh;
        top: 20%;
        left: 25%;
    }
    @media screen and 
        (max-width: ${props => props.theme.mobileSize}px) and
        (min-width: ${props => props.theme.miniSize}px) {
        height:70vh;
        top: 7%;
        left: 35%;
    }

    @media (max-width: ${props => props.theme.miniSize}px) {
        height:70vh;
        top: 7%;
        left: 17%;
    }
`;

