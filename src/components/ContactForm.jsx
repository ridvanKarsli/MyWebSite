import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component

const ContactForm = () => {
  const theme = useTheme(); // Access the current theme
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
        height: "100vh", // Hero ile aynı tam ekran yüksekliği
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: theme.palette.background.default, // Hero ile uyumlu tema arka planı
        color: theme.palette.text.primary, // Tema ile uyumlu metin rengi
        padding: "0 20px",
        position: "relative",
        overflow: "hidden", // Hero ile aynı taşma kontrolü
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Hero ile aynı animasyon
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }} // Hero ile aynı spring animasyonu
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900, // Hero ile uyumlu kalınlık
              background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1rem",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }, // Responsive tipografi
              marginBottom: 3,
            }}
          >
            İletişime Geçin
          </Typography>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }} // Hero'daki alt başlık animasyonuna benzer
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }} // Hero ile uyumlu gecikme
          onSubmit={handleSubmit}
        >
          {["name", "email", "message"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -50 }} // Hafif farklı animasyon yönü korunabilir
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
                    color: theme.palette.text.secondary, // Tema ile uyumlu ikincil renk
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
                  },
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.text.primary, // Tema ile uyumlu metin rengi
                    "& fieldset": { borderColor: theme.palette.text.secondary }, // Tema ile uyumlu kenarlık
                    "&:hover fieldset": { borderColor: theme.palette.primary.main }, // Hover'da tema rengi
                    "&.Mui-focused fieldset": { borderColor: theme.palette.primary.main }, // Fokuslandığında tema rengi
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`, // Hafif gradient arka plan
                    borderRadius: 2,
                  },
                }}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Hero'daki buton animasyonuna benzer
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }} // Hero ile uyumlu gecikme
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Hero ile aynı gradient
                color: "#fff",
                padding: "12px 30px", // Hero ile uyumlu boyut
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" }, // Responsive
                fontWeight: 700,
                textTransform: "uppercase",
                borderRadius: "50px", // Hero ile aynı yuvarlak kenar
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero ile aynı gölge
                "&:hover": {
                  background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`, // Hero ile aynı hover gradient
                  transform: "translateY(-3px)", // Hero ile aynı hover efekti
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)", // Hero ile aynı gölge artışı
                  transition: "all 0.4s ease", // Hero ile aynı geçiş süresi
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