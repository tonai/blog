import { Tooltip } from "@mantine/core";
import clsx, { ClassValue } from "clsx";

import { technologies } from "@site/src/constants/brands";

import styles from "./styles.module.css";

interface ITechsProps {
  className?: ClassValue;
  techs?: (keyof typeof technologies)[];
}

export default function Techs(props: ITechsProps) {
  const { className, techs } = props;

  return (
    <>
      {techs && (
        <div className={clsx(styles.techs, className)}>
          {techs.map((tech) => (
            <Tooltip key={tech} label={tech}>
              {technologies[tech]}
            </Tooltip>
          ))}
        </div>
      )}
    </>
  );
}
