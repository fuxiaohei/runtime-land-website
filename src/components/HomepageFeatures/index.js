import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Supports Multiple Languages",
    Svg: require("@site/static/img/files-support.svg").default,
    description: <>Create project with multiple languages.</>,
  },
  {
    title: "Webassembly",
    Svg: require("@site/static/img/webassembly.svg").default,
    description: (
      <>
        Webassembly sandbox for running untrusted code fast and securely.
      </>
    ),
  },
  {
    title: "Cloud and Local",
    Svg: require("@site/static/img/cloud-edge.svg").default,
    description: (
      <>
        Run function in the cloud or on the local.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
