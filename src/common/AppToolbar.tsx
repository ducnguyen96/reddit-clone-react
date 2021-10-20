import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ArrowDropDown, NotificationsNone } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  AppBar,
  AppBarProps,
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Link,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { config } from "../core";
import { useCurrentUser, useLoginDialog, useNavigate } from "../hooks";
import { useSignupDialog } from "../hooks/useSignupDialog";
import { NotificationsMenu, UserMenu } from "../menu";

type AppToolbarProps = AppBarProps & {
  onChangeTheme: () => void;
};

export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const { sx, onChangeTheme, ...other } = props;
  const menuAnchorRef = React.createRef<HTMLButtonElement>();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState({
    userMenu: null as HTMLElement | null,
    notifications: null as HTMLElement | null,
  });

  const loginDialog = useLoginDialog();
  const signupDialog = useSignupDialog();

  const navigate = useNavigate();
  const user = useCurrentUser();

  function openNotificationsMenu() {
    setAnchorEl((x) => ({ ...x, notifications: menuAnchorRef.current }));
  }

  function closeNotificationsMenu() {
    setAnchorEl((x) => ({ ...x, notifications: null }));
  }

  function openUserMenu() {
    setAnchorEl((x) => ({ ...x, userMenu: menuAnchorRef.current }));
  }

  function closeUserMenu() {
    setAnchorEl((x) => ({ ...x, userMenu: null }));
  }

  function signIn(event: React.MouseEvent): void {
    event.preventDefault();
    loginDialog.show();
  }

  function signUp(event: React.MouseEvent): void {
    event.preventDefault();
    signupDialog.show();
  }

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    // @ts-ignore
    borderRadius: theme.shape.borderRadius,
    // @ts-ignore
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      // @ts-ignore
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // @ts-ignore
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    // @ts-ignore,
    [theme.breakpoints.up("sm")]: {
      // @ts-ignore
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    // @ts-ignore
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(OutlinedInput)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      // @ts-ignore
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // @ts-ignore
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      // @ts-ignore
      transition: theme.transitions.create("width"),
      width: "100%",
      // @ts-ignore
      [theme.breakpoints.up("md")]: {
        width: "100ch",
      },
    },
  }));

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...sx,
      }}
      color="default"
      elevation={1}
      {...other}
      position="static"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* App name / logo */}

        <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
          <Link color="inherit" underline="none" href="/" onClick={navigate}>
            {config.app.name}
          </Link>
        </Typography>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Reddit"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* <span style={{ flexGrow: 1 }} /> */}

        {/* Account related controls (icon buttons) */}

        <Box>
          {user && (
            <Chip
              sx={{
                height: 40,
                borderRadius: 20,
                fontWeight: 600,
                backgroundColor: (x) =>
                  x.palette.mode === "light"
                    ? x.palette.grey[300]
                    : x.palette.grey[700],
                ".MuiChip-avatar": { width: 32, height: 32 },
              }}
              component="a"
              avatar={<Avatar alt={user.username || ""} src={""} />}
              label={getFirstName(user.username || "")}
              onClick={navigate}
            />
          )}
          {user && (
            <IconButton
              sx={{
                marginLeft: (x) => x.spacing(1),
                backgroundColor: (x) =>
                  x.palette.mode === "light"
                    ? x.palette.grey[300]
                    : x.palette.grey[700],
                width: 40,
                height: 40,
              }}
              children={<NotificationsNone />}
              onClick={openNotificationsMenu}
            />
          )}
          {user && (
            <IconButton
              ref={menuAnchorRef}
              sx={{
                marginLeft: (x) => x.spacing(1),
                backgroundColor: (x) =>
                  x.palette.mode === "light"
                    ? x.palette.grey[300]
                    : x.palette.grey[700],
                width: 40,
                height: 40,
              }}
              children={<ArrowDropDown />}
              onClick={openUserMenu}
            />
          )}
        </Box>
        {!user && (
          <Box>
            <Button
              variant="outlined"
              href="/auth"
              color="primary"
              onClick={signIn}
              children="Log In"
              sx={{ borderRadius: "1.5rem", width: "6rem", fontWeight: "bold" }}
            />
            <Button
              variant="contained"
              href="/auth"
              color="primary"
              onClick={signUp}
              children="Sign Up"
              sx={{
                borderRadius: "1.5rem",
                width: "6rem",
                marginLeft: "1rem",
                fontWeight: "bold",
              }}
            />
          </Box>
        )}
      </Toolbar>

      {/* Pop-up menus */}

      <NotificationsMenu
        anchorEl={anchorEl.notifications}
        onClose={closeNotificationsMenu}
        PaperProps={{ sx: { marginTop: "8px" } }}
      />
      <UserMenu
        anchorEl={anchorEl.userMenu}
        onClose={closeUserMenu}
        PaperProps={{ sx: { marginTop: "8px" } }}
        onChangeTheme={onChangeTheme}
      />
    </AppBar>
  );
}

function getFirstName(displayName: string): string {
  return displayName && displayName.split(" ")[0];
}
