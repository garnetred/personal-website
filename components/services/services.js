import React from 'react';
import { Seo, Section } from 'gatsby-theme-portfolio-minimal';
import './services';

export default function ServicesPage() {
  return (
    <>
      <Seo useTitleTemplate={true} />
      <Section heading="Services" anchor="services">
        <p className="services-details">
          Here are a few examples of the type of projects that December Design &
          Development can assist with:
        </p>
        <ul></ul>
        <li>automating time-consuming processes such as data entry</li>
        <li>maintaining existing websites or legacy applications</li>
        <li>
          offering support to companies while hiring for full-time engineers
        </li>
        <li>filling in for engineers on leave</li>
        <li>writing technical documentation</li>
        <li>transitioning from a website builder to a custom website</li>
        <li>complex projects that range from a few days to several months</li>
        <p className="services-details">
          Please reach out to me via the <a href="/#contact">contact form</a> if
          interested in learning more.
        </p>
      </Section>
    </>
  );
}
