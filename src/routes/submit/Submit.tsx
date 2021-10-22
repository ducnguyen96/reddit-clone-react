import { Box, Divider, Typography } from "@mui/material";
import { CreatePostEditor } from "../../components/CreatePostEditor/CreatePostEditor";
import { SearchCommunities } from "../../components/SearchCommunities/SearchCommunities";
import { useHistory, useLoginDialog } from "../../hooks";
import { submitQueryResponse } from "./__generated__/submitQuery.graphql";

export default function Submit(props: submitQueryResponse): JSX.Element {
  if (!props.me) {
    const history = useHistory();
    history.push("/");
    const loginDialog = useLoginDialog();
    loginDialog.show();
  }
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
