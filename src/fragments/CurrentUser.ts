import { graphql } from "react-relay";

export const CurrentUser_me = graphql`
  fragment CurrentUser_me on User {
    id
    username
  }
`;
