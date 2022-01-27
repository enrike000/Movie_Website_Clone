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
        sx={{
          mt: 2,
          mb: 2,
          position: "absolute",
          width: 1,
          zIndex: "10",
        }}
        justifyContent="space-around"
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
          <Stack justifyContent="space-around" direction="row" spacing={1}>
            {categories.map((name) => (
              <Stack
                direction="column"
                justifyContent="center"
                spacing={0.5}
                alignItems="center"
              >
                <Button>
                  <Typography sx={{ color: "white", fontFamily: "BOG" }}>
                    {name.name}
                  </Typography>
                </Button>

                <Icon sx={{ color: "white" }}>{name.icon}</Icon>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Box sx={{ display: "flex", gap: "15px" }}>
          <Button
            to="/login"
            variant="outlined"
            sx={{
              fontFamily: "BOG",
              height: "40%",
              "&:hover": {
                backgroundColor: "#f1f2f5",
              },
            }}
          >
            შესვლა
          </Button>
          <Button
            sx={{ height: "40%", fontFamily: "BOG" }}
            to="/register"
            variant="contained"
          >
            რეგისტრაცია
          </Button>
        </Box>
      </Stack>
    </>
  );
};
export default ResponsiveAppBar;
