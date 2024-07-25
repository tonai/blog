import { ReactNode } from "react";
import { Text } from "@mantine/core";

import { formatDate, formatDuration } from "@site/src/helpers/date";

import styles from "./style.module.css";

interface IExperienceProps {
  children: ReactNode;
  end: Date | "now";
  start: Date;
  title: string;
}

export default function Experience(props: IExperienceProps) {
  const { children, end, start, title } = props;
  return (
    <article>
      <header>
        <h4 className={styles.title}>{title}</h4>
        <Text c="dimmed">
          {formatDate(start)} - {formatDate(end)} ({formatDuration(start, end)})
        </Text>
      </header>
      <ul className={styles.list}>{children}</ul>
    </article>
  );
}
