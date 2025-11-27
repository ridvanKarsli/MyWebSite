import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { useLanguage } from '../context/LanguageContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Contact = () => {
  const theme = useTheme();
  const { translations, language } = useLanguage();

  const chartData = {
    labels: translations[language].contact.chart.labels,
    datasets: [
      {
        label: translations[language].contact.chart.label,
        data: [12, 19, 15, 25, 22, 30, 18],
        borderColor: theme.palette.primary.main,
        backgroundColor: 'rgba(0, 229, 255, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: theme.palette.text.secondary,
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: theme.palette.text.secondary,
        },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>İletişim — Rıdvan Şevki Karslı</title>
        <meta 
          name="description" 
          content="Rıdvan Şevki Karslı ile iletişime geçin. Projeler, işbirlikleri ve sorularınız için iletişim formu ve iletişim bilgileri." 
        />
        <meta name="keywords" content="Rıdvan Karslı İletişim, Yazılım Geliştirici İletişim, Java Developer İletişim" />
        <meta property="og:title" content="İletişim — Rıdvan Şevki Karslı" />
        <meta property="og:description" content="Rıdvan Şevki Karslı ile iletişime geçin. Projeler ve işbirlikleri için." />
        <meta property="og:url" content="https://www.ridvankarsli.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.ridvankarsli.com/contact" />
      </Helmet>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            {translations[language].contact.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {translations[language].contact.description}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInfo chartOptions={chartOptions} chartData={chartData} />
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
};

export default Contact; 