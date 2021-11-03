import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  AddOutlined,
  ArrowDropDown,
  Home,
  KeyboardArrowDownOutlined,
  NotificationsNone,
  Reddit,
  StarOutline,
  TextsmsOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  AppBarProps,
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Link,
  MenuItem,
  OutlinedInput,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { CommunityFragment } from "../components/SearchCommunities/CommunityList";
import { config } from "../core";
import {
  useCommunityOnList,
  useCurrentUser,
  useLoginDialog,
  useNavigate,
} from "../hooks";
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

  const communities = useCommunityOnList();

  const [filteredCommunities, setFilteredCommunities] = React.useState<
    ReadonlyArray<CommunityFragment>
  >([]);

  React.useEffect(() => {
    if (communities && communities.communities) {
      setFilteredCommunities(communities.communities);
    }
  }, [communities]);

  const [filterValue, setFilterValue] = React.useState("");

  const handleOnchangeFilter = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterValue(value);
    setFilteredCommunities(
      communities.communities.filter((c) =>
        c.name.toLowerCase().startsWith(`${value}`.toLowerCase())
      )
    );
  };

  const AppNameLogo = styled(Typography)(({ theme }) => ({
    fontSize: "1.4rem",
    fontWeight: 500,
    // @ts-ignore
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  const UserButtons = styled(Box)(({ theme }) => ({
    // @ts-ignore
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const MyCommunities = styled(Box)(({ theme }) => ({
    // @ts-ignore
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const SearchBox = styled(Box)(({ theme }) => ({
    // @ts-ignore
    [theme.breakpoints.down("md")]: {
      marginLeft: "1rem",
    },
  }));

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...sx,
        position: "fixed",
        top: "0",
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
          minHeight: "3rem !important",
        }}
      >
        {/* App name / logo */}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              backgroundColor: "#FF4500",
              width: "2rem",
              height: "2rem",
              marginRight: ".3125rem",
            }}
          >
            <Reddit sx={{ color: "white" }} />
          </IconButton>
          <AppNameLogo
            sx={{ fontSize: "1.4rem", fontWeight: 500 }}
            variant="h5"
          >
            <Link color="inherit" underline="none" href="/" onClick={navigate}>
              {config.app.name}
            </Link>
          </AppNameLogo>

          {/* My Communities */}
          <MyCommunities sx={{ width: "16.875rem", marginLeft: ".625rem" }}>
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
                  sx={{ fontWeight: "bold", marginLeft: ".5rem" }}
                >
                  Home
                </Typography>
              </Box>
              <KeyboardArrowDownOutlined />
            </Button>

            {/* Communities Menu */}
            <Popover
              id="communitiesMenu"
              anchorEl={communityMenuAnchorEl}
              open={isCommunityMenuOpen}
              onClose={handleCloseCommunityMenu}
              sx={{ top: "2rem", maxHeight: "30.125rem" }}
              PaperProps={{ elevation: 0, style: { borderRadius: 0 } }}
            >
              <OutlinedInput
                placeholder="Filter"
                size="small"
                sx={{
                  borderRadius: 0,
                  height: "1.875rem",
                  margin: "1ren",
                  color: "inherit",
                }}
                autoFocus
                onChange={handleOnchangeFilter}
                value={filterValue}
              />
              <Box
                sx={{
                  padding: "0 1.5rem .5rem",
                  fontSize: ".625rem",
                  fontWeight: "500",
                }}
              >
                MY COMMUNITIES
              </Box>
              <Typography variant="h6"></Typography>
              {filteredCommunities.map((value) => (
                <MenuItem key={value.id}>
                  <Avatar
                    {...{ children: value.name[0] }}
                    sx={{
                      marginLeft: ".5rem",
                      width: "1.5625rem",
                      height: "1.5625rem",
                    }}
                  />
                  <Typography sx={{ marginLeft: ".5rem" }} variant="h4">
                    {`r/${value.name}`}
                  </Typography>
                  <StarOutline sx={{ marginLeft: "auto" }} />
                </MenuItem>
              ))}
            </Popover>
          </MyCommunities>
        </Box>

        <SearchBox
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            maxWidth: "50vw",
          }}
        >
          <SearchIcon sx={{ position: "absolute", marginLeft: ".75rem" }} />
          <OutlinedInput
            placeholder="Search Reddit"
            inputProps={{
              "aria-label": "search",
              style: {
                padding: ".375rem .5rem .375rem 2.8125rem",
                fontSize: ".875rem",
              },
            }}
            sx={{ width: "100%" }}
          />
        </SearchBox>

        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <UserButtons>
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
                children={<TextsmsOutlined />}
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
                sx={{
                  marginLeft: (x) => x.spacing(1),
                  backgroundColor: (x) =>
                    x.palette.mode === "light"
                      ? x.palette.grey[300]
                      : x.palette.grey[700],
                  width: 40,
                  height: 40,
                }}
                children={<AddOutlined />}
                onClick={() => {
                  location.href = "/submit";
                }}
              />
            )}
            {user && (
              <Chip
                sx={{
                  height: 40,
                  borderRadius: 20,
                  fontWeight: 600,
                  marginLeft: ".5rem",
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
          </UserButtons>

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
        PaperProps={{ sx: { marginTop: ".5rem" } }}
      />
      <UserMenu
        anchorEl={anchorEl.userMenu}
        onClose={closeUserMenu}
        PaperProps={{ sx: { marginTop: ".5rem" } }}
        onChangeTheme={onChangeTheme}
      />
    </AppBar>
  );
}

function getFirstName(displayName: string): string {
  return displayName && displayName.split(" ")[0];
}
