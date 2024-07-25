import { ComponentType, ReactNode, SVGProps } from "react";

import { technologies } from "@site/src/constants/brands";
import GitHubIcon from "../Icons/GithubIcon";
import WebIcon from "../Icons/WebIcon";
import Techs from "../Techs";

import styles from "./styles.module.css";
import ImageZoom from "../ImageZoom";
import FranceIcon from "../Icons/FranceIcon";
import UKIcon from "../Icons/UKIcon";

export interface ILink {
  link: string;
  type?: "github" | "web";
}

interface IProjectProps {
  children: ReactNode;
  date: string;
  image: string | ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;
  language?: "fr" | "en";
  links?: ILink[];
  techs?: (keyof typeof technologies)[];
  title: string;
}

export default function Project(props: IProjectProps) {
  const { children, date, image, language, links, techs, title } = props;

  return (
    <article className={styles.project}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {title}{" "}
          {language &&
            (language === "fr" ? (
              <FranceIcon className={styles.middle} />
            ) : (
              <UKIcon className={styles.middle} />
            ))}
        </h2>
        <Techs techs={techs} />
      </header>
      <ImageZoom className={styles.image} Image={image} title={title} />
      <div className={styles.content}>
        <p className={styles.date}>
          <span>Started:</span> {date}
        </p>
        <ul className={styles.links}>
          {links?.map(({ link, type }, i) => (
            <li key={i} className={styles.link}>
              {type === "github" ? (
                <GitHubIcon className={styles.icon} />
              ) : (
                <WebIcon className={styles.icon} />
              )}
              <a href={link} rel="external" target="_blank">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    </article>
  );
}
