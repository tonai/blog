import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Overlay, Tooltip } from "@mantine/core";

import { technologies } from "@site/src/constants/brands";
import GitHubIcon from "../Icons/GithubIcon";
import WebIcon from "../Icons/WebIcon";

import styles from "./styles.module.css";
import { useZoom } from "@site/src/contexts/zoom";
import { startViewTransition } from "@site/src/helpers/transition";

export interface ILink {
  link: string;
  type?: "github" | "web";
}

interface IProjectProps {
  children: ReactNode;
  date: string;
  image: string;
  links?: ILink[];
  techs?: (keyof typeof technologies)[];
  title: string;
}

export default function Project(props: IProjectProps) {
  const { children, date, image, links, techs, title } = props;
  const { setZoom, zoom } = useZoom();
  const containerRef = useRef<HTMLDivElement>();
  const imageRef = useRef<HTMLImageElement>();

  function toggleZoom() {
    imageRef.current.classList.add(styles.transition);
    startViewTransition(() => {
      setZoom((zoom) => (zoom === title ? null : title));
      setTimeout(() => imageRef.current.classList.remove(styles.transition), 0);
    });
  }

  useEffect(() => {
    if (imageRef.current) {
      const height = imageRef.current.naturalHeight;
      const width = imageRef.current.naturalWidth;
      if (containerRef.current) {
        containerRef.current.style.aspectRatio = width + "/" + height;
        containerRef.current.style.maxWidth =
          Math.max(200, Math.min(500, width)) + "px";
      }
    }
  }, []);

  return (
    <article className={styles.project}>
      <div
        ref={containerRef}
        className={clsx(styles.imageContainer, {
          [styles.zoom]: zoom === title,
        })}
      >
        <button className={styles.imageButton} onClick={toggleZoom}>
          {zoom === title && (
            <Overlay color="#000" backgroundOpacity={0.5} blur={5} />
          )}
          <img
            ref={imageRef}
            alt={`${title} project`}
            className={styles.image}
            src={image}
          />
        </button>
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {techs && (
            <div className={styles.techs}>
              {techs.map((tech) => (
                <Tooltip key={tech} label={tech}>
                  {technologies[tech]}
                </Tooltip>
              ))}
            </div>
          )}
        </header>
        <p className={styles.date}>
          <span>Created:</span> {date}
        </p>
        <ul className={styles.links}>
          {links?.map(({ link, type }, i) => (
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
    </article>
  );
}
