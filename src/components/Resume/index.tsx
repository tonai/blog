import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { Button, Tooltip } from "@mantine/core";
import clsx from "clsx";

import { DurationFormat, formatDuration } from "@site/src/helpers/date";
import Company from "../Company";
import Experience from "../Experience";
import Techs from "../Techs";
import ImageZoom from "../ImageZoom";
import FranceIcon from "../Icons/FranceIcon";
import UKIcon from "../Icons/UKIcon";
import GermanyIcon from "../Icons/GermanyIcon";
import ChinaIcon from "../Icons/ChinaIcon";
import GitHubIcon from "../Icons/GithubIcon";
import WebIcon from "../Icons/WebIcon";

import smile from "./images/smile.jpeg";
import diploma from "./images/diplome.webp";
import vueCertificateLight from "./images/9a23b6d1-92fc-40ba-98d1-30b40ae870b4.webp";
import vueCertificateDark from "./images/9a23b6d1-92fc-40ba-98d1-30b40ae870b4.dark.webp";
import styles from "./styles.module.css";

export default function Resume() {
  const { colorMode } = useColorMode();

  function print() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  return (
    <section className={clsx("container margin-vert--lg", styles.root)}>
      <header className={styles.flex}>
        <div className={styles.flex1}>
          <h1 className={styles.title}>Tony Cabaye</h1>
          <p className={styles.baseline}>
            JavaScript Full Stack senior developer - Frontend expert - Trainer -
            Game developer
          </p>
        </div>
        <Button className={styles.print} onClick={print}>
          Print
        </Button>
      </header>
      <div className={styles.flex}>
        <div className={styles.header}>
          <ul className={styles.list}>
            <li>
              <GitHubIcon />{" "}
              <a href="https://github.com/tonai" rel="external" target="_blank">
                https://github.com/tonai
              </a>
            </li>
            <li>
              <WebIcon />{" "}
              <Link href="/blog/">https://tonai.github.io/blog/</Link>
            </li>
            <li>
              <img
                className="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              />{" "}
              <a
                href="https://www.linkedin.com/in/tony-cabaye/"
                rel="external"
                target="_blank"
              >
                https://www.linkedin.com/in/tony-cabaye/
              </a>
            </li>
          </ul>
        </div>
        <aside>
          <div className={styles.asideList}>
            <dl className={styles.definition}>
              <dt className={styles.cellHead}>Age:</dt>
              <dd className={styles.cell}>
                {formatDuration(
                  new Date(1985, 7, 30),
                  "now",
                  DurationFormat.YEAR,
                )}
              </dd>
            </dl>
            <dl className={styles.definition}>
              <dt className={styles.cellHead}>Address:</dt>
              <dd className={styles.cell}>Bois-Colombes</dd>
            </dl>
            <dl className={styles.definition}>
              <dt className={styles.cellHead}>E-mail:</dt>
              <dd className={styles.cell}>
                <a href="mailto:tony.cabaye@gmail.com">tony.cabaye@gmail.com</a>
              </dd>
            </dl>
          </div>
        </aside>
      </div>
      <h2>Professional experiences</h2>
      <Company logo={smile} start={new Date(2009, 5)} end="now">
        <Experience
          start={new Date(2021, 7)}
          end="now"
          title="Technical expert at the Technical Department"
        >
          <li>
            Technical referent within the company (defined best practices,
            tools, etc.).
          </li>
          <li>Trainer and auditor (internal and external).</li>
          <li>Technical lead on projects.</li>
          <li>
            NodeJS backend development on Express, Sails, Next, Nest, Lambda
            AWS...etc.
          </li>
          <li>
            Frontend development of HTML, CSS, JS on React/Redux, Vue,
            Angular...etc.
          </li>
        </Experience>
        <Experience
          start={new Date(2016, 6)}
          end={new Date(2021, 7)}
          title="Technical expert"
        >
          <li>Technical lead on projects.</li>
          <li>Writing technical specifications.</li>
          <li>Supervision and skills development of technical teams.</li>
          <li>Trainer (internal and external).</li>
          <li>Technical referent within the company.</li>
          <li>
            NodeJS backend development on Express, Sails, Next, Nest, Lambda
            AWS...etc.
          </li>
          <li>
            Frontend HTML, CSS, JS development on Angular, React and Redux.
          </li>
        </Experience>
        <Experience
          start={new Date(2014, 8)}
          end={new Date(2016, 6)}
          title="Technical lead"
        >
          <li>Technical lead on projects.</li>
          <li>Writing technical specifications.</li>
          <li>Supervision and skills development of technical teams.</li>
          <li>PHP backend development on Magento 1 and Drupal 7 and 8.</li>
          <li>Frontend HTML, CSS, JS development on jQuery and Angular JS.</li>
        </Experience>
        <Experience
          start={new Date(2010, 7)}
          end={new Date(2014, 8)}
          title="Project Manager"
        >
          <li>
            Collection of requirements and drafting of functional
            specifications.
          </li>
          <li>Project monitoring.</li>
          <li>PHP backend development on Magento 1 and Drupal 7.</li>
          <li>Frontend HTML, CSS, JS development on jQuery.</li>
        </Experience>
        <Experience
          start={new Date(2009, 5)}
          end={new Date(2010, 7)}
          title="Development Engineer"
        >
          <li>
            PHP backend development on eZ publish, Magento 1 and Drupal 6.
          </li>
          <li>Frontend HTML, CSS, JS development on jQuery.</li>
        </Experience>
      </Company>
      <h2>Skills</h2>
      <div className={styles.grid}>
        <h3>Programming</h3>
        <Techs
          className={clsx(styles.skills, styles.gridItem)}
          techs={["HTML", "CSS", "Javascript", "Typescript", "C#", "PHP"]}
        />
        <h3>Frontend</h3>
        <Techs
          className={clsx(styles.skills, styles.gridItem)}
          techs={[
            "React",
            "Vue",
            "Svelte",
            "Angular",
            "Jquery",
            "D3",
            "Sass",
            "Jest",
            "Playwright",
            "Vitest",
            "Redux",
          ]}
        />
        <h3>Backend</h3>
        <Techs
          className={clsx(styles.skills, styles.gridItem)}
          techs={[
            "NodeJS",
            "Next",
            "Nuxt",
            "GraphQL",
            "Express",
            "NestJS",
            "Sails",
            "MySQL",
            "MongoDB",
            "Drupal",
            "Magento",
          ]}
        />
        <h3>Others</h3>
        <Techs
          className={clsx(styles.skills, styles.gridItem)}
          techs={[
            "Unity",
            "AWS",
            "Docker",
            "Git",
            "Github",
            "Gitlab",
            "Grunt",
            "Gulp",
            "Photoshop",
          ]}
        />
        <h3>Certifications</h3>
        <div className={clsx(styles.skills, styles.gridItem)}>
          <ImageZoom Image={diploma} title="Diploma" />
          <ImageZoom
            Image={
              colorMode === "dark" ? vueCertificateDark : vueCertificateLight
            }
            title="VueJS certificate"
          />
        </div>
        <h3>Languages</h3>
        <div className={clsx(styles.skills, styles.gridItem)}>
          <Tooltip label="Native">
            <div>
              <FranceIcon />
            </div>
          </Tooltip>
          <Tooltip label="Advanced">
            <div>
              <UKIcon />
            </div>
          </Tooltip>
          <Tooltip label="Confirmed">
            <div>
              <GermanyIcon />
            </div>
          </Tooltip>
          <Tooltip label="Beginner">
            <div>
              <ChinaIcon />
            </div>
          </Tooltip>
        </div>
      </div>
      <h2>Activity</h2>
      <div className={styles.grid}>
        <h3>Projects</h3>
        <div className={styles.gridItem}>
          Check the full project list here :
          <ul>
            <li>
              <Link to="/blog/projects/os-projects">Open Source Projects</Link>
            </li>
            <li>
              <Link to="/blog/projects/office-projects">Office Projects</Link>
            </li>
            <li>
              <Link to="/blog/projects/games">Games</Link>
            </li>
            <li>
              <Link to="/blog/projects/side-projects">Side Projects</Link>
            </li>
            <li>
              <Link to="/blog/projects/oldies">Oldies</Link>
            </li>
          </ul>
        </div>
        <h3>Interest</h3>
        <div className={styles.gridItem}>
          <ul>
            <li>Game development</li>
            <li>Sports (Bike, Ski, Badminton)</li>
            <li>Travels</li>
            <li>Manga</li>
            <li>Gaming</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
