import { Box } from "@mui/material";
import { CreatePostHome } from "../../components/CreatePostHome";
import { Post } from "../../components/Post";
import { SortPost } from "../../components/SortPost";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

export default function Home(props: Props): JSX.Element {
  return (
    <>
      <Box
        sx={{ margin: "20px 24px", display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: "640px" }}>
          <CreatePostHome />
          <SortPost />
          <Post />
        </Box>
        <Box sx={{ width: "312px", marginLeft: "24px" }}>Right</Box>
      </Box>
    </>
  );
}
