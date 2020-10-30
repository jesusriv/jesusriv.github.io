import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 200px;
    }
`;

const MobileMenu = styled.div`
    width: 100%;
    height: 200px;
    background-color: #3f4245;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    padding: 30px 0;
    z-index: 1;
    overflow: hidden;
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.6);
    animation: ${grow} .2s ease-in;
    animation-direction: normal;
`;

export default MobileMenu;