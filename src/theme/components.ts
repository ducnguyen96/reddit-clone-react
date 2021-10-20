import { ThemeOptions } from "@mui/material";

/**
 * Style overrides for Material UI components.
 */

export const createComponentThemeOptions = (
  mode: string
): ThemeOptions["components"] => {
  return {
    // https://github.com/mui-org/material-ui/tree/next/packages/material-ui/src/Button
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    // https://github.com/mui-org/material-ui/tree/next/packages/material-ui/src/ButtonGroup
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          backgroundColor: mode == "dark" ? "#1A1A1B" : "#fff",
        },
      },
    },
  };
};
