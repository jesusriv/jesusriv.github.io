import styled from 'styled-components';
import Project from '../../components/ProjectCards/ProjectCards';

import projects from '../../data/projects-data.json';

import Bounce from '../../assets/images/bounce_attack.gif';
import Splash from '../../assets/images/image_splash.gif';
import Landing from '../../assets/images/landing.png';
import Map from '../../assets/images/map.png';

const gifs = {
    "Image Splash": Splash,
    "Bounce Attack": Bounce,
    "Places": [
        Landing,
        Map
    ]
}

const media = {
    desktop: '@media(min-width: 750px)'
}

const ProjectsContainer = styled.div`
    width: 100%;
    padding: 30px 0;

    .project-container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        ${media.desktop} {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
        }
        
    }

`;

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <p className="section-heading">Projects</p>

            <div className="project-container">
                {
                    projects.map((project, i) => {
                        return (
                            <Project
                                key={i}
                                img={gifs[project.title]}
                                title={project.title}
                                description={project.description}
                                items={project.items}
                                url={project.url}
                                site={project.site}
                            />
                        )
                    })
                }
            </div>
        </ProjectsContainer>
    );
}

export default Projects;