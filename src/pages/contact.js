import React from "react";
import * as Contact from "./contact.css";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Us" useTitleTemplate={true} noIndex={true} />
      <Page>
        <div class="contact-us-heading-container">
          <h1 class="contact-us-heading">Contact Us</h1>
          <p class="contact-us-details">Please complete the form below if you are interested in working with December Design & Development, and I will get back to you as soon as posible.</p>
        </div>
      </Page>
    </>
  );
}
