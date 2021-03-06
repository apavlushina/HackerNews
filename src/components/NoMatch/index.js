import React from "react";
import "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MyHeader from "./MyHeader";

const useStyles = makeStyles({
  button: {
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "none",
    display: "block"
  }
});

export default function Notfound() {
  const classes = useStyles();

  const style = { width: "100%", height: "80vh", margin: "0 auto" };

  return (
    <div>
      <MyHeader>HackerNews</MyHeader>

      <lottie-player
        src="https://assets5.lottiefiles.com/temp/lf20_dzWAyu.json"
        background="transparent"
        speed="1"
        style={style}
        loop
        autoplay
      ></lottie-player>

      <Link to={"/"}>
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="small"
        >
          Back to MainPage
        </Button>
      </Link>
    </div>
  );
}
