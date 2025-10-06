import React, { useState } from 'react';
import './Footer.scss';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const scriptURL = process.env.REACT_APP_SHEET_SCRIPT_URL;

  const handleSubmit = () => {
    setLoading(true);

    const formToSheet = new FormData();
    formToSheet.append('name', name);
    formToSheet.append('email', email);
    formToSheet.append('message', message);

    console.log(scriptURL);

    fetch(scriptURL, { method: 'POST', body: formToSheet })
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => console.error('Error!', error.message));

    // const contact = {
    //   _type: 'contact',
    //   name: name,
    //   email: email,
    //   message: message
    // }

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsSubmitted(true);
    //   })
  };

  return (
    <>
      <h2 className='head-text'>
        Now It's <span>Your Turn</span>, Feel Free to <span>Contact</span> Me!
      </h2>

      <div className='app__footer-cards'>
        <a
          href='mailto:kevnhalim@gmail.com'
          className='app__footer-card'
          target='_blank'
          rel='noreferrer'
        >
          <img src={images.email} alt='Email' />
          <p className='p-text'>kevnhalim@gmail.com</p>
        </a>

        <a
          href='https://line.me/ti/p/~kvnnh'
          className='app__footer-card'
          target='_blank'
          rel='noreferrer'
        >
          <img src={images.mobile} alt='LINE' />
          <p className='p-text'>Kevin Nathanael</p>
        </a>
      </div>

      {!isSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Enter your name..'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Enter your email..'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Enter your message..'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text' style={{ marginTop: 40 }}>
            <span>Thanks</span> for reaching out.
            <br />
            I'll get back to you!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
