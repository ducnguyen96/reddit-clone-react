import * as React from "react";
import {
  fetchQuery,
  graphql,
  useFragment,
  useRelayEnvironment,
} from "react-relay";
import { createOperationDescriptor, getRequest, Snapshot } from "relay-runtime";
import {
  CommunityOnList,
  CommunityOnList$data,
  CommunityOnList$key,
} from "../fragments";
import type { useListCommunityQuery as Query } from "./__generated__/useListCommunityQuery.graphql";

const variables = {};
const query = graphql`
  query useListCommunityQuery($input: QueryCommunityInput!) {
    queryCommunity(input: $input) {
      ...CommunityOnList
    }
  }
`;

const operation = createOperationDescriptor(getRequest(query), {
  input: {
    limit: 1000,
    page: 1,
    onlyMine: true,
  },
});

export function useCommunityOnList(forceFetch = false): CommunityOnList {
  const relay = useRelayEnvironment();

  const [snap, setSnap] = React.useState<Snapshot>(() =>
    relay.lookup(operation.fragment)
  );

  // Subscribe to updates
  React.useEffect(() => {
    const subscription = relay.subscribe(snap, (x) => setSnap(x));
    return () => subscription.dispose();
  }, [relay]);

  // Once the component is mounted, attempt to load user record from the API.
  React.useEffect(() => {
    fetchQuery<Query>(
      relay,
      query,
      { input: operation.request.variables.input },
      {
        networkCacheConfig: { force: forceFetch || snap.isMissingData },
      }
    ).toPromise();
  }, [relay, forceFetch]);

  return useFragment(
    CommunityOnList,
    snap.data.queryCommunity as CommunityOnList$key
  );
}

export type CommunityOnList = CommunityOnList$data;
