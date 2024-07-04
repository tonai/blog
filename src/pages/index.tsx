import { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <button className={styles.button} onClick={toggleBanner} type="button">
          <Logo Component="h1" isLogo={isLogo} tagline={siteConfig.tagline} />
        </button>
      </main>
    </Layout>
  );
}
