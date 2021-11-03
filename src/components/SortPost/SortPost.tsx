import { Button, Paper } from "@mui/material";
import { AcUnit, AddRoad, Height, PlusOne } from "@mui/icons-material";
import { Theme } from "@emotion/react";
import { SortPostEnum } from "../../graphql/types";

export type SortPostProps = {
  theme: Theme;
  handleChangeSort: (newSort: SortPostEnum) => void;
  currentSort: SortPostEnum;
};

export const SortPost = ({
  theme,
  handleChangeSort,
  currentSort,
}: SortPostProps) => {
  // @ts-ignore
  const color = theme.palette.neutral.main;
  // console.log("theme :", theme.palette.neutral.main);

  const getSX = (e: SortPostEnum) => {
    return e === currentSort
      ? {}
      : {
          color,
          border: "none",
        };
  };

  const getIcon = (e: SortPostEnum) => {
    switch (e) {
      case SortPostEnum.Best:
        return <AcUnit />;
      case SortPostEnum.Hot:
        return <AddRoad />;
      case SortPostEnum.New:
        return <PlusOne />;
      default:
        return <Height />;
    }
  };

  const StyledButton = (e: SortPostEnum) => {
    return (
      <Button
        variant="outlined"
        sx={{
          borderRadius: "20px",
          marginRight: "8px",
          ...getSX(e),
        }}
        startIcon={getIcon(e)}
        onClick={() => handleChangeSort(e)}
      >
        {e}
      </Button>
    );
  };

  return (
    <>
      <Paper sx={{ padding: "10px 12px", marginBottom: "16px" }}>
        {StyledButton(SortPostEnum.Best)}
        {StyledButton(SortPostEnum.Hot)}
        {StyledButton(SortPostEnum.New)}
        {/* {StyledButton(SortPostEnum.Top)} */}
      </Paper>
    </>
  );
};
