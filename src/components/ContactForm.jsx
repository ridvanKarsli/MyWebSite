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
        background: "inherit", // global.css'deki body arka planını miras alır (linear-gradient)
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
              color: "#f5f0e1", // global.css'deki başlık rengi (kırık beyaz)
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
                    backgroundColor: "#000000", // global.css'deki input arka planı
                    color: "#f5f0e1", // global.css'deki input yazı rengi (kırık beyaz)
                    "& fieldset": { borderColor: "#b08d57" }, // global.css'deki input kenar rengi
                    "&:hover fieldset": { borderColor: "#b08d57" },
                    "&.Mui-focused fieldset": { borderColor: "#b08d57" }, // global.css ile uyumlu focus rengi
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
                backgroundColor: "#b08d57",
                color: "#000000", // Kahve rengi yerine siyah
                border: "2px solid #b08d57",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                textTransform: "uppercase",
                letterSpacing: "0.05rem",
                padding: "10px 20px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#000000", // Kahve rengi yerine siyah
                  color: "#b08d57",
                  border: "2px solid #b08d57",
                  transform: "translateY(-3px)",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.4s ease",
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
