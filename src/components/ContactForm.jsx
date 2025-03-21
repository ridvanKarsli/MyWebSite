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
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`İletişim Formu - ${name}`);
    const body = encodeURIComponent(`Gönderen: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`);
    
    // Mailto bağlantısını kullanarak mesajı göndermek
    window.location.href = `mailto:rdvn.35050@gmail.com?subject=${subject}&body=${body}`;
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
        background: "inherit", // global.css'deki body arka planını miras alır
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: "#4e2c1d", // global.css'deki başlık rengi
              letterSpacing: "0.1rem",
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
              marginBottom: 3,
            }}
          >
            İletişime Geçin
          </Typography>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
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
                  "& .MuiInputLabel-root": {
                    color: "#b08d57", // global.css'deki altın sarısı (örneğin bağlantılar için)
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#4e2c1d", // global.css'deki input arka planı
                    color: "#fff", // global.css'deki input yazı rengi
                    "& fieldset": { borderColor: "#b08d57" }, // global.css'deki input kenar rengi
                    "&:hover fieldset": { borderColor: "#b08d57" },
                    "&.Mui-focused fieldset": { borderColor: "#b08d57" }, // global.css ile uyumlu
                  },
                }}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#b08d57", // global.css'deki buton arka planı
                color: "#4e2c1d", // global.css'deki buton yazı rengi
                border: "2px solid #4e2c1d", // global.css'deki buton kenarı
                padding: "10px 20px", // global.css ile uyumlu
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                fontWeight: 700,
                textTransform: "uppercase",
                cursor: "pointer", // global.css ile uyumlu
                "&:hover": {
                  backgroundColor: "#4e2c1d", // global.css'deki hover arka planı
                  color: "#fff", // global.css'deki hover yazı rengi
                  border: "2px solid #b08d57", // global.css'deki hover kenar rengi
                },
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
