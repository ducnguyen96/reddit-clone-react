import { ExpandLessOutlined } from "@mui/icons-material";
import { Typography, Avatar, ListItem } from "@mui/material";

export type ListItemProps = {
  index: string;
  value: string;
};

export const Item = (props: ListItemProps) => {
  return (
    <ListItem button>
      <Typography sx={{ marginLeft: ".5rem" }} variant="h4">
        {props.index}
      </Typography>
      <ExpandLessOutlined sx={{ marginLeft: "8px", color: "#46D160" }} />
      <Avatar
        {...{ children: props.value[3] }}
        sx={{ marginLeft: "8px", width: "35px", height: "35px" }}
      />
      <Typography sx={{ marginLeft: "8px" }} variant="h4">
        {props.value}
      </Typography>
    </ListItem>
  );
};
