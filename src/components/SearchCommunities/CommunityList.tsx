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

type CommunityFragments = ReadonlyArray<{
  readonly id: string;
  readonly name: string;
  readonly numberOfMember: number;
}>;

export function CommunityList(props: any) {
  const theme = useTheme();

  const communities = useCommunityOnList();

  // const [communities, setCommunities] = useState<CommunityOnList>({
  //   " $refType": "CommunityOnList",
  //   communities: [
  //     {
  //       id: "1",
  //       name: "anime",
  //       numberOfMember: 190000,
  //     },
  //     {
  //       id: "2",
  //       name: "piano",
  //       numberOfMember: 210000,
  //     },
  //     {
  //       id: "3",
  //       name: "game",
  //       numberOfMember: 123456,
  //     },
  //   ],
  //   currentPage: 1,
  //   length: 3,
  // });

  const [filteredCommunities, setFilteredCommunities] =
    useState<CommunityFragments>([]);

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
      {filteredCommunities.map((value) => (
        <MenuItem key={value.id}>
          <Avatar
            {...{ children: value.name[2].toLowerCase() }}
            sx={{ marginLeft: "8px", width: "25px", height: "25px" }}
          />
          <Box>
            <Typography
              sx={{ marginLeft: "8px", fontWeight: "bold" }}
              variant="h5"
            >
              {`r/${value.name}`}
            </Typography>
            <Typography
              // @ts-ignore
              sx={{ marginLeft: "8px", color: theme.palette.neutral.main }}
              variant="h6"
            >
              {`${numberWithCommas(value.numberOfMember)} members`}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </>
  );
}
