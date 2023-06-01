import React from 'react';
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
        <AboutSection sectionId="about" heading="About Me" />
        <ServicesPage />
        <ProjectsSection sectionId="portfolio" heading="Portfolio" />
        <ContactPage />
      </Page>
    </>
  );
}
