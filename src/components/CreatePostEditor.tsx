import { useTheme } from "@emotion/react";
import {
  ImageOutlined,
  LinkOutlined,
  PollOutlined,
  PostAddOutlined,
} from "@mui/icons-material";
import { Button, OutlinedInput, Paper, Typography } from "@mui/material";
import { useState } from "react";

export const CreatePostEditor = () => {
  const theme = useTheme();
  // @ts-ignore
  const mode = theme.palette.mode;
  const [activeButton, setActiveButton] = useState("post");
  const [title, setTitle] = useState("");
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
              color: "inherit",
            }}
            value={title}
            onChange={handleOnChangeTitle}
          />
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
        </Paper>
      </Paper>
    </>
  );
};
