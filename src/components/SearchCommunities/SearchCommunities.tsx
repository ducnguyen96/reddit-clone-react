import { CircleOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Button, Typography, Box, Paper, Popover, Avatar } from "@mui/material";
import * as React from "react";
import { CommunityFragment, CommunityList } from "./CommunityList";

export type SearchCommunitiesProp = {
  selectedCommunity: CommunityFragment | null;
  setSelectedCommunity: React.Dispatch<
    React.SetStateAction<CommunityFragment | null>
  >;
};

export const SearchCommunities = ({
  selectedCommunity,
  setSelectedCommunity,
}: SearchCommunitiesProp) => {
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

  const handleOnSelectCommunity = (c: CommunityFragment) => {
    setSelectedCommunity(c);
    handleCloseCommunityMenu();
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
          {selectedCommunity ? (
            <>
              <Avatar
                {...{ children: selectedCommunity.name[2].toLowerCase() }}
                sx={{ marginLeft: "8px", width: "25px", height: "25px" }}
              />
              <Typography
                sx={{ marginLeft: "8px", fontWeight: "bold" }}
                variant="h4"
              >
                {`r/${selectedCommunity.name}`}
              </Typography>
            </>
          ) : (
            <>
              <CircleOutlined />
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginLeft: "8px" }}
              >
                Choose a community
              </Typography>
            </>
          )}
        </Box>
        <KeyboardArrowDownOutlined />
      </Button>

      {/* Communities Menu */}
      <Popover
        id="communitiesMenu"
        anchorEl={communityMenuAnchorEl}
        open={isCommunityMenuOpen}
        onClose={handleCloseCommunityMenu}
        sx={{ top: "38px", maxHeight: "482px", padding: 0 }}
        PaperProps={{ elevation: 1 }}
      >
        <CommunityList handleOnSelectCommunity={handleOnSelectCommunity} />
      </Popover>
    </Paper>
  );
};
