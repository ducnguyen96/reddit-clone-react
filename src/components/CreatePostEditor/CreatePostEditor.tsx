import { useTheme } from "@emotion/react";
import {
  ImageOutlined,
  LinkOutlined,
  PollOutlined,
  PostAddOutlined,
} from "@mui/icons-material";
import { Box, Button, OutlinedInput, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { MyEditor } from "../../editor/MyEditor";
import { ValidatePostTitle } from "./Validate";

export type CreatePostEditorProps = {
  setPostContent: React.Dispatch<React.SetStateAction<string>>;
  handleCreatePost: () => void;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const CreatePostEditor = ({
  setPostContent,
  handleCreatePost,
  title,
  setTitle,
}: CreatePostEditorProps) => {
  const theme = useTheme();
  const [activeButton, setActiveButton] = useState("post");
  const [titleLength, setTitleLength] = useState(0);

  const buttonColor = (buttonType: string) => {
    return buttonType == activeButton
      ? {
          // @ts-ignore
          color: theme.palette.createPostButtonActive.main,
          // @ts-ignore
          borderBottom: `2px solid ${theme.palette.createPostButtonActive.main}`,
        }
      : {
          color: "#878A8C",
          borderBottom: "1px solid #969696",
        };
  };

  const handleOnChangeTitle = (e: any) => {
    e.preventDefault();
    const value: string = e.target.value;
    const length = value.length;

    if (length <= 300) {
      setTitle(e.target.value);
      setTitleLength(length);
    }
  };

  const [onBlur, setOnBlur] = useState(false);
  const handleOnBlurTitle = () => {
    setOnBlur(true);
  };

  return (
    <>
      <Paper>
        {/* TOP */}
        <Paper>
          <Button
            variant="outlined"
            startIcon={<PostAddOutlined />}
            sx={{
              border: "none",
              width: "25%",
              fontWeight: "bold",
              borderRadius: "0px",
              height: "45px",
              borderRight: "1px solid #969696",
              ...buttonColor("post"),
            }}
            onClick={() => setActiveButton("post")}
          >
            Post
          </Button>
          <Button
            variant="outlined"
            startIcon={<ImageOutlined />}
            sx={{
              border: "none",
              width: "25%",
              fontWeight: "bold",
              borderRadius: "0px",
              height: "45px",
              borderRight: "1px solid #969696",
              ...buttonColor("Image & Video"),
            }}
            onClick={() => setActiveButton("Image & Video")}
          >
            {"Image & Video"}
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkOutlined />}
            sx={{
              border: "none",
              width: "25%",
              fontWeight: "bold",
              borderRadius: "0px",
              height: "45px",
              borderRight: "1px solid #969696",
              ...buttonColor("Link"),
            }}
            onClick={() => setActiveButton("Link")}
            disabled
          >
            Link
          </Button>
          <Button
            variant="outlined"
            startIcon={<PollOutlined />}
            sx={{
              border: "none",
              width: "25%",
              fontWeight: "bold",
              borderRadius: "0px",
              height: "45px",
              ...buttonColor("Poll"),
            }}
            onClick={() => setActiveButton("Poll")}
            disabled
          >
            Poll
          </Button>
        </Paper>

        {/* Middle */}
        <Paper sx={{ padding: "15px", position: "relative" }}>
          <OutlinedInput
            placeholder="Title"
            fullWidth
            size="small"
            sx={{
              height: "35px",
              // @ts-ignore
              color: theme.palette.text.secondary,
              marginBottom: "15px",
              paddingRight: "45px",
            }}
            value={title}
            onChange={handleOnChangeTitle}
            onBlur={handleOnBlurTitle}
            onFocus={() => setOnBlur(false)}
          />
          {onBlur && <ValidatePostTitle />}
          <Typography
            sx={{
              position: "absolute",
              top: "25px",
              right: "25px",
              color: "#969696",
              fontWeight: "bold",
            }}
            variant="h5"
          >
            {`${titleLength}/300`}
          </Typography>

          {/* MY EDITOR */}

          <MyEditor setPostContent={setPostContent} />

          {/* MY EDITOR */}
          <Box
            sx={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
          >
            <Button
              onClick={() => {
                location.href = "/";
              }}
              sx={{
                // @ts-ignore
                color: theme.palette.text.secondary,
                // @ts-ignore
                borderColor: theme.palette.text.secondary,
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreatePost}
              variant="contained"
              sx={{
                // @ts-ignore
                backgroundColor: theme.palette.neutral.main,
                marginLeft: "1rem",
              }}
            >
              Post
            </Button>
          </Box>
        </Paper>
      </Paper>
    </>
  );
};
