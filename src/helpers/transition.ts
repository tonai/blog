import { flushSync } from "react-dom";

export function startViewTransition(callback: () => void) {
  if (typeof document === "undefined") {
    return;
  }
  if (!document.startViewTransition) {
    callback();
    return;
  }
  return document.startViewTransition(() => flushSync(() => callback()));
}
