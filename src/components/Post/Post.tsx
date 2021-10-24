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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostListFragment } from "../../routes/home/Home";
import { stringAvatar } from "../../utils/stringAvatar";

export type PostProps = {
  theme: Theme;
  fragment: PostListFragment;
};

export const Post = ({ theme, fragment }: PostProps) => {
  // @ts-ignore
  const color = theme.palette.neutral.main;
  // @ts-ignore
  const postColor = theme.palette.neutral["800"];

  const diffInMinutes =
    Math.abs(new Date().valueOf() - Date.parse(fragment.createdAt)) / 60000;
  const created =
    diffInMinutes >= 60
      ? `${Math.floor(diffInMinutes / 60)} hours ago`
      : `${Math.floor(diffInMinutes)} minutes ago`;
  return (
    <>
      <Paper sx={{ display: "flex", marginBottom: "10px" }}>
        <Box sx={{ width: "40px" }}>
          <IconButton aria-label="up" sx={{ color }}>
            <ArrowDropUp />
          </IconButton>
          <Typography variant="h4" textAlign={"center"} color={postColor}>
            {fragment.upVotes - fragment.downVotes}
          </Typography>
          <IconButton aria-label="down" sx={{ color }}>
            <ArrowDropDown />
          </IconButton>
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
            <Typography variant="body1" color={postColor}>
              <ReactMarkdown
                children={fragment.content}
                remarkPlugins={[remarkGfm]}
              />
            </Typography>
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
