import React from 'react';
import { Page, Seo, Section } from 'gatsby-theme-portfolio-minimal';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us" useTitleTemplate={true} noIndex={true} />
      <Page>
        <Section heading="Contact Us">
          <p class="contact-us-details">
            Please complete the form below if you are interested in working with
            December Design & Development, and I will get back to you as soon as
            posible.
          </p>
        </Section>
      </Page>
    </>
  );
}
