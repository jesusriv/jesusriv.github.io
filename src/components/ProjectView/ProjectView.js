import styled from 'styled-components';

import Button from '../Button/Button';

import exit from '../../assets/icons/exit.svg';

const media = {
    desktop: '@media(min-width: 1000px)',
    tablet: '@media(min-width: 700px)',
}

const ProjectViewContainer = styled.div`
    width: 80%;
    text-align: left;
    background-color: #26282B;
    position: relative;
    padding: 20px;

    .exit {
        width: 25px;
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .title {
        text-align: center;
        font-size: 28px;
    }

    .bottom {

        .img-container {
            margin: 0 auto;
        }
    
        .left {
            .description  {font-size: 22px; text-transform: capitalize; font-weight: 300;}
            .buttons {
                margin: 0 auto;
                width: 340px; 
                display: flex;
                justify-content: space-between;
            }
            .technologies {font-weight: 700;}
        }

        ${media.tablet} {
            display: flex;
            
            .img-container {
                width: 32%;
                margin-top: 10px;
            }

            .left {
                width: 58%;
                .buttons {
                    margin-left: 0;
                }
            }

        }

        ${media.desktop} {
            height: 100%;
            align-items: center;
            .img-container {
                width: 58%;
            }

            .left {
                width: 40%;

            }
        }

    }

    ${media.desktop} {
        width: 90%;    
    }
`;


const ProjectView = ({ img, title, description, items, handleView, url, site }) => {

    return (
        <ProjectViewContainer>
            <img className="exit" src={exit} alt="exit" onClick={() => handleView()} />
            <p className="title">{title}</p>
            <div className="bottom">
                <div className="img-container">
                    {
                        title === "Places" ?
                            <img src={img[0]} alt="bounce" /> :
                            <img src={img} alt="bounce" />
                    }
                </div>
                <div className="left">
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
                        title === 'Image Splash' ?
                            <div className="buttons">
                                <a href={url}>
                                    <Button>View Code</Button>
                                </a>
                                <a href={site}>
                                    <Button>Visit Site</Button>
                                </a>
                            </div> :
                            <a href={url}>
                                <Button>View Code</Button>
                            </a>
                    }
                </div>
            </div>
        </ProjectViewContainer>
    );
};

export default ProjectView;