import { Theme } from "@emotion/react";
import {
  ArrowDropDown,
  ArrowDropUp,
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
import { PostListFragment } from "../../routes/home/Home";
import { stringAvatar } from "../../utils/stringAvatar";
import {
  PostCreateActionMutation,
  UserActionType,
} from "./__generated__/PostCreateActionMutation.graphql";

export type PostProps = {
  theme: Theme;
  fragment: PostListFragment;
};

export const Post = ({ theme, fragment }: PostProps) => {
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

  const diffInMinutes =
    Math.abs(new Date().valueOf() - Date.parse(fragment.createdAt)) / 60000;
  const created =
    diffInMinutes >= 60
      ? `${Math.floor(diffInMinutes / 60)} hours ago`
      : `${Math.floor(diffInMinutes)} minutes ago`;

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
        console.log("res :", res);
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

  return (
    <>
      <Paper sx={{ display: "flex", marginBottom: "10px" }}>
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
                {...stringAvatar(fragment.community.name[1])}
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
              {created}
            </Typography>
          </Box>

          {/* MIDDLE */}
          <Box sx={{ padding: "8px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} color={color}>
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

          {/* BOTTOM */}
          <Box sx={{ padding: "8px", display: "flex", alignItems: "center" }}>
            <Button
              variant="text"
              startIcon={<ModeCommentOutlined />}
              sx={{ borderRadius: "20px", marginRight: "8px", color }}
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
