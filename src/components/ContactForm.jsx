import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi!");
  };

  return (
    <Box sx={{ padding: "60px 20px", backgroundColor: "#121212" }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3, color: "#9c27b0" }}>
          İletişime Geçin
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Adınız"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{
              marginBottom: 2,
              "& .MuiInputLabel-root": {
                color: "#9c27b0", // Koyu mor renk
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#9c27b0", // Koyu mor border
                },
                "&:hover fieldset": {
                  borderColor: "#6200ea", // Hoverda koyu mor
                },
              },
            }}
          />
          <TextField
            label="E-posta"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{
              marginBottom: 2,
              "& .MuiInputLabel-root": {
                color: "#9c27b0", 
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#9c27b0",
                },
                "&:hover fieldset": {
                  borderColor: "#6200ea",
                },
              },
            }}
          />
          <TextField
            label="Mesajınız"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            required
            sx={{
              marginBottom: 2,
              "& .MuiInputLabel-root": {
                color: "#9c27b0", 
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#9c27b0", 
                },
                "&:hover fieldset": {
                  borderColor: "#6200ea",
                },
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ transition: "all 0.3s ease", "&:hover": { backgroundColor: "#6200ea" } }}>
            Gönder
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
