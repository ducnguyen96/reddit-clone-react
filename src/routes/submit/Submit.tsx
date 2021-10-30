import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useRelayEnvironment } from "react-relay";
import { commitMutation, graphql } from "relay-runtime";
import { CreatePostEditor } from "../../components/CreatePostEditor/CreatePostEditor";
import { CommunityFragment } from "../../components/SearchCommunities/CommunityList";
import { SearchCommunities } from "../../components/SearchCommunities/SearchCommunities";
import {
  CreatePostInput,
  InputContentMode,
  PostType,
} from "../../graphql/types";
import { useCurrentCommunity, useHistory, useLoginDialog } from "../../hooks";
import { SubmitMutation } from "./__generated__/SubmitMutation.graphql";
import { submitQueryResponse } from "./__generated__/submitQuery.graphql";

export default function Submit(props: submitQueryResponse): JSX.Element {
  if (!props.me) {
    const history = useHistory();
    history.push("/");
    const loginDialog = useLoginDialog();
    loginDialog.show();
  }

  const [postContent, setPostContent] = useState("");
  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState(PostType.Post);

  const environment = useRelayEnvironment();

  const currentCommunity = useCurrentCommunity();
  const handleCreatePost = () => {
    if (currentCommunity.community) {
      if (postType === PostType.ImageVideo && postContent.length < 10) return;
      const input: CreatePostInput = {
        communityId: currentCommunity.community.id,
        content: postContent,
        contentMode: InputContentMode.MarkDown,
        title,
        type: postType,
      };

      // submit mutation
      return commitMutation<SubmitMutation>(environment, {
        mutation: createPostMutation,
        variables: { input },
        onCompleted: (res) => {
          location.href = "/";
        },
      });
    }
  };
  return (
    <>
      <Box
        sx={{
          margin: "88px 24px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "740px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", paddingBottom: "24px" }}
          >
            Create a post
          </Typography>
          <Divider />
          <SearchCommunities />
          <CreatePostEditor
            postType={postType}
            setPostType={setPostType}
            setPostContent={setPostContent}
            handleCreatePost={handleCreatePost}
            title={title}
            setTitle={setTitle}
          />
        </Box>
        <Box sx={{ width: "312px", marginLeft: "24px" }}></Box>
      </Box>
    </>
  );
}

export const createPostMutation = graphql`
  mutation SubmitMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;
