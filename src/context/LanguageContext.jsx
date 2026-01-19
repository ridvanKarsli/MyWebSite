import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      title: 'Rıdvan Şevki Karslı',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, my name is',
      name: 'RIDVAN ŞEVKİ KARSLI',
      title: 'Java Backend Developer',
      description: 'I build scalable, high-performance backend services with Java & Spring Boot, focusing on clean architecture, security, and PostgreSQL-based data management.',
      viewWork: 'See My Projects',
      contactMe: 'Contact Me',
      openToWork: 'Open to Work',
      location: 'Izmir / Bornova',
      backendDeveloper: 'Backend Developer',
      backendSpecialty: 'Specialized in building scalable backend systems and RESTful APIs',
    },
    about: {
      title: 'About Me',
      description: 'Java & Spring Boot specialist focused on scalable, secure, and maintainable backend services for production environments.',
      skillsSection: {
        subtitle: 'Core technologies and tools I use in day-to-day development.',
      },
      journey: {
        title: 'My Journey',
        content1: 'Experienced in REST API design, data modeling, layered architecture, security, and performance optimization with PostgreSQL.',
        content2: 'I apply Clean Code, SOLID, modular architecture, and testing practices to deliver sustainable backend solutions.',
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
          content: 'Java, Spring Boot, REST API, Security, Microservices, OOP, Clean Code, SOLID, Swagger/OpenAPI, JUnit, PostgreSQL, SQL Optimization, Data Modeling, React, Kotlin, Swift, Git/GitHub, Algorithm Design, API Integrations',
        },
      },
      features: {
        title: 'What I Do',
        items: [
          {
            title: 'Backend Service Development',
            description: 'Building scalable Spring Boot services with clean architecture and robust APIs.',
          },
          {
            title: 'API & Data Modeling',
            description: 'Designing REST APIs and PostgreSQL data models with performance optimization.',
          },
          {
            title: 'Integrations & Performance',
            description: 'Implementing API integrations, security, and performance improvements.',
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
        title: 'Sagliktan – Chronic Disease Platform',
        description: 'Platform connecting chronic patients with specialists. Built with Spring Boot, PostgreSQL, React, and AI-powered analytics.',
      },
      project2: {
        title: 'MSET – Early Fault Detection System',
        description: 'Backend modules and data pipelines for multi-sensor analysis and fault detection in automation systems.',
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
      title: 'RIDVAN ŞEVKİ KARSLI',
      description: 'Java Backend Developer focused on scalable, secure services with Spring Boot and PostgreSQL.',
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
        duration: '2025 - 2026',
        type: 'Full-time',
        location: 'Izmir / Bornova',
        description: 'Developing real-time data processing backend modules and control algorithms. Building data collection, analysis, and reporting systems on PostgreSQL.',
        achievements: [
          'Built backend modules that improve production stability',
          'Designed real-time sensor data processing pipelines',
          'Implemented PostgreSQL-based data analysis and reporting systems',
          'Reduced fault detection time with automation-focused modules',
        ],
      },
      emn: {
        jobTitle: 'Software Engineer',
        company: 'ENM Digital',
        duration: '2024 - 2025 Volunteer Intern → 2025 - Present Software Engineer',
        type: 'Internship / Full-time',
        location: 'Remote',
        description: 'Developing production-grade REST services with Spring Boot and supporting React, Kotlin, and Swift components. Worked as a volunteer intern in 2024–2025 and promoted to Software Engineer in 2025. Working on service design, validation, error handling, and layered architecture with AI-related API integrations.',
        achievements: [
          'Delivered production REST services with Spring Boot',
          'Optimized service architectures to reduce processing times',
          'Strengthened modular structure through layered design',
          'Built API integrations for AI-powered systems',
        ],
      },
      kalem: {
        jobTitle: 'Software Engineer',
        company: 'Kalem Web Software',
        duration: '2023 - 2024',
        type: 'Full-time',
        location: 'Turkey',
        description: 'Developed Java & React-based enterprise applications. Built and optimized PostgreSQL data models and contributed to API integrations in production systems.',
        achievements: [
          'Delivered production-ready Java & React modules',
          'Designed backend components that improved system stability',
          'Reduced maintenance effort with modular backend designs',
          'Optimized PostgreSQL data models and queries',
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
      title: 'Rıdvan Şevki Karslı',
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    hero: {
      greeting: 'Merhaba, benim adım',
      name: 'RIDVAN ŞEVKİ KARSLI',
      title: 'Java Backend Geliştirici',
      description: 'Java & Spring Boot ile ölçeklenebilir, yüksek performanslı backend servisleri geliştiriyorum; güvenlik ve PostgreSQL odaklı veri yönetimi üzerine çalışıyorum.',
      viewWork: 'Projelerimi Gör',
      contactMe: 'İletişime Geç',
      openToWork: 'İş Arıyorum',
      location: 'İzmir / Bornova',
      backendDeveloper: 'Backend Geliştirici',
      backendSpecialty: 'Ölçeklenebilir backend sistemleri ve RESTful API geliştirme konusunda uzmanım',
    },
    about: {
      title: 'Hakkımda',
      description: 'Spring Boot odaklı, ölçeklenebilir ve sürdürülebilir backend servisleri geliştiren Java Backend geliştiricisiyim.',
      skillsSection: {
        subtitle: 'Günlük geliştirmede kullandığım temel teknoloji ve araçlar.',
      },
      journey: {
        title: 'Yolculuğum',
        content1: 'REST API tasarımı, veri modeli oluşturma, katmanlı mimari, güvenlik ve performans optimizasyonu konularında deneyimliyim.',
        content2: 'Clean Code, SOLID, modüler mimari ve test odaklı geliştirme prensipleriyle sürdürülebilir çözümler üretiyorum.',
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
          content: 'Java, Spring Boot, REST API, Security, Mikroservis, OOP, Clean Code, SOLID, Swagger/OpenAPI, JUnit, PostgreSQL, SQL Optimizasyonu, Veri Modelleme, React, Kotlin, Swift, Git/GitHub, Algoritma Tasarımı, API Entegrasyonları',
        },
      },
      features: {
        title: 'Neler Yapıyorum',
        items: [
          {
            title: 'Backend Servis Geliştirme',
            description: 'Spring Boot ile ölçeklenebilir ve güvenli servisler geliştiriyorum.',
          },
          {
            title: 'API & Veri Modeli Tasarımı',
            description: 'REST API ve PostgreSQL veri modellerini performans odaklı tasarlıyorum.',
          },
          {
            title: 'Entegrasyon & Performans',
            description: 'API entegrasyonları, güvenlik ve performans iyileştirmeleri yapıyorum.',
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
        description: 'Spring Boot, PostgreSQL ve React ile kronik hastaları uzmanlarla buluşturan platform. AI destekli analiz entegrasyonları içerir.',
      },
      project2: {
        title: 'MSET – Erken Arıza Tespit Sistemi',
        description: 'Çok değişkenli sensör verilerini işleyen veri pipeline’ları ve arıza tespit modülleri.',
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
      title: 'RIDVAN ŞEVKİ KARSLI',
      description: 'Spring Boot ve PostgreSQL odaklı, ölçeklenebilir backend servisleri geliştiren Java Backend geliştiricisi.',
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
        duration: '2025 - 2026',
        type: 'Tam Zamanlı',
        location: 'İzmir / Bornova',
        description: 'Gerçek zamanlı veri işleyen backend modülleri ve kontrol algoritmaları geliştiriyorum. PostgreSQL üzerinde veri toplama, analiz ve raporlama sistemleri oluşturuyorum.',
        achievements: [
          'Üretim sürecinin stabilitesini artıran backend modülleri geliştirdim',
          'Sensör verilerini işleyen gerçek zamanlı modüller tasarladım',
          'PostgreSQL tabanlı veri analiz ve raporlama sistemi kurdum',
          'Hata tespit süresini kısaltan yazılım bileşenleri geliştirdim',
        ],
      },
      emn: {
        jobTitle: 'Yazılım Mühendisi',
        company: 'ENM Digital',
        duration: '2024 - 2025 Gönüllü Stajyer → 2025 - Devam Ediyor Yazılım Mühendisi',
        type: 'Tam Zamanlı',
        location: 'Uzaktan',
        description: 'Spring Boot ile üretim ortamında çalışan REST servisleri geliştiriyorum. 2024–2025 döneminde gönüllü stajyer olarak başladım, 2025’te Yazılım Mühendisi rolüne terfi aldım. React, Kotlin ve Swift ile arayüz/mobil bileşenler geliştiriyorum. Servis tasarımı, validasyon, hata yönetimi ve çok katmanlı mimari üzerinde çalışıyorum. Yapay zeka destekli sistemler için API entegrasyonları geliştiriyorum.',
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
          'Kurumsal web uygulamaları için Java & React modülleri geliştirdim',
          'Müşteri uygulamalarının stabilitesini artıran backend modülleri tasarladım',
          'Bakım maliyetini azaltan yazılım bileşenleri geliştirdim',
          'PostgreSQL veri modellerini oluşturup optimize ettim',
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
