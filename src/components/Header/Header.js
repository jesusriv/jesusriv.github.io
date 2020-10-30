import styled from 'styled-components';

const media = {
    desktop: '@media(min-width: 760px)'
}

const Header = styled.header`
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
    
    .name {
        font-size: 22px;
        color: #7e7e7e;

        span {
            color: #fff;
        }
    }
    
    .hamburger {
        width: 35px;
        z-index: 5;

        &:hover {
            cursor: pointer;
        }

        ${media.desktop} {
            display: none;
        }
    }

    .nav-bar {
        display: none;
        z-index: 10;

        ${media.desktop} {
            display: block;
        }

        ul {
            flex-direction: row;

            li {
                margin-right: 10px;
                
                a {
                    &:first-child() {
                        color: #3f4245;
                    }

                    color: #3f4245;   
                    font-weight: 400; 

                    &:hover {
                        cursor: pointer;
                        color: #38a098;
                    }
                }
            }
        }
    }

`;

export default Header;