import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

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
    <Box
      sx={{
        py: 8,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom, #000000 0%, #550000 15%, #990000 40%, #990000 60%, #550000 85%, #000000 100%)",
        color: "white",
        padding: "0 20px",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 3, color: "#fff" }}
          >
            İletişime Geçin
          </Typography>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          {["name", "email", "message"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TextField
                label={field === "name" ? "Adınız" : field === "email" ? "E-posta" : "Mesajınız"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                fullWidth
                required
                multiline={field === "message"}
                rows={field === "message" ? 4 : 1}
                sx={{
                  marginBottom: 2,
                  "& .MuiInputLabel-root": { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    "& fieldset": { borderColor: "#fff" },
                    "&:hover fieldset": { borderColor: "#ff0000" },
                  },
                }}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#990000",
                color: "#fff",
                padding: "15px 30px",
                fontSize: "1.2rem",
                fontWeight: 600,
                textTransform: "uppercase",
                borderRadius: "50px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#770000",
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
              size="large"
            >
              Gönder
            </Button>
          </motion.div>
        </motion.form>
      </Container>
    </Box>
  );
};

export default ContactForm;
