import React from 'react';
import '../styles/global.css';
import {
  AboutSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal';
import ServicesPage from '../components/services/services';
import ContactPage from '../components/contact/contact';

export default function IndexPage() {
  return (
    <>
      <Seo title="December Design & Development LLC" />
      <Page>
        <HeroSection sectionId="hero" />
        <ServicesPage />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="portfolio" heading="Portfolio" />
        <ContactPage />
      </Page>
    </>
  );
}
