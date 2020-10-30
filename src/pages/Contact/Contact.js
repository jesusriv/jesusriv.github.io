import styled from 'styled-components';
import Form from '../../components/Form/Form';

const ContactContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: #3f4245;
`;

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <p className="section-heading">Get In Touch</p>
            <Form />
        </ContactContainer>
    );
};

export default Contact;