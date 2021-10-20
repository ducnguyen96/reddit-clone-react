import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ArrowDropDown,
  ContentCopy,
  ContentCut,
  ContentPaste,
  Home,
  KeyboardArrowDownOutlined,
  NotificationsNone,
} from "@mui/icons-material";
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
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Paper,
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
  // @ts-ignore
  const mode: string = theme.palette.mode;

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

  // Communities Drop Menu
  const [communityMenuAnchorEl, setCommunityMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isCommunityMenuOpen = Boolean(communityMenuAnchorEl);
  const handleClickOpenCommunityMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCommunityMenuAnchorEl(event.currentTarget);
  };
  const handleCloseCommunityMenu = () => {
    setCommunityMenuAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...sx,
      }}
      color="default"
      elevation={0}
      {...other}
      position="static"
    >
      <Toolbar
        sx={{
          display: "flex",
          backgroundColor: mode == "light" ? "white" : "#121212",
        }}
      >
        {/* App name / logo */}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h1" sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
            <Link color="inherit" underline="none" href="/" onClick={navigate}>
              {config.app.name}
            </Link>
          </Typography>
          <Box sx={{ width: "270px", marginLeft: "10px" }}>
            {/* Button to activate menu */}
            <Button
              variant="text"
              sx={{
                width: "100%",
                color: "inherit",
                backgroundColor: "inherit",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={handleClickOpenCommunityMenu}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Home />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", marginLeft: "8px" }}
                >
                  Home
                </Typography>
              </Box>
              <KeyboardArrowDownOutlined />
            </Button>

            {/* Menu */}
            <Menu
              id="communitiesMenu"
              anchorEl={communityMenuAnchorEl}
              open={isCommunityMenuOpen}
              onClose={handleCloseCommunityMenu}
              MenuListProps={{
                style: {
                  padding: 0,
                  width: "270px",
                  maxWidth: "100",
                },
              }}
              PaperProps={{ elevation: 0 }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2">⌘X</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘V
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

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

        <Box sx={{ marginLeft: "auto" }}>
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
