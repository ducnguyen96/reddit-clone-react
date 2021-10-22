import { graphql } from "react-relay";

export const CommunityOnList = graphql`
  fragment CommunityOnList on CommunityPagination {
    length
    currentPage
    communities {
      id
      name
      numberOfMember
    }
  }
`;
