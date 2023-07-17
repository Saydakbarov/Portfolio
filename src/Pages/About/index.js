import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutSec() {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{ mt: 5 }}
          className="animate__animated animate__fadeInRightBig"
        >
          <Typography
            sx={{
              color: "#173B6C",
              fontWeight: "600",
              borderBottom: "3px solid #173B6C",
              display: "inline",
            }}
            variant="h4"
          >
            About <span style={{ color: "#31EB4F" }}>Me</span>
          </Typography>
          <Typography sx={{ fontSize: "20px", fontFamily: "a", mt: 2 }}>
            My name is Jasur. I am 18 years old. I live in Uzbekistan. I am very
            interested in the field of frontend and I am a frontend developer. I
            like this field very much. I want to become a fullstack developer in
            the future.
          </Typography>
        </Box>

        <Box
          sx={{ mt: 5 }}
          className="animate__animated animate__fadeInLeftBig"
        >
          <Typography
            sx={{
              color: "#173B6C",
              fontWeight: "600",
              borderBottom: "3px solid #173B6C",
              display: "inline",
            }}
            variant="h4"
          >
            Education
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "a",
              mt: 2,
              fontWeight: "bold",
            }}
          >
            PDP <span style={{ color: "#31EB4F" }}>ACADEMY</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "a",
              mt: 1,
              fontWeight: "bold",
            }}
          >
            Online course: <span style={{ color: "grey" }}> 6 month</span>
          </Typography>
        </Box>

        <Grid
          container
          gap={5}
          mt={4}
          p={2}
          boxShadow={"5px 5px 20px 5px #D6E4E5"}
          className="animate__animated animate__rubberBand"
        >
          <Grid item lg={4}>
            <img
              width={"100%"}
              src="https://www.linkpicture.com/q/about.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={7}>
            <Typography
              sx={{ color: "#173B6C", fontWeight: "600" }}
              variant="h5"
            >
              Frontend <span style={{ color: "#31EB4F" }}>Developer</span>
            </Typography>
            <Typography sx={{ fontSize: "20px", fontFamily: "a" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
                  variant="h6"
                >
                  Birthday:{" "}
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    27 january 2004
                  </span>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
                  variant="h6"
                >
                  Phone:{" "}
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    90-933-78-72
                  </span>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
                  variant="h6"
                >
                  City:{" "}
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    Tashkent
                  </span>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
                  variant="h6"
                >
                  Age:{" "}
                  <span style={{ color: "grey", fontWeight: "500" }}>18</span>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
                  variant="h6"
                >
                  Email:{" "}
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    jasursaydakbarov03@gmail.com
                  </span>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
                  variant="h6"
                >
                  Job:{" "}
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    Frontend Developer
                  </span>
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "20px", fontFamily: "a", mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
