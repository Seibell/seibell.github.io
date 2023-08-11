import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Contact.css';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    message: yup.string().required('Message is required')
});


const ContactForm = () => {
    const { register, handleSubmit, errors = {} } = useForm({
        resolver: yupResolver(schema)
    });

    const [success, setSuccess] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                setSuccess(true);
                alert('Message sent!');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    };

    if (success) {
        return <Navigate to="/" />;
    }
    
    console.log(errors);

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" {...register('name')} />
                <p className="form-error">{errors.name?.message}</p>
            </div>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" {...register('email')} />
                <p className="form-error">{errors.email?.message}</p>
            </div>
            <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" {...register('message')}></textarea>
                <p className="form-error">{errors.message?.message}</p>
            </div>
            <button className="form-button" type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
