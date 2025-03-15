import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  { title: "⚡ Hızlı Performans", description: "En iyi deneyimi sunar." },
  { title: "🎨 Modern Tasarım", description: "Şık ve sezgisel arayüz." },
  { title: "🔒 Güvenlik Öncelikli", description: "Verileriniz emin ellerde." },
];

const FeatureList = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        background: "linear-gradient(135deg, #ff0000, #000000)", // Kırmızı → Siyah geçişi
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
        Öne Çıkan Özellikler
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 4,
                  background: "rgba(0, 0, 0, 0.8)", // Siyah opaklık sağda
                  color: "#fff",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, color: "#bbb" }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureList;
