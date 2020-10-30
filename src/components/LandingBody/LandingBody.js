import styled from 'styled-components';

const LandingBody = styled.div`
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
        width: 90%;
        text-align: center;
        text-transform: uppercase;
    }

    .body-text {
        font-size: 40px;
        font-weight: bold;
        color: #DBDBDB;
    }

    .body-subtext {
        line-height: 1.5;
        font-weight: 800;
        font-size: 18px;
        margin-top: -15px;
        margin-bottom: 25px;
        color: #A8A8A8;
    }
`;


export default LandingBody;