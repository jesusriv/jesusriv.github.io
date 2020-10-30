import styled from 'styled-components';

import Github from '../../assets/icons/github.svg';
import Li from '../../assets/icons/li.svg';

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px 0;
    text-align: center;

    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        cursor: pointer
    }

    .icons {
        width: 150px;
        display: flex;
        justify-content: space-evenly;
    }

    ul {
        display: flex;
        flex-direction: column; 
        padding: 0;
        margin: 30px 0 0 0;

       li {
           list-style: none;
           line-height: 200%;
           font-size: 20px;
           font-weight: 700;
           color: #ededed;
       }
    }

    p {
        font-size: 14px;
        color: #ededed;
        font-weight: 200;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className="icons">
                <img src={Github} alt="Github" />
                <img src={Li} alt="Li" />
            </div>

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

            <p>Copyright © 2020 Jesus Rivera</p>
        </FooterContainer>
    );
};

export default Footer;