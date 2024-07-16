import { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

import Logo from "../components/Logo";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const [isLogo, setIsLogo] = useState(false);
  const { siteConfig } = useDocusaurusContext();

  function toggleBanner() {
    setIsLogo((x) => !x);
  }

  return (
    <Layout
      title={`Homepage`}
      description="Homepage of the personal blog and website of Tony Cabaye, JavaScript Full Stack senior developer, Frontend expert and Game developer from France"
    >
      <main className={styles.main}>
        <button className={styles.button} onClick={toggleBanner} type="button">
          <Logo Component="h1" isLogo={isLogo} tagline={siteConfig.tagline} />
        </button>
        <div className={clsx("container", styles.container)}>
          <p>Hello and welcome 👋</p>
          <p>
            I am Tony Cabaye (tonai on Github a JavaScript Full Stack senior
            developer, Frontend expert and Game developer from France 🇫🇷.
          </p>
          <p>
            I like to create stuff that run in the browser and I like to share
            my knowledge (hence this blog 🤓).
          </p>
        </div>
      </main>
    </Layout>
  );
}
