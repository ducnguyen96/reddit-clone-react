import type { Dispatch, SetStateAction } from "react";
import * as React from "react";
import { CommunityFragment } from "../components/SearchCommunities/CommunityList";

const listeners = new Set<Dispatch<SetStateAction<typeof state>>>();

const state: {
  community: undefined | CommunityFragment;
  setCurrentCommunity: (community: CommunityFragment) => void;
} = {
  community: undefined,
  setCurrentCommunity(community: CommunityFragment) {
    state.community = community;
    listeners.forEach((fn) => fn({ ...state }));
  },
};

export function useCurrentCommunity(): typeof state {
  const [community, dispatch] = React.useState(state);

  React.useEffect(() => {
    listeners.add(dispatch);
    return () => {
      listeners.delete(dispatch);
    };
  }, [dispatch]);

  return community;
}
