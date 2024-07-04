import { CSSProperties, ElementType } from "react";
import clsx from "clsx";

import styles from "./style.module.css";

interface ILogoProps {
  Component?: ElementType;
  color?: string;
  isLogo: boolean;
  size?: number;
  tagline?: string;
}

export default function Logo(props: ILogoProps) {
  const {
    Component = "div",
    color = "var(--ifm-navbar-background-color)",
    isLogo,
    size = 18,
    tagline,
  } = props;

  return (
    <div
      className={clsx(styles.container, {
        [styles.isLogo]: isLogo,
      })}
      style={
        {
          "--color": color,
          "--fontSize": `${(size / 18) * 3}rem`,
          "--size": `${size}rem`,
        } as CSSProperties
      }
    >
      <div className={styles.banner}>
        <Component className={styles.title}>
          <span className={styles.firstName}>
            T<span className={styles.opacity}>ony</span>
          </span>{" "}
          <span className={styles.lastName}>
            C<span className={styles.opacity}>abaye</span>
          </span>
        </Component>
        {tagline && <p className={styles.subtitle}>{tagline}</p>}
      </div>
    </div>
  );
}
