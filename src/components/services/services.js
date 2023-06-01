import React from 'react';
import { Seo, Section } from 'gatsby-theme-portfolio-minimal';

export default function ServicesPage() {
  return (
    <>
      <Seo useTitleTemplate={true} />
<<<<<<< HEAD
      <Section heading="Services" anchor="services">
        <p className="services-details">
          I specialize in offering the below services:
        </p>
=======
      <Section heading="Services" anchor="services" className="hi">
        <p className="services-details">I specialize in the below services:</p>
>>>>>>> d58c9d0f40e50dd571ae6e9c5d12723d464c10df
        <ul>
          <li>automating data entry via programming</li>
          <li>maintaining existing websites or legacy applications</li>
          <li>
            offering support to companies while hiring full-time engineers
          </li>
          <li>filling in for engineers on leave</li>
        </ul>
        <p className="services-details">
          Please reach out via the <a href="/#contact">contact form</a> if you
<<<<<<< HEAD
          would like to learn more.
=======
          would like to schedule a consultation.
>>>>>>> d58c9d0f40e50dd571ae6e9c5d12723d464c10df
        </p>
      </Section>
    </>
  );
}
