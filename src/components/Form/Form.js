import styled from 'styled-components';

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 500px;

    input, textarea {
        border: none;
        padding: 15px;
        border-radius: 5px;
        color: #ededed;
        font-sie: 16px;
        background-color: #7e7e7e;
        margin-bottom: 28px;
    }

    textarea {
        height: 150px;
    }

    button {
        margin: 0 auto;
    }
`;

export default Form;