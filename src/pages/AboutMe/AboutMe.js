import styled from 'styled-components';

const AboutMeContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: #2a2c30;
    text-align: center;
    
    p {
        width: 90%;
        margin: 0 auto;
        font-weight: 200;
        font-size: 20px;
    }

    hr {
        width: 50px;
        border: 1px solid #38a098;
        border-radius: 5px;
    }
`;

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <h4 className="section-heading">About Me</h4>
            <p>
                As a developer, I have the creative freedom to design and program
                ideas into reality. This idea fills me with energy and fuels me to
                continue learning, never settling with what I already know.
                It's this same drive that I bring to all tasks, projects, and life.
            </p>
            <hr />
            <p>
                Aside from programming, I spend my time researching anything and everything
                that has to do with science, music, and photography.
            </p>
        </AboutMeContainer>
    );
}

export default AboutMe;