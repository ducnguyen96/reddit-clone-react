import { Paper } from "@mui/material";
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
    <>
      <Paper
        sx={{
          position: "relative",
          width: "580px",
          height: "326px",
        }}
      >
        <ReactPlayer
          url={url}
          config={{
            file: { forceDASH: true },
          }}
          style={{}}
          width={"580px"}
          height={"326px"}
          controls={true}
        />
      </Paper>
    </>
  );
}
