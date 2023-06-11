import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className='hero__logo'>
          <img className={styles.heroLogoImg} src='/img/runtime-land-logo-240.svg' alt='runtime-land-logo' />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p>
            <Link
              className="button button--primary button--lg margin-right--lg"
              to="https://dash.runtime.land/">
              Start your project
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Documentation
            </Link>
          </p>
        </div>
        <p>
          <strong>this site is under construction</strong>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - a Function as a Service (FaaS) and serverless platform`}
      description="a Function as a Service (FaaS) and serverless platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
