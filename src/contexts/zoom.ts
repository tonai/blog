import { Dispatch, SetStateAction, createContext, useContext } from "react";

export interface IZoomContext {
  zoom: string | null;
  setZoom: Dispatch<SetStateAction<string | null>>;
}

export const zoomContext = createContext<IZoomContext>({
  zoom: null,
  setZoom: () => null,
});

export const ZoomProvider = zoomContext.Provider;

export function useZoom() {
  return useContext(zoomContext);
}
