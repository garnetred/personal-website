import React from 'react';
import { Seo, Section } from 'gatsby-theme-portfolio-minimal';

export default function ServicesPage() {
  return (
    <>
      <Seo useTitleTemplate={true} />
      <Section heading="Services" anchor="services">
        <p className="services-details">
          I specialize in the below services:
        </p>
        <ul>
          <li>web development</li>
          <li>browser extension development</li>
          <li>interim fullstack and front-end software engineering support for teams that are short-staffed
          </li>
        </ul>
        <p className="services-details">
          Please reach out via the <a href="/#contact">contact form</a> if you
          would like to schedule a free consultation.
        </p>
      </Section>
    </>
  );
}
