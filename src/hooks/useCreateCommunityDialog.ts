import type { Dispatch, SetStateAction } from "react";
import * as React from "react";

const listeners = new Set<Dispatch<SetStateAction<typeof state>>>();

const state = {
  key: 0,
  open: false,
  show() {
    if (state.open === false) {
      state.key = Date.now();
      state.open = true;
      listeners.forEach((fn) => fn({ ...state }));
    }
  },
  hide() {
    if (state.open === true) {
      state.open = false;
      listeners.forEach((fn) => fn({ ...state }));
    }
  },
};

export function useCreateCommunityDialog(monitor = false): typeof state {
  const [communityDialog, dispatch] = React.useState(state);

  React.useEffect(() => {
    if (!monitor) return;
    listeners.add(dispatch);
    return () => {
      listeners.delete(dispatch);
    };
  }, [dispatch]);

  return communityDialog;
}
