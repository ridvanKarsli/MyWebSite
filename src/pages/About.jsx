import React from "react";
import { Box, Typography } from "@mui/material"; 

const About = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        We are a small team dedicated to providing quality services. Our goal is to make your experience enjoyable and meaningful.
      </Typography>
    </Box>
  );
};

export default About;
