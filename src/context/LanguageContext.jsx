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
      title: 'Full Stack Developer',
      description: 'I build modern web applications with a focus on user experience and clean code.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      description: "I'm a passionate full-stack developer with a focus on creating modern and user-friendly web applications.",
      journey: {
        title: 'My Journey',
        content1: "I started my journey in web development with a passion for creating beautiful and functional applications. Over the years, I've worked on various projects, from small business websites to complex enterprise applications.",
        content2: "My focus is on building modern web applications using the latest technologies and best practices. I believe in writing clean, maintainable code and creating intuitive user experiences.",
      },
      timeline: {
        title: 'Timeline',
        education: {
          title: 'Education',
          content: 'Computer Science Degree from XYZ University',
        },
        experience: {
          title: 'Work Experience',
          content: 'Senior Developer at Tech Company',
        },
        skills: {
          title: 'Skills',
          content: 'Full Stack Development, React, Node.js, and more',
        },
      },
      features: {
        title: 'What I Do',
        items: [
          {
            title: 'Web Development',
            description: 'Building responsive and modern web applications using the latest technologies.',
          },
          {
            title: 'Mobile Development',
            description: 'Creating cross-platform mobile applications with React Native.',
          },
          {
            title: 'UI/UX Design',
            description: 'Designing intuitive and user-friendly interfaces with a focus on user experience.',
          },
          {
            title: 'Backend Development',
            description: 'Developing robust and scalable backend systems using Node.js and Python.',
          },
        ],
      },
    },
    projects: {
      title: 'My Projects',
      description: 'Here are some of my recent projects. Each one was built with a focus on user experience and modern technologies.',
      viewGithub: 'View on GitHub',
      viewDemo: 'View Live Demo',
      project1: {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform with real-time inventory management.',
      },
      project2: {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
      },
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
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
        subtitle: 'Feel free to contact me for any work or suggestions below',
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
      description: 'A passionate full-stack developer focused on creating modern and user-friendly web applications.',
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
          content: 'Java, Spring Boot, PostgreSQL, OOP, SOLID, Clean Code, Katmanlı Mimari, Python ML, React, Swift, Git, Mobil Geliştirme, Algoritmalar & Veri Yapıları',
        },
      },
      features: {
        title: 'Neler Yapıyorum',
        items: [
          {
            title: 'Backend Geliştirme',
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
          {
            title: 'Makine Öğrenmesi',
            description: 'Python ile veri analitiği çözümleri sunuyorum.',
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
        title: 'MSET – Arıza Tespit Sistemi',
        description: 'Python ve PostgreSQL kullanılarak geliştirilen sistem, sanayi tesislerinde arızaları tahmin eder.',
      },
      project2: {
        title: 'Sağlıkta – Yapay Zeka Sağlık Platformu',
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
