import styled from 'styled-components';

const Header = styled.header`
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
        font-size: 22px;
        color: #7e7e7e;

        span {
            color: #fff;
        }
    }
    
    img {
        width: 35px;
    }

`;

export default Header;