import styled from 'styled-components';
import Button from '../Button/Button';

const ProjectCardContainer = styled.div`
    width: 90%;
    text-align: center;
    background-color: #3f4245;
    padding-bottom: 20px;
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
`;

const Project = ({ img, title }) => {
    return (
        <ProjectCardContainer>
            <img src={img} alt={title} />
            <p>{title}</p>
            <Button>View Details</Button>
        </ProjectCardContainer>
    )
}

export default Project;