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
import { stringAvatar } from "../../utils/stringAvatar";

export type PostProps = {
  theme: Theme;
};

export const Post = (props: PostProps) => {
  // @ts-ignore
  const color = props.theme.palette.neutral.main;
  // @ts-ignore
  const postColor = props.theme.palette.neutral["800"];
  const md = `Hi. Sorry if it was mentioned before - was unable to find an answer. I'm just starting with Docker and find it fascinating. The below question is strictly for home lab experimentation but I always like to know how it should be done properly.

  Lets say I have 4 containers. 3 random services and a reverse proxy. I would like for the services to be able to talk to the proxy container but not to each other.
  
  Do I set up a separate network for all 3 of the service containers and join the reverse proxy container to those networks or is there more elegant solution that I'm missing? I know the 3 network solution would work but it seems like there would be a better solution or do I overthink things?`;
  return (
    <>
      <Paper sx={{ display: "flex", marginBottom: "10px" }}>
        <Box sx={{ width: "40px" }}>
          <IconButton aria-label="up" sx={{ color }}>
            <ArrowDropUp />
          </IconButton>
          <Typography variant="h4" textAlign={"center"} color={postColor}>
            5
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
                {...stringAvatar("R")}
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
              r/docker
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
              u/ducnguyen96
            </Link>
            <Typography variant="h5" marginLeft={"5px"} color={color}>
              3 hours ago
            </Typography>
          </Box>

          {/* MIDDLE */}
          <Box sx={{ padding: "8px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }} color={color}>
              Docker networks and container separation.
            </Typography>
            <Typography variant="body1" color={postColor}>
              <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} />
            </Typography>
          </Box>

          {/* BOTTOM */}
          <Box sx={{ padding: "8px", display: "flex", alignItems: "center" }}>
            <Button
              variant="text"
              startIcon={<ModeCommentOutlined />}
              sx={{ borderRadius: "20px", marginRight: "8px", color }}
            >
              8 comments
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
