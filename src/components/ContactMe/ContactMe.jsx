import React, { useState } from 'react';
import './ContactMe.css'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='contact-me-box'>
      <h2 className='contact-me-head'>Get In Touch</h2>
      <div className='contact-me-box-div'>
        <form className='contact-me-form-container' onSubmit={handleSubmit}>
          <div className='contact-me-form'>
            <label className='contact-me-subhead' htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='contact-me-form'>
            <label className='contact-me-subhead' htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='contact-me-form'>
            <label className='contact-me-subhead' htmlFor="subject">Subject:</label>
            <textarea
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='contact-me-form'>
            <label className='contact-me-subhead' htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='contact-me-form'>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className='contact-me-card'>
          <img src="https://assets-v2.lottiefiles.com/a/bb5d604e-1182-11ee-8df9-6f8439a0ba51/Sb5ssYXU8M.gif" alt="astronaut" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
