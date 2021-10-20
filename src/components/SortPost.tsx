import { Button, Paper } from "@mui/material";
import { AcUnit, AddRoad, Height, PlusOne } from "@mui/icons-material";
import { Theme } from "@emotion/react";

export type SortPostProps = {
  theme: Theme;
};

export const SortPost = (props: SortPostProps) => {
  // @ts-ignore
  const color = props.theme.palette.neutral.main;
  // console.log("theme :", theme.palette.neutral.main);
  return (
    <>
      <Paper sx={{ padding: "10px 12px", marginBottom: "16px" }}>
        <Button
          variant="outlined"
          startIcon={<AcUnit />}
          sx={{ borderRadius: "20px", marginRight: "8px" }}
        >
          Best
        </Button>
        <Button
          variant="outlined"
          startIcon={<AddRoad />}
          sx={{
            borderRadius: "20px",
            marginRight: "8px",
            color,
            border: "none",
          }}
        >
          Hot
        </Button>
        <Button
          variant="outlined"
          startIcon={<PlusOne />}
          sx={{
            borderRadius: "20px",
            marginRight: "8px",
            color,
            border: "none",
          }}
        >
          New
        </Button>
        <Button
          variant="outlined"
          startIcon={<Height />}
          sx={{
            borderRadius: "20px",
            marginRight: "8px",
            color,
            border: "none",
          }}
        >
          Top
        </Button>
      </Paper>
    </>
  );
};
