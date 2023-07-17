import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Contact() {
  const notify = () => {
    toast.success("Success", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
  };

  //   Value

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      name.trim() &&
      email.trim() &&
      subject.trim() &&
      message.trim() !== ""
    ) {
      notify();
      emailjs
        .sendForm(
          "service_dpzylug",
          "template_67up66x",
          form.current,
          "Hji_bkUInFVBtFfJn"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };

  const submit = () => {
    sendEmail();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent={"center"} gap={10} mt={15}>
        <Grid
          item
          lg={5}
          md={8}
          sm={10}
          xs={12}
          sx={{
            boxShadow: "5px 5px 20px 5px #D6E4E5",
            p: 3,
            borderRadius: "10px",
          }}
          className="animate__animated animate__shakeX"
        >
          <Typography
            sx={{ color: "#173B6C", fontWeight: "600", textAlign: "center" }}
            variant="h4"
          >
            Contact <span style={{ color: "#31EB4F" }}>me</span>
          </Typography>
          <FormControl
            sx={{ mt: 3 }}
            fullWidth
            component={"form"}
            ref={form}
            onSubmit={(e) => sendEmail(e)}
          >
            <TextField
              type="text"
              required
              sx={{ mt: 3 }}
              variant="outlined"
              label="User Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              type="email"
              required
              sx={{ mt: 3 }}
              variant="outlined"
              label="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="text"
              required
              sx={{ mt: 3 }}
              variant="outlined"
              label="Subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              type="text"
              required
              sx={{ mt: 3 }}
              variant="outlined"
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 2 }}
              onClick={submit}
            >
              Send
            </Button>
          </FormControl>
        </Grid>

        <Grid item lg={5}>
          <img
            style={{ borderRadius: "20px" }}
            width={"100%"}
            src="https://www.linkpicture.com/q/profil.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
