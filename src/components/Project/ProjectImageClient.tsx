import clsx from "clsx";
import {
  ComponentType,
  MutableRefObject,
  SVGProps,
  useEffect,
  useRef,
} from "react";
import { Overlay } from "@mantine/core";

import styles from "./styles.module.css";
import { useZoom } from "@site/src/contexts/zoom";
import { startViewTransition } from "@site/src/helpers/transition";

interface IProjectProps {
  Image: string | ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;
  title: string;
}

export default function ProjectImageClient(props: IProjectProps) {
  const { Image, title } = props;
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
  );
}
