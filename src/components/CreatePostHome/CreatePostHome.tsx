import { Avatar, IconButton, OutlinedInput, Paper } from "@mui/material";
import { stringAvatar } from "../../utils/stringAvatar";
import { Image, Link } from "@mui/icons-material";
import { useLoginDialog } from "../../hooks";

export type CreatePostHomeProps = {
  username: string;
};

export const CreatePostHome = (props: CreatePostHomeProps) => {
  const loginDialog = useLoginDialog();
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
        <Avatar {...stringAvatar(props.username || "U")} />
        <OutlinedInput
          placeholder="Create Post"
          fullWidth
          size="small"
          sx={{
            height: "35px",
            color: "inherit",
            marginLeft: "10px",
          }}
          onClick={() => {
            if (!!props.username) {
              location.href = "/submit";
            } else {
              return loginDialog.show();
            }
          }}
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
