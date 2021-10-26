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
import InfiniteScroll from "react-infinite-scroll-component";
import { useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import { DownVoteButton, UpVoteButton } from "../common/StyledButtons";
import { Comment } from "../components/Comment/Comment";
import { Post } from "../components/Post/Post";
import { CommentFragment } from "../fragments/__generated__/CommentFragment.graphql";
import { useActivePost, useViewPostDialog } from "../hooks";
import { User } from "../hooks/useCurrentUser";
import { PostListFragment } from "../routes/home/Home";
import { ViewPostDialogCommentQuery } from "./__generated__/ViewPostDialogCommentQuery.graphql";
import { ViewPostDialogPostQuery } from "./__generated__/ViewPostDialogPostQuery.graphql";

export interface CommentWithFragment extends CommentFragment {
  replies: CommentWithFragment[];
}

export function ViewPostDialog(): JSX.Element {
  // const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const viewPostDialog = useViewPostDialog(true);
  const theme = useTheme();
  const activePost = useActivePost();
  const environment = useRelayEnvironment();
  const [post, setPost] = useState<PostListFragment>();
  const [updateCommentList, setUpdateCommentList] = useState(0);

  const handleUpdateCommentList = () => {
    setUpdateCommentList(updateCommentList + 1);
  };

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
          setPost(res?.getPost);
        });
    }
  }, [viewPostDialog.key]);

  /*
      COMMENT SECTIONS
  */

  const [currentComments, setCurrentComments] = useState<CommentWithFragment[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Initial
  useEffect(() => {
    console.log("updateCommentList :", updateCommentList);
    // load data
    if (!!post) {
      fetchQuery<ViewPostDialogCommentQuery>(environment, commentQuery, {
        input: {
          limit: 10,
          page: currentPage,
          postID: post.id,
        },
      })
        .toPromise()
        .then((res) => {
          const newComments = res?.queryComment.comments || [];
          if (newComments.length < 10) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }

          const mapped: CommentWithFragment[] = newComments.map((c) => ({
            // @ts-ignore
            ...c["__fragments"]["CommentFragment"],
            replies: c.replies.map((d) => ({
              // @ts-ignore
              ...d["__fragments"]["CommentFragment"],
              replies: d.replies.map((e) => ({
                // @ts-ignore
                ...e["__fragments"]["CommentFragment"],
                replies: e.replies.map((f) => ({
                  // @ts-ignore
                  ...f["__fragments"]["CommentFragment"],
                  replies: f.replies.map((g) => ({
                    // @ts-ignore
                    ...g["__fragments"]["CommentFragment"],
                  })),
                })),
              })),
            })),
          }));

          setCurrentComments(mapped);
        });
    }
  }, [post, updateCommentList]);

  const fetchData = () => {
    console.log("fetching comments...");
    // load data
    if (!!post) {
      fetchQuery<ViewPostDialogCommentQuery>(environment, commentQuery, {
        input: {
          limit: 10,
          page: currentPage,
          postID: post.id,
        },
      }).subscribe({
        next: (res) => {
          console.log("res :", res);
          const newComments = res?.queryComment.comments || [];
          if (newComments.length < 10) {
            setHasMore(false);
          }
          setCurrentComments(currentComments.concat(newComments as any[]));
          setCurrentPage(currentPage + 1);
        },
      });
    }
  };

  return (
    <Dialog
      key={viewPostDialog.key}
      open={viewPostDialog.open}
      onClose={() => {
        viewPostDialog.hide();
        setPost(undefined);
      }}
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
              handleUpdateCommentList={handleUpdateCommentList}
            />
            <InfiniteScroll
              dataLength={currentComments ? currentComments.length : 0}
              next={fetchData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {currentComments.map((p, index) => (
                <Comment
                  main={p}
                  theme={theme}
                  key={index}
                  handleUpdateCommentList={handleUpdateCommentList}
                />
              ))}
            </InfiniteScroll>
          </Paper>
          <Paper sx={{ width: "312px" }}>Right</Paper>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const postQuery = graphql`
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

const commentQuery = graphql`
  query ViewPostDialogCommentQuery($input: QueryCommentInput!) {
    queryComment(input: $input) {
      length
      currentPage
      comments {
        id
        ...CommentFragment
        replies {
          ...CommentFragment
          replies {
            ...CommentFragment
            replies {
              ...CommentFragment
              replies {
                ...CommentFragment
              }
            }
          }
        }
      }
    }
  }
`;
