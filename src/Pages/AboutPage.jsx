import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <section>
        <div className="about">
          <h1>About Us</h1>
          <h1>
            FEEM supports and empowers marginalized <br /> young women to learn,
            thrive and lead change.
          </h1>
          <p>
            The Female Empowerment (FEEM) Initiative is an organization with the
            aim of helping <br /> young women make informd decisions about their
            lives. <br />
            <h1>Mission</h1>
            <p>
              The mission of the orgainzation is to empower young women on
              leadership, sexual and <br /> reproductive health and vocational
              skills training.
            </p>
            <h1>Vision</h1>
            <p>
              Our vision as an organization is to ensure that 70% young women in
              the Cape Coast Metropolis and <br /> the Bolgatanga Municipality
              are making informed decisions about their lives and
              <br /> 50% are making in leadership roles especially Parliament of
              Ghana by the year 2030.
            </p>
          </p>
        </div>
      </section>
      <section className="break">
        <div>
          <h1>
            We catalyze the power of young women to make <br /> very informative
            decisions about themselves in <br /> order to create a better future
            for themselves, <br /> their communities and the whole of Africa
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
