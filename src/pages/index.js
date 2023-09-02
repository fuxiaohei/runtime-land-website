import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import GitHubButton from "react-github-btn";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container" id="header-container">
        <div className="row">
          <div id="hero-container">
            <div className="hero__meta">
              <div className="hero_slogan">
                <p>Tiny</p>
                <p>Function-as-a-Service</p>
                <p><span>by </span><strong>WebAssembly</strong></p>
              </div>
              <p className="hero_slogan_subtitle">Easy to use, Open source, Run anywhere</p>
              <div id="github-button" className="margin-vert--md">
                <GitHubButton
                  href="https://github.com/fuxiaohei/runtime-land"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star facebook/metro on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
              <div id="buttons-container">
                <p>
                  <Link
                    className="button button--primary button--lg"
                    to="https://dash.runtime.land"
                  >
                    Sign up
                  </Link>
                  <Link
                    className="button button--secondary button--lg margin-vert--md margin-horiz--md"
                    to="/docs/intro"
                  >
                    Documentation
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <aside id="aside-container">
            <p className="step">Install cli</p>
            <p className="install-line">
              <code className="install-line__code">
                <span style={{ color: "#d1e6fa" }}>curl</span>
                <span>&nbsp;https://runtime.land/install.sh</span>
                <span style={{ color: "#ec9ea6" }}>&nbsp;-sSf</span>
                <span>&nbsp;| bash</span>
                <CopyToClipboard text={"curl https://runtime.land/install.sh -sSf | bash"}>
                  <button className="copy-button"><AiOutlineCopy /></button>
                </CopyToClipboard>
              </code>
            </p>
            <p className="step">Run your first function. Get <Link to="https://dash.runtime.land/account">your token</Link>.</p>
            <div className="install-line">
              <p>
                <code className="install-line__code">
                  <span style={{ color: "#d1e6fa" }}>land-cli</span>
                  <span>&nbsp;init</span>
                  <span style={{ color: "#ec9ea6" }}>&nbsp;hello-rust</span>
                </code>
              </p>
              <p>
                <code className="install-line__code">
                  <span style={{ color: "#d1e6fa" }}>cd</span>
                  <span>&nbsp;hello-rust</span>
                </code>
              </p>
              <p>
                <code className="install-line__code">
                  <span style={{ color: "#d1e6fa" }}>land-cli</span>
                  <span>&nbsp;build</span>
                </code>
              </p>
              <p>
                <code className="install-line__code">
                  <span style={{ color: "#d1e6fa" }}>land-cli</span>
                  <span>&nbsp;deploy</span>
                  <span style={{ color: "#d1e6fa" }}>&nbsp;--token</span>
                  <span style={{ color: "#ec9ea6" }}>&nbsp;&lt;your-token&gt;</span>
                </code>
              </p>
              <p>
                <code className="install-line__code">
                  <span style={{ color: "#a5a8ad" }}># output</span>
                </code>
              </p>
              <p>
                <code className="install-line__code">
                  <span style={{ color: "#61fa80" }}>https://separably-oxymora-811.runtime.lol/</span>
                </code>
              </p>
            </div>
          </aside>
        </div>
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
      <main id="main-container">
        <div id="features-container">
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
