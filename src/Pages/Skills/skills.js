import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AnimateSkills } from ".";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SkillsSec() {
  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography
          sx={{
            color: "#173B6C",
            fontWeight: "600",
            borderBottom: "3px solid #173B6C",
            display: "inline",
          }}
          variant="h4"
        >
          My <span style={{ color: "#31EB4F" }}>Skills</span>
        </Typography>
      </Box>

      <Grid container justifyContent={"center"}>
        <Grid item lg={12} justifyContent={"center"} mt={12}>
          <Box width={"100%"}>
            <AnimateSkills>
              <div className="box" style={{ "--i": 1 }}>
                <img
                  src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 2 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 3 }}>
                <img
                  src="https://www.cyberdb.co/wp-content/uploads/2020/10/javascript.jpg"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 4 }}>
                <img
                  src="https://liblessons.ru/wp-content/uploads/2018/03/sass.jpg"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 5 }}>
                <img
                  src="https://www.rlogical.com/wp-content/uploads/2020/08/icon-botsrap-1.png"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 6 }}>
                <img
                  src="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 7 }}>
                <img
                  src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
                  alt=""
                />
              </div>
              <div className="box" style={{ "--i": 8 }}>
                <img
                  src="https://wphost.me/catalog/images/2021/06/jquery-migrate.png"
                  alt=""
                />
              </div>
            </AnimateSkills>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          mt={15}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "red",
                },
              }}
              value={95}
              text={"95%"}
            />
            <Typography
              sx={{ color: "red", fontSize: "20px", fontWeight: "bold", mt: 2 }}
              variant="p"
              component={"p"}
            >
              Html5
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "blue",
                },
              }}
              value={93}
              text={"93%"}
            />
            <Typography
              sx={{
                color: "blue",
                fontSize: "20px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              Css3
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#1DEE5B",
                },
              }}
              value={90}
              text={"90%"}
            />
            <Typography
              sx={{
                color: "#1DEE5B",
                fontSize: "20px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              Sass
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#00FFBF",
                },
              }}
              value={95}
              text={"95%"}
            />
            <Typography
              sx={{
                color: "#00FFBF",
                fontSize: "20px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              Bootstrap5
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#FFA600",
                },
              }}
              value={85}
              text={"85%"}
            />
            <Typography
              sx={{
                color: "#FFA600",
                fontSize: "20px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              JavaScript
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#7A1F19",
                },
              }}
              value={80}
              text={"80%"}
            />
            <Typography
              sx={{
                color: "#7A1F19",
                fontSize: "20px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              Jquery
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#890F90",
                },
              }}
              value={87}
              text={"87%"}
            />
            <Typography
              sx={{
                color: "#890F90",
                fontSize: "20px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              React js
            </Typography>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 200,
              textAlign: "center",
              boxShadow: "5px 5px 20px 5px #D6E4E5",
              p: 3,
              borderRadius: "20px",
            }}
            className="animate__animated animate__zoomIn"
          >
            <CircularProgressbar
              styles={{
                path: {
                  stroke: "#5D5A5F",
                },
              }}
              value={90}
              text={"90%"}
            />
            <Typography
              sx={{
                color: "#5D5A5F",
                fontSize: "18px",
                fontWeight: "bold",
                mt: 2,
              }}
              variant="p"
              component={"p"}
            >
              Material Ui
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
