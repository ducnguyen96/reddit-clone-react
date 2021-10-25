import { Box, Button, Divider, List, Paper } from "@mui/material";
import { Item } from "./Item";

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
          <Item index="1" value="r/worldnews" key={1} />
          <Divider />
          <Item index="2" value="r/UpliftingNews" key={2} />
          <Divider />
          <Item index="3" value="r/nottheonion" key={3} />
          <Divider />
          <Item index="4" value="r/technews" key={4} />
          <Divider />
          <Item index="5" value="r/offbeat" key={5} />
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
