import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";

function Carousell(props) {
  const items = [
    {
      photo:
        "https://juliesbicycle.com/wp-content/uploads/2021/04/needle-4854847_1920-1900x600.jpg",
      name: "ნემსი",
    },
    {
      photo:
        "https://visyon360.com/site/wp-content/uploads/tech_streaming_interestellar.jpg",
      name: "ინტერსტელარი",
    },
    {
      photo: "https://wallpaperaccess.com/full/2461288.jpg",
      name: "ზურას მკვლელობა",
    },
    {
      photo:
        "https://a-static.besthdwallpaper.com/the-flash-2022-movie-wallpaper-3440x1440-84379_15.jpg",
      name: "ფლეში",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
}

const Item = ({ photo, name }) => {
  return (
    <>
      <Stack
        justifyContent="center"
        sx={{ position: "absolute", height: 1, ml: 25, mt: 15 }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 40,
            fontFamily: "BOG",
          }}
        >
          {name}
        </Typography>
      </Stack>
      <Paper sx={{ position: "relative" }}>
        <img src={photo} alt="" style={{ height: 500, width: "100%" }} />
        {/* <Button>more info...</Button> */}
      </Paper>
    </>
  );
};
export default Carousell;
