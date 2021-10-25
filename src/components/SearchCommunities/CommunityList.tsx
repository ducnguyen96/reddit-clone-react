import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useCommunityOnList, useCreateCommunityDialog } from "../../hooks";
import { numberWithCommas } from "../../utils/numberWithCommas";

export type CommunityFragment = {
  readonly id: string;
  readonly name: string;
  readonly numberOfMember: number;
};

export type CommunityListProps = {
  handleOnSelectCommunity: (c: CommunityFragment) => void;
};

export function CommunityList(props: CommunityListProps) {
  const theme = useTheme();

  const communities = useCommunityOnList();

  const [filteredCommunities, setFilteredCommunities] = useState<
    ReadonlyArray<CommunityFragment>
  >([]);

  useEffect(() => {
    if (communities && communities.communities) {
      setFilteredCommunities(communities.communities);
    }
  }, [communities]);

  const [filterValue, setFilterValue] = useState("");

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

  const communityDialog = useCreateCommunityDialog();
  function createCommunity(event: React.MouseEvent): void {
    event.preventDefault();
    communityDialog.show();
  }
  return (
    <>
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
      {filteredCommunities.map((community) => (
        <MenuItem
          key={community.id}
          onClick={() => {
            props.handleOnSelectCommunity(community);
          }}
        >
          <Avatar
            {...{ children: community.name[0].toLowerCase() }}
            sx={{ marginLeft: "8px", width: "25px", height: "25px" }}
          />
          <Box>
            <Typography
              sx={{ marginLeft: "8px", fontWeight: "bold" }}
              variant="h5"
            >
              {`r/${community.name}`}
            </Typography>
            <Typography
              // @ts-ignore
              sx={{ marginLeft: "8px", color: theme.palette.neutral.main }}
              variant="h6"
            >
              {`${numberWithCommas(community.numberOfMember)} members`}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </>
  );
}
