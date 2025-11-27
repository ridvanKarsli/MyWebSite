import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      title: 'Ridvan Karsli',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, my name is',
      name: 'RIDVAN KARSLI',
      title: 'Java Backend and Full Stack Developer',
      description: 'I build scalable backend systems with Spring Boot and intuitive user interfaces using React and Swift.',
      viewWork: 'See My Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      description: 'I am a highly motivated and solution-oriented Java Backend & Full Stack Developer specialized in Spring Boot systems.',
      journey: {
        title: 'My Journey',
        content1: 'I actively take part in full-cycle software projects, delivering sustainable and scalable solutions.',
        content2: 'With expertise in layered architecture, RESTful APIs, and PostgreSQL, I also build user interfaces using React and Swift.',
      },
      timeline: {
        title: 'Timeline',
        education: {
          title: 'Education',
          content: 'Manisa Celal Bayar University – Computer Engineering (2022 – Present)\nKütahya Dumlupınar University – Computer Programming (2020 – 2022)',
        },
        experience: {
          title: 'Work Experience',
          content: 'Java Backend Developer – EMN Digital (Dec 2024 – Present)\nSoftware Developer – Kalem Web Software (Feb 2023 – Oct 2024)',
        },
        skills: {
          title: 'Skills',
          content: 'Java, Spring Boot, Java Backend, PostgreSQL, Database Design, OOP, SOLID, Clean Code, Layered Architecture, RESTful APIs, React, Swift, Git, Mobile Development, Algorithms & Data Structures',
        },
      },
      features: {
        title: 'What I Do',
        items: [
          {
            title: 'Java Backend Development',
            description: 'Developing robust backend systems with Java and Spring Boot.',
          },
          {
            title: 'Database Design',
            description: 'Designing and managing databases effectively using PostgreSQL.',
          },
          {
            title: 'Frontend Development',
            description: 'Creating user interfaces with React and Swift.',
          },
        ],
      },
    },
    projects: {
      title: 'My Projects',
      description: 'Highlighted projects built with modern technologies and a strong focus on user experience.',
      viewGithub: 'View on GitHub',
      viewDemo: 'Live Demo',
      project1: {
        title: 'Saglikta – Health Platform',
        description: 'A digital platform connecting chronic patients with expert doctors using Spring Boot, PostgreSQL, React, Swift, and Java.',
      },
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm open to new opportunities. Whether it's a project or a question, feel free to reach out.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      contactInfo: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      form: {
        title: 'Send Me a Message',
        subtitle: 'Contact me for collaborations, freelance work, or inquiries.',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Your Email',
        messagePlaceholder: 'Your Message',
        sendButton: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
      },
      chart: {
        title: 'Weekly Contact Statistics',
        label: 'Contact Requests',
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      social: {
        title: 'Social Media',
      },
    },
    footer: {
      title: 'RIDVAN KARSLI',
      description: 'A dedicated Java Backend & Full Stack Developer delivering scalable and modern applications with Spring Boot and React.',
      copyright: '© 2024 Ridvan Karsli. All rights reserved.',
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
  },
  tr: {
    nav: {
      title: 'Ridvan Karsli',
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    hero: {
      greeting: 'Merhaba, benim adım',
      name: 'RIDVAN KARSLI',
      title: 'Java Backend ve Full Stack Geliştirici',
      description: 'Spring Boot ile sağlam backend sistemleri ve React ile kullanıcı dostu arayüzler geliştiriyorum.',
      viewWork: 'Projelerimi Gör',
      contactMe: 'İletişime Geç',
    },
    about: {
      title: 'Hakkımda',
      description: 'Spring Boot temelli sistemlerde uzmanlaşmış, yüksek motivasyonlu bir Java Backend & Full Stack geliştiriciyim.',
      journey: {
        title: 'Yolculuğum',
        content1: 'Uçtan uca yazılım projelerinde aktif rol alarak sürdürülebilir ve ölçeklenebilir çözümler sunuyorum.',
        content2: 'Katmanlı mimari, RESTful API ve PostgreSQL uzmanlığımın yanında React ve Swift ile arayüzler geliştiriyorum.',
      },
      timeline: {
        title: 'Zaman Çizelgesi',
        education: {
          title: 'Eğitim',
          content: 'Manisa Celal Bayar Üniversitesi – Bilgisayar Mühendisliği (2022 – Devam Ediyor)\nKütahya Dumlupınar Üniversitesi – Bilgisayar Programcılığı (2020 – 2022)',
        },
        experience: {
          title: 'İş Deneyimi',
          content: 'EMN Digital – Java Backend Developer (Aralık 2024 – Devam Ediyor)\nKalem Web Software – Yazılım Geliştirici (Şubat 2023 – Ekim 2024)',
        },
        skills: {
          title: 'Yetenekler',
          content: 'Java, Spring Boot, Java Backend, PostgreSQL, Veritabanı Tasarımı, OOP, SOLID, Clean Code, Katmanlı Mimari, RESTful API, React, Swift, Git, Mobil Geliştirme, Algoritmalar & Veri Yapıları',
        },
      },
      features: {
        title: 'Neler Yapıyorum',
        items: [
          {
            title: 'Java Backend Geliştirme',
            description: 'Java ve Spring Boot ile güçlü backend sistemleri geliştiriyorum.',
          },
          {
            title: 'Veritabanı Tasarımı',
            description: 'PostgreSQL ile etkili veri tasarımı ve yönetimi.',
          },
          {
            title: 'Arayüz Geliştirme',
            description: 'React ve Swift ile kullanıcı arayüzleri geliştiriyorum.',
          },
        ],
      },
    },
    projects: {
      title: 'Projelerim',
      description: 'İşte öne çıkan projelerim. Her biri kullanıcı deneyimi ve modern teknolojilere odaklıdır.',
      viewGithub: "GitHub'da Gör",
      viewDemo: 'Canlı Demo',
      project1: {
        title: 'Sağlıkta – Sağlık Platformu',
        description: 'Spring Boot, PostgreSQL, React, Swift ve Java teknolojileriyle kronik hastaları uzmanlarla buluşturur.',
      },
    },
    contact: {
      title: 'İletişime Geç',
      description: 'Yeni fırsatlara açığım. Sorularınız veya projeleriniz için iletişime geçebilirsiniz!',
      name: 'İsim',
      email: 'E-posta',
      message: 'Mesaj',
      send: 'Mesaj Gönder',
      success: 'Mesaj başarıyla gönderildi!',
      error: 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.',
      contactInfo: {
        title: 'İletişim Bilgileri',
        email: 'E-posta',
        phone: 'Telefon',
        location: 'Konum',
      },
      form: {
        title: 'Bana Mesaj Gönder',
        subtitle: 'İş veya öneri için benimle iletişime geçin',
        namePlaceholder: 'Adınız',
        emailPlaceholder: 'E-posta Adresiniz',
        messagePlaceholder: 'Mesajınız',
        sendButton: 'Mesaj Gönder',
        success: 'Mesaj başarıyla gönderildi!',
        error: 'Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.',
      },
      chart: {
        title: 'Haftalık İletişim İstatistikleri',
        label: 'İletişim Talepleri',
        labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
      },
      social: {
        title: 'Sosyal Medya',
      },
    },
    footer: {
      title: 'RIDVAN KARSLI',
      description: 'Spring Boot ve modern teknolojilerle çalışan bir Java Backend ve Full Stack geliştirici.',
      copyright: '© 2024 Ridvan Karsli. Tüm hakları saklıdır.',
      quickLinks: {
        title: 'Hızlı Bağlantılar',
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        projects: 'Projeler',
        contact: 'İletişim',
      },
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
