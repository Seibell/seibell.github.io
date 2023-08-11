import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';  // Importing icons
import ContactForm from './ContactForm';
import NavBar from '../NavBar';
import './Contact.css';
import { resumeData } from '../Resume/ResumeText';

const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <div className="contact-header">
                <h2>Contact Me</h2>
                <div className="contact-icons">
                    <a href={`tel:${resumeData.contact.phone}`}><FaPhone /> {resumeData.contact.phone}</a>
                    <a href={`mailto:${resumeData.contact.email}`}><FaEnvelope /> {resumeData.contact.email}</a>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                </div>
                <h1>If you have any queries or would like to get in touch, please fill out the form below.</h1>
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactPage;