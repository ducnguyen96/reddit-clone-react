import {
  ModeCommentOutlined,
  RedeemOutlined,
  ShareOutlined,
  SaveAltOutlined,
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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MyEditor } from "../../editor/MyEditor";
import { stringAvatar } from "../../utils/stringAvatar";
import { Theme } from "@emotion/react";
import { CommentWithFragment } from "../../dialogs/ViewPostDialog";
import { getCreatedAt } from "../../utils/createdAt";
import { useState } from "react";
import {
  CreateCommentInput,
  PostCommentMutation,
} from "../Post/__generated__/PostCommentMutation.graphql";
import { commitMutation } from "relay-runtime";
import { commentMutation } from "../Post/Post";
import { useRelayEnvironment } from "react-relay";
export type CommentProps = {
  theme: Theme;
  main: CommentWithFragment;
  sx?: any;
  handleUpdateCommentList?: () => void;
};
export const Comment = ({
  theme,
  main,
  sx,
  handleUpdateCommentList,
}: CommentProps) => {
  // @ts-ignore
  const color = theme.palette.neutral.main;

  const [editor, setEditor] = useState(false);

  const [commentContent, setCommentContent] = useState("");

  const environment = useRelayEnvironment();
  const handleCreateComment = () => {
    const input: CreateCommentInput = {
      content: commentContent,
      contentMode: "MarkDown",
      postID: main.postID,
      parentID: main.id,
    };

    // submit mutation
    return commitMutation<PostCommentMutation>(environment, {
      mutation: commentMutation,
      variables: { input },
      onCompleted: (res) => {
        console.log("res :", res);
        setEditor(false);
        if (!!handleUpdateCommentList) {
          handleUpdateCommentList();
        }
      },
    });
  };
  return (
    <>
      <Paper sx={{ display: "flex", width: "100%", ...sx }} elevation={0}>
        {/* LEFT */}
        <Box sx={{ width: "40px" }}>
          <IconButton
            aria-label="community"
            color="primary"
            sx={{ paddingTop: 0 }}
          >
            <Avatar
              {...stringAvatar(main.owner.username[0])}
              sx={{ width: "30px", height: "30px", fontSize: "small" }}
              sizes="small"
            />
          </IconButton>
          <Box
            sx={{
              height: "calc(100% - 46px)",
              display: "flex",
              justifyContent: "center",
              width: "46px",
            }}
          >
            <span
              style={{
                height: "100%",
                border: `1px solid ${color}`,
                width: "1px",
              }}
            >
              &nbsp;
            </span>
          </Box>
        </Box>

        {/* RIGHT */}
        <Box sx={{ width: "100%", margin: ".2rem" }}>
          {/* TOP */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href="#"
              underline="none"
              color="inherit"
              sx={{ fontWeight: "bold" }}
              variant="h5"
            >
              {main.owner.username}
            </Link>
            <Typography variant="h5" marginLeft={"5px"} color={color}>
              {getCreatedAt(main.createdAt)}
            </Typography>
          </Box>

          {/* MIDDLE */}
          <Box sx={{ padding: "8px" }}>
            <ReactMarkdown
              children={main.content}
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
              onClick={() => {
                setEditor(!editor);
              }}
            >
              Reply
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
          {editor && (
            <>
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
                  height: "1.6rem",
                }}
              >
                comment
              </Button>
            </>
          )}
          {main.replies.map((r, index) => (
            <Comment
              main={r}
              theme={theme}
              key={index}
              handleUpdateCommentList={handleUpdateCommentList}
            />
          ))}
        </Box>
      </Paper>
    </>
  );
};
