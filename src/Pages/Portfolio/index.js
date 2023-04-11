import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function PortfolioSec() {
  return (
    <Box>
      <Container>
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{
              color: "#173B6C",
              fontWeight: "600",
              borderBottom: "3px solid #173B6C",
              display: "inline",
            }}
            variant="h4"
            component={"h4"}
          >
            My <span style={{ color: "#31EB4F" }}>Portfolio</span>
          </Typography>
        </Box>
        <Grid
          container
          alignItems={"center"}
          gap={5}
          boxShadow={"5px 5px 20px 5px #D6E4E5"}
          p={3}
          mt={10}
          className="animate__animated animate__slideInRight"
        >
          <Grid item lg={5.5} >
            <img
              style={{ borderRadius: "5px" }}
              width={"100%"}
              src="https://www.linkpicture.com/q/project1.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={5.6}>
            <Typography variant="h5" sx={{ color: "blue" }}>
              Project 1
            </Typography>
            <Typography
              sx={{ fontSize: "18px", color: "grey", fontFamily: "a" }}
            >
              The ZONE is built on top of MUI, a powerful library that provides
              flexible, customizable, and easy-to-use components.Modern ui kit
              to save your time, boost your creativity. Neat and super stylish
              layout ready to help with your projects
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              href="https://reactprojec-1.netlify.app/"
              target="_blank"
            >
              Demo
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          gap={5}
          boxShadow={"5px 5px 20px 5px #D6E4E5"}
          p={3}
          mt={10}
          className="animate__animated animate__slideInLeft"
        >
          <Grid item lg={5.6}>
            <Typography variant="h5" sx={{ color: "blue" }}>
              Project 2
            </Typography>
            <Typography
              sx={{ fontSize: "18px", color: "grey", fontFamily: "a" }}
            >
              Geeks provide clean and consistent page designs to help you to
              create beautiful looking contents. Geek is feature-rich components
              and beautifully designed pages that help you create the best
              possible website and web application projects.
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              href="https://thunderous-scone-4d7fb1.netlify.app"
              target="_blank"
            >
              Demo
            </Button>
          </Grid>
          <Grid item lg={5.5}>
            <img
              style={{ borderRadius: "5px" }}
              width={"100%"}
              src="https://www.linkpicture.com/q/projet.jpg"
              alt=""
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          gap={5}
          boxShadow={"5px 5px 20px 5px #D6E4E5"}
          p={3}
          mt={10}
          className="animate__animated animate__slideInRight"
        >
          <Grid item lg={5.5}>
            <img
              style={{ borderRadius: "5px" }}
              width={"100%"}
              src="https://www.linkpicture.com/q/project_3.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={5.6}>
            <Typography variant="h5" sx={{ color: "blue" }}>
              Project 3
            </Typography>
            <Typography
              sx={{ fontSize: "18px", color: "grey", fontFamily: "a" }}
            >
              This site is about Dr. Griffith. Dr. Griffith is a sought-after
              speaker and is the founder of the International Congress of
              Surgery and Thoracic Surgery around the world, most recently.
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              href="https://helpful-semolina-972ece.netlify.app/"
              target="_blank"
            >
              Demo
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems={"center"}
          gap={5}
          boxShadow={"5px 5px 20px 5px #D6E4E5"}
          p={3}
          mt={10}
          className="animate__animated animate__slideInLeft"
        >
          <Grid item lg={5.6}>
            <Typography variant="h5" sx={{ color: "blue" }}>
              Project 2
            </Typography>
            <Typography
              sx={{ fontSize: "18px", color: "grey", fontFamily: "a" }}
            >
              Geeks provide clean and consistent page designs to help you to
              create beautiful looking contents. Geek is feature-rich components
              and beautifully designed pages that help you create the best
              possible website and web application projects.
            </Typography>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              href="https://astounding-churros-a59969.netlify.app"
              target="_blank"
            >
              Demo
            </Button>
          </Grid>
          <Grid item lg={5.5}>
            <img
              style={{ borderRadius: "5px" }}
              width={"100%"}
              src="https://www.linkpicture.com/q/youtube_2.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
