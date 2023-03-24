import React from 'react';
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from 'gatsby-theme-portfolio-minimal';
import ServicesPage from './services';
import ContactPage from './contact';

export default function IndexPage() {
  return (
    <>
      <Seo title="December Design & Development LLC" />
      <Page>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <ServicesPage />
        <ProjectsSection sectionId="portfolio" heading="Portfolio" />
        <ContactPage />
        <InterestsSection sectionId="details" heading="Skills" />
        {/* <ContactSection sectionId="contact" heading="Contact" /> */}
      </Page>
    </>
  );
}
