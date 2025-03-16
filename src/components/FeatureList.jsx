import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  { title: "💻 Kod Sever", description: "Yazılım geliştirmeyi bir tutku olarak görüyorum. Her satır kodda bir çözüm, her hata da yeni bir öğrenme fırsatı." },
  { title: "🚀 Sürekli Öğrenen", description: "Yeni teknolojilere meraklıyım. Her gün bir şeyler öğrenerek kendimi geliştirmeyi ilke edinmiş bir yazılımcıyım." },
  { title: "🛠️ Problem Çözme Uzmanı", description: "Zorluklarla karşılaştığımda, karmaşık sorunları basit ve etkili çözümlerle aşmak en büyük motivasyonum." },
  { title: "🎯 Detaylara Özen Gösteren", description: "Proje ne kadar büyük olursa olsun, küçük detayları asla gözden kaçırmam. Her şeyin mükemmel olması için çalışırım." },
  { title: "📈 Performansa Odaklı", description: "Uygulamaların hız ve verimlilik açısından en yüksek performansa ulaşması için optimize etmekten keyif alırım." },
  { title: "💡 Yaratıcı Çözümler", description: "Yazılımda sıradışı düşünmeyi seviyorum. Yaratıcı ve yenilikçi çözümler üretmek, kod yazmanın en heyecan verici kısmı." },
  { title: "🤖 Otomasyon Meraklısı", description: "Tekrar eden işleri otomatikleştirerek zaman kazanmayı ve iş süreçlerini daha verimli hale getirmeyi çok severim." }
];


const FeatureList = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
        background: "linear-gradient(to bottom, #000000 0%, #550000 15%, #990000 40%, #990000 60%, #550000 85%, #000000 100%)",
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
                  background: "rgba(0, 0, 0, 0.8)", // Kart arkaplanı hafif opak siyah
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
