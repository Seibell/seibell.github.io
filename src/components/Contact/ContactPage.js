import React from 'react';
import ContactForm from './ContactForm';
import NavBar from '../NavBar';
import './Contact.css';

const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <div className="contact-header">
                <h2>Contact Me</h2>
                <p>If you have any queries or would like to get in touch, please fill out the form below.</p>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
