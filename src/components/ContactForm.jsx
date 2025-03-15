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
        padding: "60px 20px",
        background: "linear-gradient(135deg, #000000, #ff0000)", // Siyah → Kırmızı geçişi
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
              color="secondary"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#ff0000" },
              }}
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
