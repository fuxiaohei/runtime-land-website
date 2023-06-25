import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Support Multiple Languages",
    Svg: require("@site/static/img/index-multiple-languages.svg").default,
    description: <>Build functions with support for multiple programming languages.</>,
  },
  {
    title: "WebAssembly",
    Svg: require("@site/static/img/index-webassembly.svg").default,
    description: (
      <>
        Empower fast and secure execution of untrusted code with a WebAssembly sandbox.
      </>
    ),
  },
  {
    title: "Local or Cloud",
    Svg: require("@site/static/img/index-cloud-and-local.svg").default,
    description: (
      <>
        Enable the flexibility to run the service either in the cloud or locally.
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
