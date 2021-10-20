import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";

export const Post = () => {
  return (
    <>
      <Paper sx={{ display: "flex" }}>
        <Paper elevation={0} sx={{ width: "40px" }}>
          <IconButton aria-label="up">
            <ArrowDropUp />
          </IconButton>
          <Typography variant="h4" textAlign={"center"}>
            5
          </Typography>
          <IconButton aria-label="down">
            <ArrowDropDown />
          </IconButton>
        </Paper>
        <Paper elevation={1} sx={{ width: "100%" }}>
          Right
        </Paper>
      </Paper>
    </>
  );
};
