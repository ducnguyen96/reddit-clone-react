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
import { useHistory, useLoginDialog } from "../../hooks";
import { SubmitMutation } from "./__generated__/SubmitMutation.graphql";
import { submitQueryResponse } from "./__generated__/submitQuery.graphql";

export default function Submit(props: submitQueryResponse): JSX.Element {
  if (!props.me) {
    const history = useHistory();
    history.push("/");
    const loginDialog = useLoginDialog();
    loginDialog.show();
  }

  const [selectedCommunity, setSelectedCommunity] =
    useState<CommunityFragment | null>(null);

  const [postContent, setPostContent] = useState("");
  const [title, setTitle] = useState("");

  const environment = useRelayEnvironment();
  const handleCreatePost = () => {
    // validate input
    if (!selectedCommunity || !postContent || !title) {
      return;
    }

    const input: CreatePostInput = {
      communityId: selectedCommunity?.id || "",
      content: postContent,
      contentMode: InputContentMode.MarkDown,
      title,
      type: PostType.Post,
    };

    // submit mutation
    return commitMutation<SubmitMutation>(environment, {
      mutation: createPostMutation,
      variables: { input },
      onCompleted: (res) => {
        location.href = "/";
      },
    });
  };
  return (
    <>
      <Box
        sx={{
          margin: "40px 24px 24px",
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
          <SearchCommunities
            selectedCommunity={selectedCommunity}
            setSelectedCommunity={setSelectedCommunity}
          />
          <CreatePostEditor
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
