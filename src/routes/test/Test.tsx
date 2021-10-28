import {
  PlayCircleFilledRounded,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";
import {
  Box,
  Fade,
  IconButton,
  LinearProgress,
  Paper,
  Slider,
  Stack,
} from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Test(): JSX.Element {
  const [volume, setVolume] = useState(30);
  const [playing, setPlaying] = useState(false);
  const [fade, setFade] = useState(false);

  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(0);

  const handleChangeVolume = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };
  return (
    // Render a YouTube video player
    <>
      <Paper
        sx={{
          position: "relative",
          margin: "100px",
          width: "580px",
          height: "326px",
        }}
        onMouseEnter={() => setFade(true)}
        onMouseLeave={() => setFade(false)}
      >
        <ReactPlayer
          url="https://videos.ducnguyen96.xyz/dash/video.mp4"
          config={{
            file: { forceDASH: true, forceAudio: true, forceVideo: true },
          }}
          style={{}}
          playing={playing}
          width={"580px"}
          height={"326px"}
          volume={volume * 0.01}
          onProgress={(e) => {
            console.log("e :", e);
            setProgress((e.playedSeconds / 309) * 100);
            setBuffer((e.loadedSeconds / 309) * 100);
          }}
        />
        <Fade in={fade} timeout={1000}>
          <Stack
            direction="row"
            sx={{
              position: "absolute",
              // margin: "1rem",
              bottom: "0",
              width: "100%",
            }}
            alignItems="center"
          >
            <IconButton
              aria-label="play"
              color="info"
              onClick={() => setPlaying(!playing)}
            >
              <PlayCircleFilledRounded />
            </IconButton>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="buffer"
                value={progress}
                valueBuffer={buffer}
              />
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{ width: "150px" }}
              alignItems="center"
            >
              <VolumeDown color="primary" />
              <Slider
                aria-label="Volume-Down"
                value={volume}
                onChange={handleChangeVolume}
              />
              <VolumeUp aria-label="Volume-Up" color="info" />
            </Stack>
          </Stack>
        </Fade>
      </Paper>
    </>
  );
}
