import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function Carousell(props) {
  const items = [
    {
      photo:
        "https://juliesbicycle.com/wp-content/uploads/2021/04/needle-4854847_1920-1900x600.jpg",
    },
    {
      photo: "https://wallpapercave.com/wp/wp10282269.jpg",
    },
    {
      photo:
        "https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/2/25/uche9ykvm1bx1htvu2ze/doom-eternal-screenshot",
    },
    {
      photo:
        "https://a-static.besthdwallpaper.com/the-flash-2022-movie-wallpaper-3440x1440-84379_15.jpg",
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

const Item = ({ photo }) => {
  return (
    <Paper>
      <img src={photo} alt="" style={{ height: 300, width: "100%" }} />
      <Button>more info...</Button>
    </Paper>
  );
};
export default Carousell;
