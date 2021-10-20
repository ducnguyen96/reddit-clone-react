import { Avatar, IconButton, Paper, TextField } from "@mui/material";
import { stringAvatar } from "../utils/stringAvatar";
import { Image, Link } from "@mui/icons-material";

export const CreatePostHome = () => {
  return (
    <>
      <Paper
        sx={{
          padding: "8px",
          display: "flex",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Avatar {...stringAvatar("Kent Dodds")} />
        <TextField
          label="Create Post"
          id="outlined-size-small"
          size="small"
          fullWidth
          sx={{ marginLeft: "8px" }}
        />
        <IconButton aria-label="image">
          <Image />
        </IconButton>
        <IconButton aria-label="link">
          <Link />
        </IconButton>
      </Paper>
    </>
  );
};
