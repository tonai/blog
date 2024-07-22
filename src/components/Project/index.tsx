import clsx from "clsx";
import {
  ComponentType,
  MutableRefObject,
  ReactNode,
  SVGProps,
  useEffect,
  useRef,
  useState,
} from "react";
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
  image: string | ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;
  links?: ILink[];
  techs?: (keyof typeof technologies)[];
  title: string;
}

export default function Project(props: IProjectProps) {
  const { children, date, image: Image, links, techs, title } = props;
  const { setZoom, zoom } = useZoom();
  const containerRef = useRef<HTMLDivElement>();
  const imageRef = useRef<HTMLImageElement | HTMLDivElement>();

  function toggleZoom() {
    if (imageRef.current) {
      imageRef.current.classList.add(styles.transition);
      startViewTransition(() => {
        setZoom((zoom) => (zoom === title ? null : title));
        setTimeout(
          () => imageRef.current.classList.remove(styles.transition),
          0,
        );
      });
    }
  }

  useEffect(() => {
    console.log(imageRef.current);
    if (imageRef.current && imageRef.current instanceof HTMLImageElement) {
      const height = imageRef.current.naturalHeight;
      const width = imageRef.current.naturalWidth;
      if (containerRef.current) {
        containerRef.current.style.aspectRatio = width + "/" + height;
        containerRef.current.style.maxWidth =
          Math.max(200, Math.min(400, width)) + "px";
      }
    }
  }, []);

  return (
    <article className={styles.project}>
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
          {typeof Image === "string" ? (
            <img
              ref={imageRef as MutableRefObject<HTMLImageElement>}
              alt={`${title} project`}
              className={styles.image}
              src={Image}
            />
          ) : (
            <div ref={imageRef} className={styles.image}>
              <Image className={styles.svg} />
            </div>
          )}
        </button>
      </div>
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
