import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material"; 

const Contact = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to reach out to us through the form below.
      </Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
        Submit
      </Button>
    </Box>
  );
};

export default Contact;
