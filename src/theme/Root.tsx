import {
  MantineColorScheme,
  MantineColorSchemeManager,
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";

import { ZoomProvider } from "../contexts/zoom";

const myColor: MantineColorsTuple = [
  "#e1ffff",
  "#d0f8f9",
  "#a7eff1",
  "#7ae6ea",
  "#55dee3",
  "#3ed9df",
  "#2bd7dd",
  "#13bec4",
  "#00aaaf",
  "#009398",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
});

let handleStorageEvent;
const key = "theme";
const colorSchemeManager: MantineColorSchemeManager = {
  get: (defaultValue) => {
    return ((typeof document !== "undefined" &&
      document.documentElement.dataset.theme) ??
      defaultValue) as MantineColorScheme;
  },

  set: () => {},

  subscribe: (onUpdate) => {
    if (typeof window === "undefined") {
      return;
    }
    handleStorageEvent = (event) => {
      if (event.storageArea === window.localStorage && event.key === key) {
        onUpdate(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageEvent);
  },

  unsubscribe: () => {
    if (typeof window === "undefined") {
      return;
    }
    window.removeEventListener("storage", handleStorageEvent);
  },

  clear: () => {},
};

export default function Root({ children }) {
  const [zoom, setZoom] = useState<string | null>(null);
  const zoomContext = useMemo(() => ({ zoom, setZoom }), [setZoom, zoom]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (zoom) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [zoom]);

  return (
    <MantineProvider
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="auto"
      theme={theme}
    >
      <ZoomProvider value={zoomContext}>{children}</ZoomProvider>
    </MantineProvider>
  );
}
