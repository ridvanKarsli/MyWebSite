import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { useLanguage } from '../context/LanguageContext';

const ContactInfo = ({ chartOptions, chartData }) => {
  const { translations, language } = useLanguage();

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: translations[language].contact.contactInfo.email,
      content: 'rdvn.35050@gmail.com',
      link: 'mailto:rdvn.35050@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: translations[language].contact.contactInfo.phone,
      content: '05536999119',
      link: 'tel:05536999119',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: translations[language].contact.contactInfo.location,
      content: 'izmir türkiye',
      link: 'https://maps.google.com/?q=izmir türkiye',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      title: 'GitHub',
      link: 'https://github.com/yourusername',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/yourusername',
    },
    {
      icon: <FaTwitter />,
      title: 'Twitter',
      link: 'https://twitter.com/yourusername',
    },
  ];

  return (
    <Grid container spacing={3}>
      {contactInfo.map((info, index) => (
        <Grid item xs={12} key={info.title}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              component="a"
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: 'background.paper',
                border: '1px solid rgba(226, 232, 240, 0.1)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(226, 232, 240, 0.1)',
                  color: 'primary.main',
                  p: 1.5,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {info.icon}
              </Box>
              <Box>
                <Typography variant="h6" component="h3">
                  {info.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.content}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Paper
          sx={{
            p: 3,
            backgroundColor: 'background.paper',
            border: '1px solid rgba(226, 232, 240, 0.1)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {translations[language].contact.chart.title}
          </Typography>
          <Line options={chartOptions} data={chartData} />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper
          sx={{
            p: 3,
            backgroundColor: 'background.paper',
            border: '1px solid rgba(226, 232, 240, 0.1)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {translations[language].contact.social.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.title}
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  backgroundColor: 'rgba(226, 232, 240, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(226, 232, 240, 0.15)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactInfo; 