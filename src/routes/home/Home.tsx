import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { CreatePostHome } from "../../components/CreatePostHome/CreatePostHome";
import { Post } from "../../components/Post/Post";
import { SortPost } from "../../components/SortPost/SortPost";
import { TopNewCommunities } from "../../components/TopNewCommunities/TopNewCommunities";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

export default function Home(props: Props): JSX.Element {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{ margin: "20px 24px", display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: "640px" }}>
          <CreatePostHome username={props.me?.username || ""} />
          <SortPost theme={theme} />
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
            <Post theme={theme} key={key} />
          ))}
        </Box>
        <Box sx={{ width: "310px", marginLeft: "24px" }}>
          <TopNewCommunities />
        </Box>
      </Box>
    </>
  );
}
