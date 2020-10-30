import styled from 'styled-components';

import Button from '../Button/Button';

const FormContainer = styled.form`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 500px;

    *:focus,
    &:active {
        outline: none;
    }

    input, textarea {
        border: none;
        padding: 15px;
        border-radius: 5px;
        color: #ededed;
        font-size: 16px;
        background-color: #7e7e7e;
        margin-bottom: 28px;
    }

    textarea {
        height: 150px;
        resize: none;
    }

    button {
        margin: 0 auto;
    }
`;

const Form = () => {
    return (
        <FormContainer action="https://formspree.io/r.jesus9107@gmail.com" method="POST">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <Button type="submit">Send</Button>
        </FormContainer>
    );
};

export default Form;