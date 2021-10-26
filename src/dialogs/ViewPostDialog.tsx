import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import { DownVoteButton, UpVoteButton } from "../common/StyledButtons";
import { Post } from "../components/Post/Post";
import { useActivePost, useViewPostDialog } from "../hooks";
import { PostListFragment } from "../routes/home/Home";
import { ViewPostDialogPostQuery } from "./__generated__/ViewPostDialogPostQuery.graphql";

export function ViewPostDialog(): JSX.Element {
  // const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const viewPostDialog = useViewPostDialog(true);
  const theme = useTheme();
  const activePost = useActivePost();
  const environment = useRelayEnvironment();
  const [post, setPost] = useState<PostListFragment>();

  useEffect(() => {
    if (activePost.slug) {
      fetchQuery<ViewPostDialogPostQuery>(
        environment,
        postQuery,
        { slug: activePost.slug },
        {
          fetchPolicy: "store-or-network",
        }
      )
        .toPromise()
        .then((res) => {
          console.log("res :", res);
          setPost(res?.getPost);
        });
    }
  }, [viewPostDialog.key]);

  return (
    <Dialog
      key={viewPostDialog.key}
      open={viewPostDialog.open}
      onClose={() => {
        viewPostDialog.hide();
        setPost(undefined);
      }}
      // scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
      maxWidth="lg"
    >
      <Paper
        sx={{
          width: "100%",
          display: "fixed",
          backgroundColor: "black",
          height: "48px",
          borderRadius: "0",
          color: "#878a8c",
          alignItems: "center",
          padding: "0 60px",
        }}
      >
        |
        <UpVoteButton
          color="#878a8c"
          id="1"
          label="upvote"
          onClickHandler={() => {}}
          disabled={false}
        />
        <Typography variant="h4" textAlign={"center"} color="#d7dadc">
          {post ? post.upVotes - post.downVotes : 0}
        </Typography>
        <DownVoteButton
          color="#878a8c"
          id="1"
          label="upvote"
          onClickHandler={() => {}}
          disabled={false}
        />
        |
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", color: "#d7dadc" }}
        >
          {post ? post.title : ""}
        </Typography>
        <Button
          variant="text"
          startIcon={<Close />}
          sx={{ float: "right", marginLeft: "auto", color: "#d7dadc" }}
          onClick={viewPostDialog.hide}
        >
          Close
        </Button>
      </Paper>
      <DialogContent
        sx={{
          width: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // @ts-ignore
          backgroundColor: theme.palette.backgroundSecondary.default,
        }}
      >
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <Paper sx={{ width: "740px", marginRight: "1rem" }}>
            <Post
              theme={theme}
              fragment={post}
              comment={true}
              sx={{ marginBottom: "0" }}
            />
          </Paper>
          <Paper sx={{ width: "312px", height: "5000px" }}>Right</Paper>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export const postQuery = graphql`
  query ViewPostDialogPostQuery($slug: String!) {
    getPost(slug: $slug) {
      id
      title
      slug
      content
      type
      contentMode
      upVotes
      downVotes
      createdAt
      updatedAt
      numberOfComments
      isUpVoted
      isDownVoted
      community {
        id
        name
        slug
        numberOfMember
      }
      owner {
        id
        username
        avatar
      }
    }
  }
`;
