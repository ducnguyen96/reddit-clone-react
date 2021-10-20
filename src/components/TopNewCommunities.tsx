import { ExpandLessOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { stringAvatar } from "../utils/stringAvatar";

export const TopNewCommunities = () => {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    padding: 0,
  };
  return (
    <>
      <Paper elevation={0}>
        <Box
          sx={{
            position: "relative",
            background: `linear-gradient(180deg, rgba(0,0,0,0), #00000075), url("https://i.stack.imgur.com/IuWLZ.jpg")`,
            backgroundPosition: "center",
            width: "310px",
            height: "100px",
          }}
        >
          <h3
            style={{
              bottom: "0",
              position: "absolute",
              color: "whitesmoke",
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            Top News Communities
          </h3>
        </Box>
        <List sx={style} component="nav" aria-label="top new communities">
          {[
            "r/worldnews",
            "r/UpliftingNews",
            "r/nottheonion",
            "r/technews",
            "r/offbeat",
          ].map((value, key) => (
            <>
              <ListItem button key={key}>
                <Typography sx={{ marginLeft: "10px" }} variant="h4">
                  {key + 1}
                </Typography>
                <ExpandLessOutlined
                  sx={{ marginLeft: "8px", color: "#46D160" }}
                />
                <Avatar
                  {...{ children: value[3] }}
                  sx={{ marginLeft: "8px", width: "35px", height: "35px" }}
                />
                <Typography sx={{ marginLeft: "8px" }} variant="h4">
                  {value}
                </Typography>
              </ListItem>
              {key != 4 && <Divider />}
            </>
          ))}
        </List>
        <Box sx={{ margin: "15px", paddingBottom: "15px" }}>
          <Button
            variant="contained"
            sx={{ width: "100%", borderRadius: "20px", fontWeight: "bold" }}
          >
            View All
          </Button>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                color: "inherit",
                backgroundColor: "grey.500",
                minWidth: "unset",
              }}
              size="small"
            >
              Top
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                color: "inherit",
                backgroundColor: "grey.500",
                minWidth: "unset",
                marginLeft: "5px",
              }}
              size="small"
            >
              Near You
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                color: "inherit",
                backgroundColor: "grey.500",
                minWidth: "unset",
                marginLeft: "5px",
              }}
              size="small"
            >
              Gaming
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                color: "inherit",
                backgroundColor: "grey.500",
                minWidth: "unset",
                marginLeft: "5px",
              }}
              size="small"
            >
              Sports
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
