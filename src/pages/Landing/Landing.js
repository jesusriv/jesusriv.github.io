import { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import LandingBody from '../../components/LandingBody/LandingBody';
import Button from '../../components/Button/Button';
import menu from '../../assets/icons/hamburger.svg';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

const LandingContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    .open {
        height: 200px;
        display: block;
    }

    ul {
        position: relative;
        width: fit-content;
        display: flex;
        flex-direction: column; 
        padding: 0;
        margin: 0 auto;

       li {
           list-style: none;
           line-height: 200%;
           font-size: 20px;
           font-weight: 700;
           text-align: center;
           
           a {
               color: #ededed;
               text-decoration: none;
           }
       }
    }
`;

const Landing = () => {
    const [viewMenu, setViewMenu] = useState(false);

    return (
        <LandingContainer
            id="landing"
            onClick={() => viewMenu ? setViewMenu(false) : null}
        >
            <Header>
                <p className="name">Jesus <span>Rivera</span></p>
                <img
                    src={menu}
                    alt="hamburger-menu"
                    className="hamburger"
                    onClick={() => setViewMenu(!viewMenu)}
                />
                <nav className="nav-bar">
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
                </nav>
            </Header>
            {
                viewMenu ?
                    <MobileMenu>
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
                    </MobileMenu> :
                    null
            }

            <LandingBody>
                <div className="landing-box">
                    <p className="body-text">
                        Jesus Rivera
                    <br />
                        <hr />
                    Web Developer
                    <br />
                    portfolio
                    </p>
                    <p className="body-subtext">
                        Follow the link below <br />to view my recent projects.
                    </p>
                    <a href="#projects">
                        <Button>View Projects</Button>
                    </a>
                </div>
            </LandingBody>
        </LandingContainer>
    );
};

export default Landing;