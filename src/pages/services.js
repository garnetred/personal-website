import React from "react";
import * as Services from "./services.css";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" useTitleTemplate={true} noIndex={false} />
      <Page>
        <div class="services-heading-container">
          <h1 class="services-heading">Services</h1>
          <p class="services-details">Here are a few examples of the type of projects that December Design & Development can assist with:</p>
          <ul></ul>
            <li>automating time-consuming processes such as data entry</li>
            <li>maintaining existing websites or legacy applications</li>
            <li>offering support to companies while hiring for full-time engineers</li>
            <li>filling in for engineers on leave</li>
            <li>writing technical documentation</li>
            <li>transitioning from a website builder to a custom website</li>
            <li>complex projects that range from a few days to several months</li>
        <p class="services-details">Please reach out via the <a href="/contact">contact form</a> if interested in learning more.</p>
        </div>
      </Page>
    </>
  );
}
