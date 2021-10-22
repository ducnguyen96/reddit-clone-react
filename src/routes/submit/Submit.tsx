import { Box, Divider, Typography } from "@mui/material";
import { CreatePostEditor } from "../../components/CreatePostEditor/CreatePostEditor";
import { SearchCommunities } from "../../components/SearchCommunities/SearchCommunities";

export default function Submit(): JSX.Element {
  return (
    <>
      <Box
        sx={{
          margin: "40px 24px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "740px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", paddingBottom: "24px" }}
          >
            Create a post
          </Typography>
          <Divider />
          <SearchCommunities />
          <CreatePostEditor />
        </Box>
        <Box sx={{ width: "312px", marginLeft: "24px" }}></Box>
      </Box>
    </>
  );
}
