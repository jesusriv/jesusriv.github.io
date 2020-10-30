import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    0% {
        height: 0;
    }
    100% {
        height: 200px;
    }
`;

const MobileMenuContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: #3f4245;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    padding: 30px 0;
    z-index: 1;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
    animation: ${grow} .2s ease-in;
    animation-direction: normal;
`;

const MobileMenu = () => {
    return (
        <MobileMenuContainer>
            <ul>
                <li>
                    <a href="#top">HOME</a>
                </li>
                <li>
                    <a href="#projects">PROJECT</a>
                </li>
                <li>
                    <a href="#tools">TOOLS</a>
                </li>
                <li>
                    <a href="#about-me">ABOUT</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </MobileMenuContainer>
    );
};

export default MobileMenu;