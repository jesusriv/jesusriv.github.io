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

const ToolsContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #3f4245;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    
    .card-container {
        width: 90%;
    }
`;

const Tools = () => {
    return (
        <ToolsContainer>
            <p className='section-heading'>Developer Tools</p>
            <div className="card-container">
                {
                    toolData.map(tool => {
                        return (
                            <ToolCard
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