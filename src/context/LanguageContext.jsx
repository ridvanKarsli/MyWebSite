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
      description: 'I build scalable, high-performance backend services with Java, Spring Boot and .NET — powering AI-driven platforms with layered architecture, microservices, security, and PostgreSQL-based data management.',
      viewWork: 'See My Projects',
      contactMe: 'Contact Me',
      openToWork: 'Open to Work',
      location: 'Izmir / Bornova',
      backendDeveloper: 'Backend Developer',
      backendSpecialty: 'Specialized in building scalable backend systems and RESTful APIs',
    },
    about: {
      title: 'About Me',
      description: 'Software Engineer working in production with Java and Spring Boot, building scalable and sustainable backend systems. Currently developing the backend architecture for Plukto, an AI-powered customer experience platform.',
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
          content: 'Software Engineer – ENM Dijital (Jan 2026 – Present)\nSoftware Specialist – Yalın Otomasyon (May 2025 – Dec 2025)\nIntern Engineer – ENM Dijital (Dec 2024 – Dec 2025)\nSoftware Engineer – Kalem Web Software (Feb 2023 – Oct 2024)',
        },
        skills: {
          title: 'Skills',
          content: 'Java, Spring Boot, C#, .NET 8, REST API, Microservices, Security, OOP, Clean Code, SOLID, Design Patterns, Swagger/OpenAPI, JUnit, PostgreSQL, Entity Framework Core, SQL Optimization, Data Modeling, React, Kotlin, Swift, Git/GitHub, Algorithm Design, API Integrations',
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
        title: 'Sagliktan – Support Platform for Illness Communities',
        description: 'A safe community platform bringing together people living with chronic and rare diseases (and their relatives) in illness-specific groups to share experience and support. Built with Spring Boot, PostgreSQL, and React.',
      },
      project2: {
        title: 'Carbovira – Carbon Footprint & Industrial Symbiosis API',
        description: "A REST API where companies can list their waste as another company's raw material, search listings, and message each other — digitizing the industrial symbiosis concept. Feature-based modules, JWT auth, Flyway migrations, and Testcontainers-based E2E tests.",
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
      copyright: 'Ridvan Karsli. All rights reserved.',
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
      enmCurrent: {
        jobTitle: 'Software Engineer',
        company: 'ENM Dijital',
        duration: 'Jan 2026 - Present',
        type: 'Full-time',
        location: 'Remote',
        description: "Designing high-performance backend systems with layered architecture and microservices for Plukto, CeyBer Dijital's AI-powered customer experience platform. Building PostgreSQL data models and secure, RESTful endpoints. Contributing to backend development for voice/text AI analysis modules on voiceai.ceyberdigital.com.",
        achievements: [
          'Designed layered backend architecture for the AI-powered platform Plukto',
          'Built PostgreSQL data models and secure RESTful endpoints',
          'Contributed to AI-powered voice/text analysis modules on voiceai.ceyberdigital.com',
        ],
      },
      yalin: {
        jobTitle: 'Software Specialist',
        company: 'Yalın Otomasyon',
        duration: 'May 2025 - Dec 2025',
        type: 'Full-time',
        location: 'Izmir / Bornova',
        description: 'Developed software for automation machines for corporate clients and managed hardware-software integration processes. Communicated directly with client companies to analyze requirements and design and deliver fitting software solutions.',
        achievements: [
          'Built backend modules that improve production stability',
          'Managed hardware-software integration for automation machines',
          'Analyzed client needs directly and delivered tailored software solutions',
        ],
      },
      enmIntern: {
        jobTitle: 'Intern Engineer',
        company: 'ENM Dijital',
        duration: 'Dec 2024 - Dec 2025',
        type: 'Internship',
        location: 'Remote',
        description: 'Took an active role in mobile app development using SwiftUI (iOS) and Kotlin (Android). Worked on integrating backend services with mobile applications and applied modern software engineering principles in practice.',
        achievements: [
          'Built iOS features with SwiftUI and Android features with Kotlin',
          'Integrated backend services with mobile applications',
          'Applied modern software engineering principles in practice',
        ],
      },
      kalem: {
        jobTitle: 'Software Engineer',
        company: 'Kalem Web Software Ltd.',
        duration: 'Feb 2023 - Oct 2024',
        type: 'Full-time',
        location: 'Turkey',
        description: 'Designed and developed sustainable, scalable backend infrastructures for corporate web projects.',
        achievements: [
          'Delivered production-ready backend modules for enterprise web projects',
          'Designed backend components that improved system stability',
          'Reduced maintenance effort with modular backend designs',
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
      description: 'Java, Spring Boot ve .NET ile ölçeklenebilir, yüksek performanslı backend servisleri geliştiriyorum; yapay zekâ destekli platformlar için katmanlı mimari, mikroservis, güvenlik ve PostgreSQL odaklı veri yönetimi üzerine çalışıyorum.',
      viewWork: 'Projelerimi Gör',
      contactMe: 'İletişime Geç',
      openToWork: 'İş Arıyorum',
      location: 'İzmir / Bornova',
      backendDeveloper: 'Backend Geliştirici',
      backendSpecialty: 'Ölçeklenebilir backend sistemleri ve RESTful API geliştirme konusunda uzmanım',
    },
    about: {
      title: 'Hakkımda',
      description: 'Java ve Spring Boot ile üretim ortamında çalışan, ölçeklenebilir ve sürdürülebilir backend sistemler geliştiren bir Yazılım Mühendisiyim. Şu anda CeyBer Dijital\'in yapay zekâ destekli müşteri deneyimi platformu Plukto için backend mimarisi geliştiriyorum.',
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
          content: 'Yazılım Mühendisi – ENM Dijital (Ocak 2026 – Günümüz)\nYazılım Uzmanı – Yalın Otomasyon (Mayıs 2025 – Aralık 2025)\nStajyer Mühendis – ENM Dijital (Aralık 2024 – Aralık 2025)\nYazılım Mühendisi – Kalem Web Yazılım (Şubat 2023 – Ekim 2024)',
        },
        skills: {
          title: 'Yetenekler',
          content: 'Java, Spring Boot, C#, .NET 8, REST API, Mikroservis, Security, OOP, Clean Code, SOLID, Design Patterns, Swagger/OpenAPI, JUnit, PostgreSQL, Entity Framework Core, SQL Optimizasyonu, Veri Modelleme, React, Kotlin, Swift, Git/GitHub, Algoritma Tasarımı, API Entegrasyonları',
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
        title: 'Sağlıktan – Hastalık Toplulukları için Destek Platformu',
        description: 'Kronik ve nadir hastalıklarla yaşayan bireyleri ve yakınlarını hastalık gruplarında bir araya getiren, deneyim paylaşımına dayalı güvenli bir topluluk platformu. Spring Boot, PostgreSQL ve React ile geliştirildi.',
      },
      project2: {
        title: 'Carbovira – Karbon Ayak İzi ve Endüstriyel Simbiyoz API\'si',
        description: 'Firmaların atıklarını başka bir firmanın hammaddesi olarak ilan edebildiği, arayabildiği ve platform üzerinden iletişime geçebildiği, endüstriyel simbiyoz fikrini dijitalleştiren bir REST API. Özelliğe göre bölünmüş modüller, JWT kimlik doğrulama, Flyway migration\'ları ve Testcontainers tabanlı E2E testleri içerir.',
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
      copyright: 'Ridvan Karsli. Tüm hakları saklıdır.',
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
      enmCurrent: {
        jobTitle: 'Yazılım Mühendisi',
        company: 'ENM Dijital',
        duration: 'Ocak 2026 - Günümüz',
        type: 'Tam Zamanlı',
        location: 'Uzaktan',
        description: "CeyBer Dijital'in yapay zekâ destekli müşteri deneyimi platformu Plukto için katmanlı mimari ve mikroservis yaklaşımları kullanılarak yüksek performanslı backend sistemleri tasarlıyorum. PostgreSQL veri modellemelerini yapıyor, RESTful API standartlarına uygun güvenli uç noktalar oluşturuyorum. voiceai.ceyberdigital.com üzerinde sesli/yazılı yapay zekâ analiz modüllerinin backend geliştirme süreçlerinde rol alıyorum.",
        achievements: [
          "Plukto yapay zekâ platformu için katmanlı backend mimarisi tasarladım",
          'PostgreSQL veri modellemeleri ve güvenli RESTful uç noktalar oluşturdum',
          'voiceai.ceyberdigital.com için yapay zekâ destekli ses/metin analiz modüllerinde rol aldım',
        ],
      },
      yalin: {
        jobTitle: 'Yazılım Uzmanı',
        company: 'Yalın Otomasyon',
        duration: 'Mayıs 2025 - Aralık 2025',
        type: 'Tam Zamanlı',
        location: 'İzmir / Bornova',
        description: 'Kurumsal firmalara yönelik otomasyon makineleri için yazılımlar geliştirdim ve donanım-yazılım entegrasyon süreçlerini yönettim. Müşteri firmalarla doğrudan iletişim kurarak ihtiyaçları analiz ettim ve probleme uygun yazılım çözümünü tasarlayıp aktardım.',
        achievements: [
          'Üretim sürecinin stabilitesini artıran backend modülleri geliştirdim',
          'Otomasyon makineleri için donanım-yazılım entegrasyon süreçlerini yönettim',
          'Müşteri ihtiyaçlarını doğrudan analiz ederek uygun yazılım çözümleri sundum',
        ],
      },
      enmIntern: {
        jobTitle: 'Stajyer Mühendis',
        company: 'ENM Dijital',
        duration: 'Aralık 2024 - Aralık 2025',
        type: 'Staj',
        location: 'Uzaktan',
        description: 'SwiftUI (iOS) ve Kotlin (Android) teknolojileri kullanılarak mobil uygulama geliştirme süreçlerinde aktif rol aldım. Backend servislerinin mobil uygulamalarla entegrasyonunu ve modern yazılım mühendisliği prensiplerinin pratiğe dökülmesini sağladım.',
        achievements: [
          'SwiftUI ile iOS ve Kotlin ile Android özellikleri geliştirdim',
          'Backend servislerini mobil uygulamalarla entegre ettim',
          'Modern yazılım mühendisliği prensiplerini pratiğe döktüm',
        ],
      },
      kalem: {
        jobTitle: 'Yazılım Mühendisi',
        company: 'Kalem Web Yazılım Ltd.',
        duration: 'Şubat 2023 - Ekim 2024',
        type: 'Tam Zamanlı',
        location: 'Türkiye',
        description: 'Kurumsal web projeleri için sürdürülebilir, ölçeklenebilir backend altyapılarının tasarlanması ve geliştirilmesinde görev aldım.',
        achievements: [
          'Kurumsal web projeleri için üretime hazır backend modülleri teslim ettim',
          'Sistem stabilitesini artıran backend bileşenleri tasarladım',
          'Modüler backend tasarımlarıyla bakım maliyetini azalttım',
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
