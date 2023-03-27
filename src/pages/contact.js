import React, { useState } from 'react';
import { Page, Seo, Section } from 'gatsby-theme-portfolio-minimal';
import Contact from './contact.css';
export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === 'name') {
      setName(e.target.value);
    }
    if (name === 'email') {
      setEmail(e.target.value);
    }

    if (name === 'message') {
      setMessage(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert('your message has been sent successfully');
  };

  // const displayErrorMessage = () => {
  //   // if (this.state.location === "") {
  //   //   this.setState({ locationError: true });
  //   // }
  //   // if (this.state.style === "") {
  //   //   this.setState({ styleError: true });
  //   // }
  // };

  return (
    <>
      <Seo useTitleTemplate={true} />
      <Section heading="Contact Us" anchor="contact">
        <section className="contact-form-body">
          <p className="contact-us-details">
            Please complete the form below if you are interested in working with
            December Design & Development, and I will get back to you as soon as
            posible.
          </p>
          <section className="contact-form-container">
            <form
              className="contact-form"
              name="contact-form"
              data-testid="contactform"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <p className="contact-form-labels">Name:</p>
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                className="name-input"
                type="text"
                placeholder="name"
                name="name"
                aria-label="name"
                value={name}
                onChange={(e) => handleChange(e)}
                required
              />
              <p className="contact-form-labels">Email:</p>
              <input
                className="email-input"
                type="text"
                placeholder="email"
                name="email"
                aria-label="email"
                value={email}
                onChange={(e) => handleChange(e)}
                required
              />
              <p className="contact-form-labels">Message:</p>
              <textarea
                className="message-input"
                type="textarea"
                placeholder="message"
                name="message"
                aria-label="message"
                value={message}
                onChange={(e) => handleChange(e)}
                required
              />
              <button
                type="submit"
                className="contact-form-button"
                onClick={submitForm}
              >
                submit
              </button>
            </form>
          </section>
          <section className="error-wrapper"></section>
        </section>
      </Section>
    </>
  );
}
