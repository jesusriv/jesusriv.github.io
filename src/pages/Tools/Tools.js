import styled from 'styled-components';

import ToolCard from '../../components/ToolCards/ToolCards';
import toolData from '../../data/tools-data.json';

import Databases from '../../assets/icons/databases.svg';
import Frameworks from '../../assets/icons/frameworks.svg';
import Languages from '../../assets/icons/languages.svg';
import OtherTools from '../../assets/icons/other_tools.svg';

const svgs = {
    "Databases": Databases,
    "Frameworks": Frameworks,
    "Languages": Languages,
    "Other Tools": OtherTools
}

const media = {
    desktop: '@media(min-width: 750px)'
}

const ToolsContainer = styled.div`
    width: 100%;
    background-color: #3f4245;
    padding: 30px 0;

    .card-container {
        margin: 0 auto;
        width: 90%;
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

const Tools = () => {
    return (
        <ToolsContainer id="tools">
            <p className='section-heading'>Developer Tools</p>
            <div className="card-container">
                {
                    toolData.map((tool, i) => {
                        return (
                            <ToolCard
                                key={i}
                                img={svgs[tool.title]}
                                title={tool.title}
                                items={tool.items}
                            />
                        )
                    })
                }
            </div>
        </ToolsContainer>
    );
}

export default Tools;