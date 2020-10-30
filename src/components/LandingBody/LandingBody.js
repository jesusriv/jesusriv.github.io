import styled from 'styled-components';
import Button from '../Button/Button';

const LandingBodyContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 99%;
    height: 100vh;
    
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    
    .landing-box {
        height: 400px;
        width: 90%;
        text-align: center;
    }
    
    .body-text {
        font-size: 40px;
        font-weight: bold;
        color: #DBDBDB;
        font-weight: 300;
        span {
            font-family: 'Cedarville Cursive', cursive;
        }
    }
    
    .body-subtext {
        text-transform: uppercase;
        line-height: 1.5;
        font-weight: 700;
        font-size: 18px;
        margin-top: -15px;
        margin-bottom: 25px;
        color: #A8A8A8;
    }
`;

const LandingBody = () => {
    return (
        <LandingBodyContainer>
            <div className="landing-box">
                <p className="body-text">
                    jesus rivera
                        <br />
                    <hr />
                    <span>web developer</span>
                </p>
                <p className="body-subtext">
                    Follow the link below <br />to view my recent projects.
                    </p>
                <a href="#projects">
                    <Button>View Projects</Button>
                </a>
            </div>
        </LandingBodyContainer>
    );
};

export default LandingBody;