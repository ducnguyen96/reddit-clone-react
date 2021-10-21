import { useTheme } from "@emotion/react";
import { CircleOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import {
  Button,
  Typography,
  OutlinedInput,
  MenuItem,
  Avatar,
  Box,
  Paper,
  Popover,
} from "@mui/material";
import * as React from "react";
import { useCreateCommunityDialog } from "../hooks/useCreateCommunityDialog";

export const SearchCommunities = () => {
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

  const communities = [
    "r/worldnews",
    "r/UpliftingNews",
    "r/nottheonion",
    "r/technews",
    "r/offbeat",
  ];

  const [filteredCommunities, setFilteredCommunities] =
    React.useState(communities);

  const [filterValue, setFilterValue] = React.useState("");
  const handleOnchangeFilter = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    setFilterValue(value);
    setFilteredCommunities(
      communities.filter((c) =>
        c.toLowerCase().startsWith(`r/${value}`.toLowerCase())
      )
    );
  };

  const theme = useTheme();

  const communityDialog = useCreateCommunityDialog();
  function createCommunity(event: React.MouseEvent): void {
    event.preventDefault();
    communityDialog.show();
  }

  return (
    <Paper sx={{ width: "270px" }} elevation={0}>
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
          padding: "0 6px",
          height: "40px",
          margin: "10px 0 10px 0",
        }}
        onClick={handleClickOpenCommunityMenu}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CircleOutlined />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginLeft: "8px" }}
          >
            Choose a community
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
        // MenuListProps={{
        //   style: {
        //     padding: 0,
        //     width: "270px",
        //     maxWidth: "100",
        //     maxHeight: "482px",
        //   },
        // }}
        sx={{ top: "38px" }}
        PaperProps={{ elevation: 1 }}
      >
        <OutlinedInput
          placeholder="Filter"
          size="small"
          sx={{
            borderRadius: 0,
            height: "30px",
            margin: "17.5px",
            color: "inherit",
          }}
          value={filterValue}
          onChange={handleOnchangeFilter}
          autoFocus
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              padding: "0px 24px 0px",
              fontSize: "10px",
              fontWeight: "bold",
              // @ts-ignore
              color: theme.palette.neutral.main,
              textAlign: "center",
            }}
          >
            MY COMMUNITIES
          </Typography>
          <Button
            variant="text"
            sx={{ borderRadius: "10px", fontWeight: "bold", fontSize: "small" }}
            onClick={createCommunity}
          >
            Create New
          </Button>
        </Box>
        <Typography variant="h6"></Typography>
        {filteredCommunities.map((value, key) => (
          <MenuItem key={key}>
            <Avatar
              {...{ children: value[2].toLowerCase() }}
              sx={{ marginLeft: "8px", width: "25px", height: "25px" }}
            />
            <Box>
              <Typography
                sx={{ marginLeft: "8px", fontWeight: "bold" }}
                variant="h5"
              >
                {value}
              </Typography>
              <Typography
                // @ts-ignore
                sx={{ marginLeft: "8px", color: theme.palette.neutral.main }}
                variant="h6"
              >
                {"196.000 members"}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Popover>
    </Paper>
  );
};
