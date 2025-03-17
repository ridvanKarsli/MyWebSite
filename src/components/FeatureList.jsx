import React from "react";
import { Box, Grid, Typography, Card, CardContent, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles"; // To access the theme in the component

const features = [
  { title: "🚀 Sürekli Öğrenen", description: "Yeni teknolojilere meraklıyım. Her gün bir şeyler öğrenerek kendimi geliştirmeyi ilke edinmiş bir yazılımcıyım." },
  { title: "🛠️ Problem Çözme Uzmanı", description: "Zorluklarla karşılaştığımda, karmaşık sorunları basit ve etkili çözümlerle aşmak en büyük motivasyonum." },
  { title: "🎯 Detaylara Özen Gösteren", description: "Proje ne kadar büyük olursa olsun, küçük detayları asla gözden kaçırmam. Her şeyin mükemmel olması için çalışırım." },
  { title: "📈 Performansa Odaklı", description: "Uygulamaların hız ve verimlilik açısından en yüksek performansa ulaşması için optimize etmekten keyif alırım." },
  { title: "💡 Yaratıcı Çözümler", description: "Yazılımda sıradışı düşünmeyi seviyorum. Yaratıcı ve yenilikçi çözümler üretmek, kod yazmanın en heyecan verici kısmı." },
  { title: "🤖 Otomasyon Meraklısı", description: "Tekrar eden işleri otomatikleştirerek zaman kazanmayı ve iş süreçlerini daha verimli hale getirmeyi çok severim." }
];

const FeatureList = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        background: theme.palette.background.default, // Hero ile uyumlu tema arka planı
        padding: "0 20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Animasyonlu Başlık - Hero ile uyumlu */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }} // Hero'daki animasyonla aynı
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 900, // Hero'daki gibi daha belirgin
              background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile aynı gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1rem",
              textShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Hero ile uyumlu gölge
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }, // Responsive tipografi
            }}
          >
            Öne Çıkan Özellikler
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Hero'daki buton animasyonuna benzer
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }} // Hafif gecikme farkı
              >
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Hero'daki buton gölgesine benzer
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`, // Hafif gradient arka plan
                    color: theme.palette.text.primary,
                    transition: "all 0.4s ease", // Hero'daki butonla uyumlu geçiş
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-3px)", // Hero'daki butonla aynı hover efekti
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)", // Daha belirgin gölge
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}30, ${theme.palette.secondary.dark}30)`, // Hover'da gradient değişimi
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive
                        letterSpacing: "0.05rem",
                        color: theme.palette.text.primary,
                        background: "linear-gradient(to right, #00ddeb, #ff007a)", // Hero ile uyumlu gradient
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Hafif gölge
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 2,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureList;