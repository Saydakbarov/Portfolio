import { Assessment, Close, ContactMail, FacebookRounded, Home, Instagram, LocalLibrary, Menu, Person, Telegram, Twitter } from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DrawerComp() {
  const [mobileOpen, setMobileOpen] = useState(false);

    // Icons Style
    const IconStyle = {
      a: {
        color: "#ffff",
      },
      lineHeight: "10px",
      backgroundColor: "#212431",
      "&:hover": {
        backgroundColor: "#00A6EB",
      },
    };
    // List Item Style
    const listItem = {
      a:{
        color: "grey",
        "&:hover": {
          color: "#ffff",
        },
      }
    }
  return (
    <React.Fragment>
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
       
        <Box sx={{ width: "300px", backgroundColor: "#040B14", height:"100vh" }}>
        <IconButton
          sx={{
            display: "inline-block",
            width: "50px",
            marginLeft:"250px",
            color:"white"
          }}
          onClick={() => setMobileOpen(false)}
        >
          <Close />
        </IconButton>
          <Box textAlign={"center"}>
            <img
              style={{
                width: "140px",
                borderRadius: "50%",
                border: "5px solid grey",
                marginTop: "20px",
              }}
              src="https://www.linkpicture.com/q/sidebar_1.jpg"
              alt=""
            />
            <Typography
              sx={{ color: "#fff", mt: 2 }}
              variant="p"
              component={"p"}
            >
              ⚜_Saydakbarov_⚜
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <IconButton sx={IconStyle}>
                <a href="https://twitter.com/?lang=ru" target="_blank" rel="noreferrer">
                  <Twitter sx={{ fontSize: "20px" }} />
                </a>
              </IconButton>
              <IconButton sx={IconStyle}>
                <a
                  href="https://www.facebook.com/watch/live/?ref=live_delegate"
                  target="_blank" rel="noreferrer"
                >
                  <FacebookRounded sx={{ fontSize: "20px" }} />
                </a>
              </IconButton>
              <IconButton sx={IconStyle}>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <Instagram sx={{ fontSize: "20px" }} />
                </a>
              </IconButton>
              <IconButton sx={IconStyle}>
                <a href="https://t.me/saydakbarov_78_72" target="_blank" rel="noreferrer">
                  <Telegram sx={{ fontSize: "20px" }} />
                </a>
              </IconButton>
            </Box>
          </Box>
          <List sx={{ mt: 4 }}>
            <ListItem sx={listItem} onClick={() => setMobileOpen(false)}>
              <ListItemButton>
                <Link to="">
                  <Home sx={{ mr: 1 }} /> Home
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={listItem} onClick={() => setMobileOpen(false)}>
              <ListItemButton>
              <Link to="about">
                  <Person sx={{ mr: 1 }} /> About
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={listItem} onClick={() => setMobileOpen(false)}>
              <ListItemButton>
              <Link to="skills">
                  <LocalLibrary sx={{ mr: 1 }} /> Skills
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={listItem} onClick={() => setMobileOpen(false)}>
              <ListItemButton>
              <Link to="portfolio">
                  <Assessment sx={{ mr: 1 }} /> Portfolio
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem sx={listItem} onClick={() => setMobileOpen(false)}>
              <ListItemButton>
              <Link to="contact">
                  <ContactMail sx={{ mr: 1 }} /> Contact
                </Link>
              </ListItemButton>
            </ListItem>
          </List>

          <footer
            style={{ textAlign: "center", color: "#ffff", marginTop: "40px" }}
          >
            <p>
              &#169; Saydakbarov Jasur 2022 - {new Date().getFullYear()} | Made
              with ❤
            </p>
          </footer>
        </Box>
      </Drawer>
      <Box>
        <Button variant="contained" sx={{borderRadius:"10%", p:1}} onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu />
        </Button>
      </Box>
    </React.Fragment>
  );
}
