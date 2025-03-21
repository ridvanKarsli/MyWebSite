import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { FaRocket, FaTools, FaBullseye, FaChartLine, FaLightbulb, FaRobot } from 'react-icons/fa';

const FeatureList = () => {
  const features = [
    { icon: <FaRocket />, title: "Yenilikçi Teknolojiler", description: "Yeni nesil çözümler ve teknolojilerle projelerinizi hızlandırın." },
    { icon: <FaTools />, title: "Gelişmiş Araçlar", description: "Her türlü yazılım geliştirme ihtiyacınız için güçlü araçlar." },
    { icon: <FaBullseye />, title: "Hedef Odaklı Çözümler", description: "Projelerinizde başarıya ulaşmanızı sağlayacak stratejiler." },
    { icon: <FaChartLine />, title: "Veri Analizi", description: "Veri odaklı kararlar ile daha etkili sonuçlar elde edin." },
    { icon: <FaLightbulb />, title: "Yaratıcı Fikirler", description: "Yaratıcı ve etkili çözümler ile projelerinizi yeniden şekillendirin." },
    { icon: <FaRobot />, title: "Otomasyon", description: "Süreçlerinizi otomatikleştirerek verimliliği arttırın." },
  ];

  return (
    <Box
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        background: "inherit", // global.css'deki body arka planını miras alır
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: 900,
              letterSpacing: "0.1rem",
              color: "#4e2c1d", // global.css'deki başlık rengi
              marginBottom: "40px",
            }}
          >
            Özellikler
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 4,
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  padding: "40px",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "3rem",
                    color: "#b08d57", // global.css'deki bağlantı/a rengi (altın sarısı)
                    marginBottom: "20px",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#4e2c1d", // global.css'deki başlık rengi
                    marginBottom: "15px",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4e2c1d", // global.css'deki paragraf rengi
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureList;