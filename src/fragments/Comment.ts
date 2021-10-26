import { graphql } from "relay-runtime";

export const CommentFragment = graphql`
  fragment CommentFragment on Comment @inline {
    id
    postID
    content
    contentMode
    createdAt
    updatedAt
    upVotes
    downVotes
    owner {
      id
      username
      avatar
    }
    isUpVoted
    isDownVoted
  }
`;
