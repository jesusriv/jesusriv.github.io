import styled from 'styled-components';

const Button = styled.button`
    width: 160px;
    padding: 15px 0;
    background-color: #38A098;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    transition: .1s all ease-in;

    &:active {
        box-shadow: none;
    }
`;

export default Button;