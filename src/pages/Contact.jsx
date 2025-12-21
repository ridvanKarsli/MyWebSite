import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
      <ContactForm />
    </>
  );
};

export default Contact;
