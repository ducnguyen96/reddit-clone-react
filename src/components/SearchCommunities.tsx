import {
  CircleOutlined,
  Home,
  KeyboardArrowDownOutlined,
  StarOutline,
} from "@mui/icons-material";
import {
  Button,
  Typography,
  Menu,
  OutlinedInput,
  MenuItem,
  Avatar,
  Box,
  Paper,
  Popover,
} from "@mui/material";
import * as React from "react";

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
        PaperProps={{ elevation: 0 }}
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
            padding: "0px 24px 8px",
            fontSize: "10px",
            fontWeight: "500",
          }}
        >
          MY COMMUNITIES
        </Box>
        <Typography variant="h6"></Typography>
        {filteredCommunities.map((value, key) => (
          <MenuItem key={key}>
            <Avatar
              {...{ children: value[2].toLowerCase() }}
              sx={{ marginLeft: "8px", width: "25px", height: "25px" }}
            />
            <Typography sx={{ marginLeft: "8px" }} variant="h4">
              {value}
            </Typography>
          </MenuItem>
        ))}
      </Popover>
    </Paper>
  );
};
