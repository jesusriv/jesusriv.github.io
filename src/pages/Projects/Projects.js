import styled from 'styled-components';
import Project from '../../components/ProjectCards/ProjectCards';

import projects from '../../data/projects-data.json';

import Bounce from '../../assets/images/bounce_attack.gif';
import Splash from '../../assets/images/image_splash.gif';

const gifs = {
    "Image Splash": Splash,
    "Bounce Attack": Bounce
}

const ProjectsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`;

const Projects = () => {
    return (
        <ProjectsContainer>
            <p className="section-heading">Projects</p>

            {
                projects.map(project => {
                    return (
                        <Project
                            img={gifs[project.title]}
                            title={project.title}
                        />
                    )
                })
            }
        </ProjectsContainer>
    );
}

export default Projects;