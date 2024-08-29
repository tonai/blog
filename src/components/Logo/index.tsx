import { CSSProperties, ElementType } from "react";
import clsx from "clsx";

import styles from "./style.module.css";

interface ILogoProps {
  className?: string;
  Component?: ElementType;
  color?: string;
  isLogo: boolean;
  size?: number | string;
  tagline?: string;
}

export default function Logo(props: ILogoProps) {
  const {
    className = "",
    Component = "div",
    color = "var(--ifm-navbar-background-color)",
    isLogo,
    size = 18,
    tagline,
  } = props;

  return (
    <div
      className={clsx(styles.container, className, {
        [styles.isLogo]: isLogo,
      })}
      style={
        {
          "--color": color,
          "--size": typeof size === "number" ? `${size}rem` : size,
          "--fontSize": "calc(var(--size) / 18 * 3)",
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
