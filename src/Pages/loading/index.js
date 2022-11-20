import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";

export default function LoadingSec() {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress <= 0 ? 100 : prevProgress - 10
      );
    }, 1000);

    return () => {
      if(progress === 0){
        clearInterval(timer);
      }
    };
  }, []);
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        height: "100vh",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(45,71,78,1) 0%, rgba(10,86,97,1) 100%, rgba(10,209,250,1) 100%)",
      }}
    >
      <Grid item sx={{display:"flex", gap:"20px", alignItems:"center"}}>
      <Typography variant="h3" sx={{color:"white"}}>Loading...</Typography>

        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={progress}
            style={{ width: "60px", color: "white" }}
          />
          <Box
            sx={{
              top: 0,
              left: 18,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={{ fontSize: "20px", color: "white" }}
            >
              {progress}
            </Typography>
          </Box>
        </Box>
 
      </Grid>
    </Grid>
  );
}
