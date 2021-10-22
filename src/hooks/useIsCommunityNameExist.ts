import { graphql, useLazyLoadQuery } from "react-relay";
import type { useIsCommunityNameExistedQuery as Query } from "./__generated__/useIsCommunityNameExistedQuery.graphql";

const query = graphql`
  query useIsCommunityNameExistedQuery($name: String!) {
    isCommunityNameExisted(name: $name)
  }
`;

export const useIsCommunityNameExistedQuery = (name: string): Boolean => {
  const data = useLazyLoadQuery<Query>(query, { name });
  return data.isCommunityNameExisted;
};
