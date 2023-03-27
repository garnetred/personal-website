import React from 'react';
import { Page, Seo, Section } from 'gatsby-theme-portfolio-minimal';

export default function ThankYou() {
  return (
    <>
      <Seo title="Thank You" useTitleTemplate={false} noIndex={true} />
      <Page>
        <Section heading="Contact Us">
          <p>
            Your information has been submitted successfully. I will get back to
            you as soon as possible.
          </p>
        </Section>
      </Page>
    </>
  );
}
