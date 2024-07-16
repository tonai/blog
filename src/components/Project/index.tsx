import { ReactNode } from "react";
import clsx from "clsx";

import GitHubIcon from "../GithubIcon";
import WebIcon from "../WebIcon";

import styles from "./styles.module.css";

export interface ILink {
  link: string;
  type?: "github" | "web";
}

interface IProjectProps {
  black?: boolean;
  children: ReactNode;
  date: string;
  image: string;
  links: ILink[];
  title: string;
}

export default function Project(props: IProjectProps) {
  const { black, children, date, image, links, title } = props;
  return (
    <div className={styles.project}>
      <div className={clsx(styles.imageContainer, { [styles.black]: black })}>
        <img alt={`${title} project`} className={styles.image} src={image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>Created: {date}</p>
        <ul className={styles.links}>
          {links.map(({ link, type }, i) => (
            <li key={i} className={styles.link}>
              {type === "github" ? (
                <GitHubIcon className={styles.icon} />
              ) : (
                <WebIcon className={styles.icon} />
              )}
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    </div>
  );
}
