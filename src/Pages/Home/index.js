import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeSec() {
  return (
    <Box sx={{ background: "", width: "100%" }}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Grid
          item
          lg={5}
          md={12}
          xs={12}
          mt={0}
          textAlign={"center"}
          className="animate__animated animate__backInUp"
        >
          <Typography variant="h2" sx={{ color: "#blue", fontFamily: "a" }}>
            Hi! I'm <span style={{ color: "#31EB4F" }}>Jasur</span>
          </Typography>
          <Typography variant="h4" sx={{ color: "#blue", fontFamily: "a" }}>
            I'm Frontend <span style={{ color: "#31EB4F" }}>Developer</span>
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "grey", fontFamily: "a", fontSize: "20px" }}
          >
            I am a frontend developer. I want to become a fullstack developer in
            the future.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color={"primary"}>
              <Link to="about">About Me</Link>
            </Button>
            <Button sx={{ ml: 2 }} variant="contained" color={"primary"}>
              <Link to="portfolio">Portfolio</Link>
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          lg={5}
          md={8}
          sm={8}
          xs={10}
          textAlign={"center"}
          className="animate__animated animate__backInDown"
        >
          <img
            style={{ borderRadius: "15px" }}
            width={"90%"}
            src="https://www.linkpicture.com/q/profil.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
