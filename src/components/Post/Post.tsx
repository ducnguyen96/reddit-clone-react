import { Theme } from "@emotion/react";
import {
  ModeCommentOutlined,
  RedeemOutlined,
  SaveAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRelayEnvironment } from "react-relay";
import { commitMutation, graphql } from "relay-runtime";
import remarkGfm from "remark-gfm";
import { DownVoteButton, UpVoteButton } from "../../common/StyledButtons";
import { mediaServer } from "../../config";
import { CommentWithFragment } from "../../dialogs/ViewPostDialog";
import { MyEditor } from "../../editor/MyEditor";
import { useActivePost, useViewPostDialog } from "../../hooks";
import { PostListFragment } from "../../routes/home/Home";
import { getCreatedAt } from "../../utils/createdAt";
import { stringAvatar } from "../../utils/stringAvatar";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import {
  CreateCommentInput,
  PostCommentMutation,
} from "./__generated__/PostCommentMutation.graphql";
import {
  PostCreateActionMutation,
  UserActionType,
} from "./__generated__/PostCreateActionMutation.graphql";

export type PostProps = {
  theme: Theme;
  fragment?: PostListFragment;
  comment?: Boolean;
  sx?: any;
  handleUpdateCommentList?: (
    newComment: CommentWithFragment,
    parent: Boolean
  ) => void;
};

export const Post = ({
  theme,
  fragment,
  comment,
  sx,
  handleUpdateCommentList,
}: PostProps) => {
  if (!fragment) {
    return <p>Hello</p>;
  }

  const [voteStatus, setVoteStatus] = useState<{
    isUpVoted: boolean;
    isDownVoted: boolean;
    votes: number;
  }>({
    isUpVoted: fragment.isUpVoted,
    isDownVoted: fragment.isDownVoted,
    votes: fragment.upVotes - fragment.downVotes,
  });

  // @ts-ignore
  const color = theme.palette.neutral.main;
  // @ts-ignore
  const postColor = theme.palette.neutral["800"];

  const voteColor = voteStatus.isUpVoted
    ? "#FF4500"
    : voteStatus.isDownVoted
    ? "#7193FF"
    : postColor;

  const environment = useRelayEnvironment();
  const handleCreateAction = (actionType: UserActionType, id: string) => {
    commitMutation<PostCreateActionMutation>(environment, {
      mutation: createAction,
      variables: {
        input: {
          target: id,
          type: actionType,
          targetType: "POST",
        },
      },
      onCompleted: (res) => {
        switch (res.userCreateAction.type) {
          case "UpVote": {
            const votes = voteStatus.isDownVoted
              ? voteStatus.votes + 2
              : voteStatus.votes + 1;
            setVoteStatus({
              isDownVoted: false,
              isUpVoted: true,
              votes,
            });
            break;
          }
          default: {
            const votes = voteStatus.isUpVoted
              ? voteStatus.votes - 2
              : voteStatus.votes - 1;
            setVoteStatus({
              isDownVoted: true,
              isUpVoted: false,
              votes,
            });
          }
        }
      } /* Mutation completed */,
      onError: (error) => {
        console.log("error :", error);
      } /* Mutation errored */,
    });
  };

  // const history = useHistory();
  const viewPostDialog = useViewPostDialog();
  const activePost = useActivePost();
  const handleClickViewPost = () => {
    activePost.setSlug(fragment.slug);
    viewPostDialog.show();
  };

  const [commentContent, setCommentContent] = useState("");

  const handleCreateComment = () => {
    const input: CreateCommentInput = {
      content: commentContent,
      contentMode: "MarkDown",
      postID: fragment.id,
    };

    // submit mutation
    return commitMutation<PostCommentMutation>(environment, {
      mutation: commentMutation,
      variables: { input },
      onCompleted: (res) => {
        console.log("res :", res);
        if (!!handleUpdateCommentList) {
          const fragment: CommentWithFragment = {
            ...res.createComment,
            " $refType": "CommentFragment",
            oldestParentID: res.createComment.id,
            replies: [],
          };
          handleUpdateCommentList(fragment, false);
        }
      },
    });
  };
  return (
    <>
      <Paper
        sx={{ display: "flex", marginBottom: "10px", ...sx }}
        elevation={0}
      >
        <Box sx={{ width: "40px" }}>
          <UpVoteButton
            color={color}
            disabled={voteStatus.isUpVoted}
            label={"up"}
            id={fragment.id}
            onClickHandler={handleCreateAction}
          />
          <Typography variant="h4" textAlign={"center"} color={voteColor}>
            {voteStatus.votes}
          </Typography>
          <DownVoteButton
            color={color}
            disabled={voteStatus.isDownVoted}
            label={"down"}
            id={fragment.id}
            onClickHandler={handleCreateAction}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          {/* TOP */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="community" color="primary">
              <Avatar
                {...stringAvatar(fragment.community.name[0])}
                sx={{ width: "20px", height: "20px", fontSize: "small" }}
                sizes="small"
              />
            </IconButton>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ fontWeight: "bold" }}
              variant="h5"
            >
              {`r/${fragment.community.name}`}
            </Link>
            <Typography variant="h5" color={color}>
              . Posted by
            </Typography>
            <Link
              href="#"
              underline="none"
              color={color}
              variant="h5"
              sx={{ marginLeft: "5px" }}
            >
              {`u/${fragment.owner.username}`}
            </Link>
            <Typography variant="h5" marginLeft={"5px"} color={color}>
              {getCreatedAt(fragment.createdAt)}
            </Typography>
          </Box>

          {/* MIDDLE */}
          {fragment.type === "Post" ? (
            <Box
              sx={{ padding: "8px", ":hover": { cursor: "pointer" } }}
              onClick={handleClickViewPost}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold" }}
                color={color}
              >
                {fragment.title}
              </Typography>
              {/* <Typography variant="body1" color={postColor}> */}
              <ReactMarkdown
                children={fragment.content}
                remarkPlugins={[remarkGfm]}
                className="markdown-content"
              />

              {/* </Typography> */}
            </Box>
          ) : fragment.content.startsWith("/images") ? (
            <Box
              onClick={handleClickViewPost}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: ".5rem",
                }}
                color={color}
              >
                {fragment.title}
              </Typography>
              <img
                src={mediaServer.origin + fragment.content}
                style={{ width: "100%" }}
                alt="image"
              />
            </Box>
          ) : (
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginBottom: ".5rem",
                  ":hover": { cursor: "pointer" },
                }}
                color={color}
                onClick={handleClickViewPost}
              >
                {fragment.title}
              </Typography>
              <VideoPlayer fragmentContent={fragment.content} />
            </Box>
          )}

          {/* BOTTOM */}
          <Box sx={{ padding: "8px", display: "flex", alignItems: "center" }}>
            <Button
              variant="text"
              startIcon={<ModeCommentOutlined />}
              sx={{ borderRadius: "20px", marginRight: "8px", color }}
              onClick={handleClickViewPost}
            >
              {`${fragment.numberOfComments} comments`}
            </Button>
            <Button
              variant="text"
              startIcon={<RedeemOutlined />}
              sx={{ borderRadius: "20px", marginRight: "8px", color }}
            >
              Award
            </Button>
            <Button
              variant="text"
              startIcon={<ShareOutlined />}
              sx={{ borderRadius: "20px", marginRight: "8px", color }}
            >
              Share
            </Button>
            <Button
              variant="text"
              startIcon={<SaveAltOutlined />}
              sx={{ borderRadius: "20px", marginRight: "8px", color }}
            >
              Save
            </Button>
          </Box>

          {/* Comments Section */}
          {comment && (
            <>
              <Box>
                <MyEditor setContent={setCommentContent} height={100} />
                <Button
                  onClick={handleCreateComment}
                  variant="contained"
                  sx={{
                    // @ts-ignore
                    backgroundColor: theme.palette.neutral.main,
                    float: "right",
                    margin: "1rem",
                    marginTop: 0,
                  }}
                >
                  comment
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </>
  );
};

const createAction = graphql`
  mutation PostCreateActionMutation($input: UserCreateActionInput!) {
    userCreateAction(input: $input) {
      id
      type
      target
      targetType
      createdAt
      updatedAt
    }
  }
`;

export const commentMutation = graphql`
  mutation PostCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
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
  }
`;
