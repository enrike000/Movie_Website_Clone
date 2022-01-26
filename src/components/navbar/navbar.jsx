import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Icon, Stack, Typography } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ChildCareIcon from "@mui/icons-material/ChildCare";
const categories = [
  { name: "TV", icon: <LiveTvIcon /> },
  { name: "ფილმები", icon: <MovieIcon /> },
  { name: "სერიალები", icon: <LocalMoviesIcon /> },
  { name: "საბავშვო", icon: <ChildCareIcon /> },
];

const ResponsiveAppBar = () => {
  return (
    <>
      <Stack
        sx={{ justifyContent: "space-around", mt: 2, mb: 2 }}
        direction="row"
        spacing={2}
      >
        <Box>
          <img
            className="ajrlogo"
            src="https://api.adjaranet.com/img/adjaranet-logo.svg"
            alt="logo"
          />
        </Box>
        <Box>
          <Stack
            sx={{ justifyContent: "space-around" }}
            direction="row"
            spacing={2}
          >
            {categories.map((name) => (
              <Stack
                direction="column"
                justifyContent="center"
                spacing={0.5}
                alignItems="center"
              >
                <Button>
                  <Typography>{name.name}</Typography>
                </Button>

                <Icon>{name.icon}</Icon>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Box sx={{ display: "flex", gap: "15px" }}>
          <Button
            to="/login"
            variant="outlined"
            sx={{
              height: "40%",
              "&:hover": {
                backgroundColor: "#f1f2f5",
              },
            }}
          >
            შესვლა
          </Button>
          <Button sx={{ height: "40%" }} to="/register" variant="contained">
            რეგისტრაცია
          </Button>
        </Box>
      </Stack>
    </>
  );
};
export default ResponsiveAppBar;
