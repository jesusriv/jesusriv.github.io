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
                projects.map((project, i) => {
                    return (
                        <Project
                            key={i}
                            img={gifs[project.title]}
                            title={project.title}
                            description={project.description}
                            items={project.items}
                        />
                    )
                })
            }
        </ProjectsContainer>
    );
}

export default Projects;