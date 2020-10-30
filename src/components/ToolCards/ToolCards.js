import styled from 'styled-components';

const ToolCards = styled.div`
    width: 100%;
    background-color: #38a098;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);
    text-align: center;
    padding: 20px 0;
    border-radius: 5px;
    margin-bottom: 20px;

    p {
        font-weight: 700;
        color: #26282b;
        font-size: 20px;
    }

    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        li {
            margin-bottom: 5px;
            list-style: none;
            color: #fff;
            font-size: 16px;
            text-transform: uppercase;
            font-weight: normal;
            margin-bottom: 20px;
        }
    }
`;

const ToolCard = ({ img, title, items }) => {
    return (
        <ToolCards>
            <img src={img} alt={title + ' svg'} />

            <p>{title}</p>
            <ul>
                {
                    items.map((item, i) => {
                        return (
                            <li key={i}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </ToolCards>
    );
}

export default ToolCard;