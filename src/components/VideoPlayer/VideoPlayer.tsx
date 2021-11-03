import { Box, Paper } from "@mui/material";
import ReactPlayer from "react-player";
import { mediaServer } from "../../config";

export type VideoPlayerProps = {
  fragmentContent: string;
};

export default function VideoPlayer({
  fragmentContent,
}: VideoPlayerProps): JSX.Element {
  const id = fragmentContent.split("/")[3];
  const url = `${mediaServer.origin}/dash/${id}/${id}`;

  return (
    // Render a YouTube video player
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ReactPlayer
        url={url}
        config={{
          file: { forceDASH: true },
        }}
        controls={true}
        width={"100%"}
        height={"unset"}
      />
    </Box>
  );
}
