import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';

const ContactContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    background-color: #3f4245;
`;

const Contact = () => {
    return (
        <ContactContainer>
            <p className="section-heading">Get In Touch</p>
            <Form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <Button>Send</Button>
            </Form>
        </ContactContainer>
    );
};

export default Contact;