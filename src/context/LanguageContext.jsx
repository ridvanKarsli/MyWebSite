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
      openToWork: 'Open to Work',
      location: 'Turkey',
      backendDeveloper: 'Backend Developer',
      backendSpecialty: 'Specialized in building scalable backend systems and RESTful APIs',
    },
    about: {
      title: 'About Me',
      description: 'I am a highly motivated and solution-oriented Java Backend & Full Stack Developer specialized in Spring Boot systems.',
      journey: {
        title: 'My Journey',
        content1: 'I actively take part in full-cycle software projects, delivering sustainable and scalable solutions.',
        content2: 'With expertise in layered architecture, RESTful APIs, and PostgreSQL, I also build user interfaces using React and Swift.',
      },
      keyStrengths: {
        title: 'Key Strengths',
        item1: 'Backend Development Specialist',
        item2: 'Spring Boot & Java Expert',
        item3: 'RESTful API Design',
        item4: 'Database Optimization',
        item5: 'Microservices Architecture',
        quote: 'Building robust and scalable backend solutions',
      },
      timeline: {
        title: 'Timeline',
        education: {
          title: 'Education',
          content: 'Manisa Celal Bayar University – Computer Engineering (2022 – Present)\nKütahya Dumlupınar University – Computer Programming (2020 – 2022)',
        },
        experience: {
          title: 'Work Experience',
          content: 'Software & Database Specialist – Yalın Otomasyon (2025 – Present)\nJava Developer – ENM Digital (2024 – Present)\nSoftware Engineer – Kalem Web Software (2023 – 2024)',
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
      services: {
        title: 'Services',
        subtitle: 'Professional software development services tailored to your needs',
        items: [
          {
            title: 'Dynamic Websites',
            description: 'Modern, responsive and interactive web applications built with React and modern technologies.',
          },
          {
            title: 'Backend Systems',
            description: 'Scalable and secure backend systems developed with Java, Spring Boot and PostgreSQL.',
          },
          {
            title: 'Software Solutions',
            description: 'Complete software solutions from design to deployment, covering all aspects of development.',
          },
        ],
      },
    },
    projects: {
      title: 'My Projects',
      description: 'Highlighted projects built with modern technologies and a strong focus on user experience.',
      viewGithub: 'View on GitHub',
      viewDemo: 'Live Demo',
      viewAllProjects: 'View All Projects',
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
    workExperience: {
      title: 'Work Experience',
      subtitle: 'Professional journey and key contributions in software development',
      keyAchievements: 'Key Achievements',
      technologiesUsed: 'Technologies Used',
      yalin: {
        jobTitle: 'Software & Database Specialist',
        company: 'Yalın Otomasyon',
        duration: '2025 - Present',
        type: 'Full-time',
        location: 'Turkey',
        description: 'Developing backend modules and control algorithms that process real-time data. Designing real-time backend modules that process sensor data. Creating data collection, analysis, and reporting systems on PostgreSQL.',
        achievements: [
          'Developed software modules that increase the stability of the production process',
          'Created systems that reduce error detection time',
          'Designed real-time backend modules that process sensor data',
          'Developed data collection, analysis, and reporting systems on PostgreSQL',
        ],
      },
      emn: {
        jobTitle: 'Java Developer',
        company: 'ENM Digital',
        duration: '2024 - Present',
        type: 'Volunteer',
        location: 'Turkey (Remote)',
        description: 'Developing REST services running in production environment with Spring Boot. Developing interface/mobile components with React, Kotlin, and Swift. Working on service design, validation, error management, and multi-layered architecture. Developing API integrations for AI-powered systems.',
        achievements: [
          'Developed REST services running in production environment',
          'Created service architectures that reduce processing times on platforms',
          'Designed service architectures that strengthen modular structure',
          'Developed API integrations for AI-powered systems',
        ],
      },
      kalem: {
        jobTitle: 'Software Engineer',
        company: 'Kalem Web Software',
        duration: '2023 - 2024',
        type: 'Full-time',
        location: 'Turkey',
        description: 'Developed Java & React-based enterprise web applications. Created and optimized database models on PostgreSQL. Participated in API integration processes. Developed software components actively running in production environment.',
        achievements: [
          'Developed Java & React-based enterprise web applications',
          'Designed backend modules that increase the stability of customer applications',
          'Created software components that reduce maintenance costs',
          'Created and optimized database models on PostgreSQL',
        ],
      },
    },
    skillCategories: {
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile',
      database: 'Database',
      tools: 'Tools',
    },
    common: {
      technicalSkills: 'Technical Skills',
      present: 'Present',
      fullTime: 'Full-time',
      volunteer: 'Volunteer',
      remote: 'Remote',
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
      openToWork: 'İş Arıyorum',
      location: 'Türkiye',
      backendDeveloper: 'Backend Geliştirici',
      backendSpecialty: 'Ölçeklenebilir backend sistemleri ve RESTful API geliştirme konusunda uzmanım',
    },
    about: {
      title: 'Hakkımda',
      description: 'Spring Boot temelli sistemlerde uzmanlaşmış, yüksek motivasyonlu bir Java Backend & Full Stack geliştiriciyim.',
      journey: {
        title: 'Yolculuğum',
        content1: 'Uçtan uca yazılım projelerinde aktif rol alarak sürdürülebilir ve ölçeklenebilir çözümler sunuyorum.',
        content2: 'Katmanlı mimari, RESTful API ve PostgreSQL uzmanlığımın yanında React ve Swift ile arayüzler geliştiriyorum.',
      },
      keyStrengths: {
        title: 'Temel Güçlü Yönlerim',
        item1: 'Backend Geliştirme Uzmanı',
        item2: 'Spring Boot & Java Uzmanı',
        item3: 'RESTful API Tasarımı',
        item4: 'Veritabanı Optimizasyonu',
        item5: 'Mikroservis Mimarisi',
        quote: 'Güçlü ve ölçeklenebilir backend çözümleri geliştiriyorum',
      },
      timeline: {
        title: 'Zaman Çizelgesi',
        education: {
          title: 'Eğitim',
          content: 'Manisa Celal Bayar Üniversitesi – Bilgisayar Mühendisliği (2022 – Devam Ediyor)\nKütahya Dumlupınar Üniversitesi – Bilgisayar Programcılığı (2020 – 2022)',
        },
        experience: {
          title: 'İş Deneyimi',
          content: 'Yazılım & Veritabanı Uzmanı – Yalın Otomasyon (2025 – Devam Ediyor)\nJava Developer – ENM Digital (2024 – Devam Ediyor)\nYazılım Mühendisi – Kalem Web Software (2023 – 2024)',
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
      services: {
        title: 'Verilen Hizmetler',
        subtitle: 'İhtiyaçlarınıza özel profesyonel yazılım geliştirme hizmetleri',
        items: [
          {
            title: 'Dinamik Web Siteleri',
            description: 'React ve modern teknolojilerle geliştirilmiş, responsive ve interaktif web uygulamaları.',
          },
          {
            title: 'Backend Sistemleri',
            description: 'Java, Spring Boot ve PostgreSQL ile geliştirilmiş ölçeklenebilir ve güvenli backend sistemleri.',
          },
          {
            title: 'Yazılım Çözümleri',
            description: 'Tasarımdan deploy aşamasına kadar tüm geliştirme süreçlerini kapsayan eksiksiz yazılım çözümleri.',
          },
        ],
      },
    },
    projects: {
      title: 'Projelerim',
      description: 'İşte öne çıkan projelerim. Her biri kullanıcı deneyimi ve modern teknolojilere odaklıdır.',
      viewGithub: "GitHub'da Gör",
      viewDemo: 'Canlı Demo',
      viewAllProjects: 'Tüm Projeleri Gör',
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
    workExperience: {
      title: 'İş Deneyimi',
      subtitle: 'Yazılım geliştirme alanındaki profesyonel yolculuğum ve önemli katkılarım',
      keyAchievements: 'Önemli Başarılar',
      technologiesUsed: 'Kullanılan Teknolojiler',
      yalin: {
        jobTitle: 'Yazılım & Veritabanı Uzmanı',
        company: 'Yalın Otomasyon',
        duration: '2025 - Devam Ediyor',
        type: 'Tam Zamanlı',
        location: 'Türkiye',
        description: 'Gerçek zamanlı veri işleyen backend modülleri ve kontrol algoritmaları geliştiriyorum. Sensör verilerini işleyen gerçek zamanlı backend modülleri tasarlıyorum. PostgreSQL üzerinde veri toplama, analiz ve raporlama sistemleri oluşturuyorum.',
        achievements: [
          'Üretim sürecinin stabilitesini artıran yazılım modülleri geliştirdim',
          'Hata tespit süresini kısaltan sistemler oluşturdum',
          'Sensör verilerini işleyen gerçek zamanlı backend modülleri tasarladım',
          'PostgreSQL üzerinde veri toplama, analiz ve raporlama sistemleri geliştirdim',
        ],
      },
      emn: {
        jobTitle: 'Java Developer',
        company: 'ENM Digital',
        duration: '2024 - Devam Ediyor',
        type: 'Gönüllü',
        location: 'Türkiye (Uzaktan)',
        description: 'Spring Boot ile üretim ortamında çalışan REST servisleri geliştiriyorum. React, Kotlin ve Swift ile arayüz/mobil bileşenler geliştiriyorum. Servis tasarımı, validasyon, hata yönetimi ve çok katmanlı mimari üzerinde çalışıyorum. Yapay zeka destekli sistemler için API entegrasyonları geliştiriyorum.',
        achievements: [
          'Üretim ortamında çalışan REST servisleri geliştirdim',
          'Platformlardaki işlem sürelerini azaltan servis mimarileri oluşturdum',
          'Modüler yapıyı güçlendiren servis mimarileri tasarladım',
          'Yapay zeka destekli sistemler için API entegrasyonları geliştirdim',
        ],
      },
      kalem: {
        jobTitle: 'Yazılım Mühendisi',
        company: 'Kalem Web Software',
        duration: '2023 - 2024',
        type: 'Tam Zamanlı',
        location: 'Türkiye',
        description: 'Java & React tabanlı kurumsal web uygulamaları geliştirdim. PostgreSQL üzerinde veritabanı modelleri oluşturdum ve optimize ettim. API entegrasyon süreçlerinde görev aldım. Üretim ortamında aktif çalışan yazılım bileşenleri geliştirdim.',
        achievements: [
          'Java & React tabanlı kurumsal web uygulamaları geliştirdim',
          'Müşteri uygulamalarının stabilitesini artıran backend modülleri tasarladım',
          'Bakım maliyetini azaltan yazılım bileşenleri oluşturdum',
          'PostgreSQL üzerinde veritabanı modelleri oluşturdum ve optimize ettim',
        ],
      },
    },
    skillCategories: {
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobil',
      database: 'Veritabanı',
      tools: 'Araçlar',
    },
    common: {
      technicalSkills: 'Teknik Yetenekler',
      present: 'Devam Ediyor',
      fullTime: 'Tam Zamanlı',
      volunteer: 'Gönüllü',
      remote: 'Uzaktan',
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
