import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Admonition from "@theme/Admonition";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className="hero__logo">
          <img
            className={styles.heroLogoImg}
            src="/img/logo-v2.svg"
            alt="runtime-land-logo"
          />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p>
            <Link
              className="button button--primary button--lg margin-right--lg"
              to="https://web.runtime.land/"
            >
              Start your project
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Documentation
            </Link>
          </p>
        </div>
        {/** 
        <div className={styles.underConstructionContainer}>
          <div className={styles.underConstruction}>
            <Admonition type="caution">
              <p>
                This project is developing. Do not use it in production.
                <br />
                Read more information about the project{" "}
                <a href="docs/roadmap">roadmap</a>.
              </p>
            </Admonition>
          </div>
        </div>
        */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - a tiny Function as a Service (FaaS) platform`}
      description="a Function as a Service (FaaS) platform"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
