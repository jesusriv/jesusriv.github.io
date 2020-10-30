import styled from 'styled-components';

import Button from '../Button/Button';

import exit from '../../assets/icons/exit.svg';

const ProjectViewContainer = styled.div`
    position: fixed;
    background-color: #26282b;
    padding: 30px 0;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    text-align: left;

    .exit {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
    }

    .title {
        font-size: 28px;
        text-align: center;
    }

    .description {
        padding: 0 5px;
        font-size: 14px;
        text-transform: capitalize;
        color: #ededed;
        line-height: 1.5;
    }

    .technologies {
        margin: -5px 0;
        font-size: 16px;
    }

    ul {
        padding: 0 40px;

        li {
            list-style: circle;
        }
    }

    button {margin: 0 auto}

`;

const ProjectView = ({ img, title, description, items, handleView }) => {
    console.log("HELLLLLLO", items);
    return (
        <ProjectViewContainer>
            <img className="exit" src={exit} alt="exit" onClick={() => handleView()} />
            <p className="title">{title}</p>
            <img src={img} alt="bounce" />
            <div style={{ padding: '0 15px', display: 'flex', flexDirection: 'column' }}>
                <p className="description">
                    {description}
                </p>
                <p className="technologies">Technologies:</p>
                <ul>
                    {
                        items.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
                {
                    title === 'Bounce Attack' ?
                        <Button>View Code</Button> :
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button>View Code</Button>
                            <Button>View Details</Button>
                        </div>
                }
            </div>
        </ProjectViewContainer>
    );
};

export default ProjectView;