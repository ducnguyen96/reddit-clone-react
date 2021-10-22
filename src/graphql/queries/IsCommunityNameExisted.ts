import { graphql } from "react-relay";

export const IsCommunityNameExisted = graphql`
  query IsCommunityNameExistedQuery($name: String!) {
    isCommunityNameExisted(name: $name)
  }
`;
