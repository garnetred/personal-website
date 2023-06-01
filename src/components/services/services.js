import React from 'react';
import { Seo, Section } from 'gatsby-theme-portfolio-minimal';

export default function ServicesPage() {
  return (
    <>
      <Seo useTitleTemplate={true} />
      <Section heading="Services" anchor="services">
        <p className="services-details">
          I specialize in offering the below services:
        </p>
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
          would like to learn more.
        </p>
      </Section>
    </>
  );
}
