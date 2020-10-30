import styled from 'styled-components';

import Header from '../../components/Header/Header';
import LandingBody from '../../components/LandingBody/LandingBody';
import Button from '../../components/Button/Button';
import menu from '../../assets/icons/hamburger.svg';

const LandingContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Landing = () => {
    return (
        <LandingContainer>
            <Header>
                <p className="name">Jesus <span>Rivera</span></p>
                <img src={menu} alt="hamburger-menu" />
            </Header>

            <LandingBody>
                <div className="landing-box">
                    <p className="body-text">
                        Welcome to my
                    <br />
                    web dev
                    <br />
                    portfolio
                    </p>
                    <p className="body-subtext">
                        Follow the link below to view my recent projects.
                    </p>
                    <Button>View Projects</Button>
                </div>
            </LandingBody>
        </LandingContainer>
    );
};

export default Landing;