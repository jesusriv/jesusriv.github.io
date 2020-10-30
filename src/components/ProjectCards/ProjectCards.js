import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Button from '../Button/Button';
import ProjectView from '../ProjectView/ProjectView';

const ProjectCardContainer = styled.div`
    width: 90%;
    text-align: center;
    background-color: #3f4245;
    padding-bottom: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 7px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);
    max-width: 337.5px;
    

    img {
        width: 100%;
    }

    p {
        font-weight: 600;
        color: #ededed;
        font-size: 20px;
        text-transform: uppercase;
    }
    .modal {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        zIndex: 2;
    }
`;

const Project = ({ img, title, description, items, url, site }) => {
    const [viewProject, setViewProject] = useState(false);
    const [nextImg, setImg] = useState(false);

    const handleView = () => {
        document.body.style.overflow = "";
        return setViewProject(!viewProject);
    };

    useEffect(() => {
        if (viewProject === true) {
            console.log("SSDAS")
            document.body.style.overflow = "hidden";
        }
    })

    return (
        <ProjectCardContainer className="h">
            {
                viewProject ?
                    <div className="modal" onClick={() => setViewProject(!viewProject)}>
                        <ProjectView
                            img={img}
                            title={title}
                            description={description}
                            items={items}
                            handleView={handleView}
                            url={url}
                            site={site}
                        />
                    </div> :
                    null
            }
            {
                title === "Places" ?
                    <img src={img[0]} alt={title} /> :
                    <img src={img} alt={title} />
            }
            <p>{title}</p>
            <Button onClick={() => {
                setViewProject(true);
            }}>View Details</Button>
        </ProjectCardContainer>
    )
}

export default Project;