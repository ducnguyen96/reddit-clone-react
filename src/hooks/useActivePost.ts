import type { Dispatch, SetStateAction } from "react";
import * as React from "react";

const listeners = new Set<Dispatch<SetStateAction<typeof state>>>();

const state = {
  slug: undefined,
  setSlug(slug: any) {
    state.slug = slug;
    listeners.forEach((fn) => fn({ ...state }));
  },
};

export function useActivePost(monitor = false): typeof state {
  const [loginDialog, dispatch] = React.useState(state);

  React.useEffect(() => {
    if (!monitor) return;
    listeners.add(dispatch);
    return () => {
      listeners.delete(dispatch);
    };
  }, [dispatch]);

  return loginDialog;
}
