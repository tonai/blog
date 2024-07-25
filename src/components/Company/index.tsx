import { ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Collapse, Text } from "@mantine/core";
import clsx from "clsx";

import { formatDate, formatDuration } from "@site/src/helpers/date";

import styles from "./style.module.css";

interface ICompanyProps {
  children: ReactNode;
  end: Date | "now";
  logo: string;
  start: Date;
}

export default function Company(props: ICompanyProps) {
  const { children, end, logo, start } = props;
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <div className={styles.root}>
      <button className={styles.button} type="button" onClick={toggle}>
        <img className={styles.logo} alt="Smile logo" src={logo} />
        <h3 className={styles.title}>Smile</h3>
        <div>
          <div>
            {formatDate(start)} - {formatDate(end)}
          </div>
          <Text c="dimmed" className={styles.duration}>
            {formatDuration(start, end)}
          </Text>
        </div>
        <svg
          className={clsx(styles.svg, { [styles.opened]: opened })}
          viewBox="0 0 16 8"
          width="32"
        >
          <path d="M 0,0 L 16,0 L 8,8 Z" fill="currentColor" />
        </svg>
      </button>
      <Collapse className={styles.collapse} in={opened}>
        {children}
      </Collapse>
    </div>
  );
}
