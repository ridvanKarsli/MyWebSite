// Sitedeki tüm metinler. Yeni bir iş/proje eklemek için ilgili diziye bir kayıt eklemek yeterli.

export const contact = {
  email: 'rdvn.35050@gmail.com',
  phone: '0553 699 91 19',
  phoneHref: 'tel:+905536999119',
  github: 'https://github.com/ridvanKarsli',
  linkedin: 'https://linkedin.com/in/ridvan-karsli-44a783294',
};

const tr = {
  meta: {
    homeTitle: 'Rıdvan Şevki Karslı — Java Backend Geliştirici',
    homeDescription:
      'Java, Spring Boot ve PostgreSQL ile ölçeklenebilir backend servisleri geliştiren yazılım mühendisi. İzmir.',
    aboutTitle: 'Hakkımda — Rıdvan Şevki Karslı',
    projectsTitle: 'Projeler — Rıdvan Şevki Karslı',
    contactTitle: 'İletişim — Rıdvan Şevki Karslı',
    notFoundTitle: 'Sayfa bulunamadı — Rıdvan Şevki Karslı',
  },
  nav: {
    home: 'Genel bakış',
    about: 'Hakkımda',
    projects: 'Projeler',
    contact: 'İletişim',
    menu: 'Menü',
    close: 'Kapat',
    switchLanguage: 'Switch to English',
    skip: 'İçeriğe geç',
    status: 'Şu anki görev',
  },
  identity: {
    role: 'Java Backend Geliştirici',
    location: 'İzmir, Türkiye',
    status: 'ENM Dijital’de yazılım mühendisi',
  },
  home: {
    headline: 'Üretimde güvenle çalışan backend sistemleri geliştiriyorum.',
    lead:
      'Java ve Spring Boot ile REST servisleri, veri modelleri ve entegrasyonlar üzerinde çalışıyorum. Şu anda yapay zekâ destekli müşteri deneyimi platformu Plukto’nun backend mimarisini geliştiriyorum.',
    primaryAction: 'İletişime geç',
    secondaryAction: 'Projeleri incele',
    factsLabel: 'Kısaca',
    facts: [
      { value: '3+ yıl', label: 'üretim ortamında backend geliştirme' },
      { value: '3', label: 'şirkette yazılım rolü' },
      { value: 'TR / EN', label: 'çalışma dilleri' },
    ],
  },
  sections: {
    focus: 'Çalışma alanlarım',
    experience: 'Deneyim',
    projects: 'Seçili projeler',
    education: 'Eğitim',
    skills: 'Teknik yetkinlikler',
    contact: 'İletişim',
    allProjects: 'Tüm projeler',
    fullProfile: 'Profilin tamamı',
  },
  focus: [
    {
      title: 'Backend servisleri',
      text: 'Spring Boot ile katmanlı mimaride, test edilebilir ve bakımı kolay servisler. Gerektiğinde mikroservis ayrımı, her zaman net sınırlar.',
    },
    {
      title: 'API ve veri modeli',
      text: 'OpenAPI ile belgelenmiş REST uç noktaları; PostgreSQL’de normalize edilmiş şemalar, migration yönetimi ve sorgu optimizasyonu.',
    },
    {
      title: 'Entegrasyon ve güvenlik',
      text: 'JWT tabanlı kimlik doğrulama, rol yönetimi, üçüncü parti API ve donanım entegrasyonları, performans iyileştirmeleri.',
    },
  ],
  experience: [
    {
      role: 'Yazılım Mühendisi',
      company: 'ENM Dijital',
      period: 'Ocak 2026 — Günümüz',
      place: 'Uzaktan, tam zamanlı',
      summary:
        'CeyBer Dijital’in yapay zekâ destekli müşteri deneyimi platformu Plukto için katmanlı mimari ve mikroservis yaklaşımıyla backend geliştiriyorum.',
      points: [
        'Platformun katmanlı backend mimarisini tasarladım',
        'PostgreSQL veri modellerini ve güvenli REST uç noktalarını oluşturdum',
        'voiceai.ceyberdigital.com üzerindeki ses ve metin analiz modüllerinin backend tarafında çalıştım',
      ],
    },
    {
      role: 'Yazılım Uzmanı',
      company: 'Yalın Otomasyon',
      period: 'Mayıs 2025 — Aralık 2025',
      place: 'İzmir, Bornova, tam zamanlı',
      summary:
        'Kurumsal müşteriler için otomasyon makinelerinin yazılımını geliştirdim, donanım ile yazılım arasındaki entegrasyonu yönettim.',
      points: [
        'Üretim hattının kararlılığını artıran backend modülleri geliştirdim',
        'Makine donanımı ile yazılım arasındaki entegrasyon süreçlerini yürüttüm',
        'Müşterilerle doğrudan çalışarak gereksinimleri analiz ettim ve çözümü teslim ettim',
      ],
    },
    {
      role: 'Stajyer Mühendis',
      company: 'ENM Dijital',
      period: 'Aralık 2024 — Aralık 2025',
      place: 'Uzaktan, staj',
      summary:
        'SwiftUI (iOS) ve Kotlin (Android) ile mobil uygulama geliştirme süreçlerinde yer aldım.',
      points: [
        'iOS ve Android tarafında yeni özellikler geliştirdim',
        'Backend servislerini mobil uygulamalara entegre ettim',
      ],
    },
    {
      role: 'Yazılım Mühendisi',
      company: 'Kalem Web Yazılım Ltd.',
      period: 'Şubat 2023 — Ekim 2024',
      place: 'Türkiye, tam zamanlı',
      summary:
        'Kurumsal web projeleri için sürdürülebilir ve ölçeklenebilir backend altyapıları geliştirdim.',
      points: [
        'Kurumsal projelere üretime hazır backend modülleri teslim ettim',
        'Modüler tasarımla bakım yükünü azalttım',
      ],
    },
  ],
  projects: [
    {
      name: 'Sağlıktan',
      kind: 'Topluluk platformu',
      summary:
        'Kronik ve nadir hastalıklarla yaşayan kişileri ve yakınlarını, hastalığa özel gruplarda bir araya getiren güvenli bir paylaşım platformu.',
      details: [
        'Hastalık grupları, gönderi ve yorum akışı',
        'Rol tabanlı yetkilendirme ve moderasyon',
        'Spring Boot REST API + React istemci',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
      repo: 'https://github.com/ridvanKarsli/SagliktanApi',
    },
    {
      name: 'Carbovira',
      kind: 'Endüstriyel simbiyoz API’si',
      summary:
        'Firmaların atıklarını başka bir firmanın hammaddesi olarak ilan edebildiği, ilanları arayıp birbirleriyle yazışabildiği REST API.',
      details: [
        'Özelliğe göre ayrılmış modüller',
        'JWT kimlik doğrulama, Flyway migration’ları',
        'Testcontainers ile uçtan uca testler',
      ],
      stack: ['Spring Boot', 'PostgreSQL', 'JWT', 'Flyway', 'MapStruct', 'Docker'],
      repo: 'https://github.com/ridvanKarsli/CarboviraRestAPI',
    },
  ],
  projectsPage: {
    intro:
      'Kişisel olarak geliştirdiğim ve kaynak kodu açık olan projeler. Şirket projeleri gizlilik nedeniyle burada yer almıyor; deneyim bölümünde özetleniyor.',
    repo: 'Kaynak kodu',
    stack: 'Teknolojiler',
    more: 'Diğer çalışmalarım GitHub profilimde.',
  },
  education: [
    {
      school: 'Manisa Celal Bayar Üniversitesi',
      program: 'Bilgisayar Mühendisliği, lisans',
      period: '2022 — Devam ediyor',
    },
    {
      school: 'Kütahya Dumlupınar Üniversitesi',
      program: 'Bilgisayar Programcılığı, ön lisans',
      period: '2020 — 2022',
    },
  ],
  skills: [
    { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'C#', '.NET 8', 'REST', 'Mikroservis'] },
    { group: 'Veri', items: ['PostgreSQL', 'Entity Framework Core', 'Flyway', 'SQL optimizasyonu', 'Veri modelleme'] },
    { group: 'Kalite', items: ['JUnit', 'Testcontainers', 'OpenAPI / Swagger', 'SOLID', 'Tasarım desenleri'] },
    { group: 'Diğer', items: ['React', 'Kotlin', 'SwiftUI', 'Docker', 'Git'] },
  ],
  about: {
    title: 'Hakkımda',
    paragraphs: [
      'Java ve Spring Boot ile üretim ortamında çalışan backend sistemleri geliştiren bir yazılım mühendisiyim. İşimin büyük kısmı servis tasarımı, veri modelleme ve sistemlerin birbiriyle güvenli şekilde konuşmasını sağlamak.',
      'Kod yazarken önce okunabilirliği ve değiştirilebilirliği düşünürüm: net katmanlar, küçük ve test edilebilir birimler, anlamlı isimler. Performans sorunlarını tahminle değil ölçümle ele alırım.',
      'Otomasyon sektöründe donanımla, mobil tarafta iOS ve Android ile çalışmış olmam, bir backend servisinin karşı tarafta nasıl kullanıldığını görmemi kolaylaştırıyor. Manisa Celal Bayar Üniversitesi’nde Bilgisayar Mühendisliği eğitimime devam ediyorum.',
    ],
    principlesTitle: 'Nasıl çalışırım',
    principles: [
      { title: 'Önce sözleşme', text: 'API’yi kodlamadan önce uç noktaları, hata yanıtlarını ve veri şeklini netleştiririm.' },
      { title: 'Test edilebilir tasarım', text: 'İş kurallarını altyapıdan ayırır, kritik akışları gerçek veritabanıyla test ederim.' },
      { title: 'Açık iletişim', text: 'Gereksinimi müşteriden veya ekipten doğrudan dinler, varsayımları yazılı hale getiririm.' },
    ],
  },
  contactPage: {
    title: 'İletişim',
    intro:
      'İş teklifleri, serbest projeler veya teknik sorular için yazabilirsiniz. Genellikle iki iş günü içinde dönüş yaparım.',
    channels: 'Doğrudan ulaşın',
    email: 'E-posta',
    phone: 'Telefon',
    location: 'Konum',
    formTitle: 'Mesaj yazın',
    formNote: 'Butona bastığınızda mesajınız e-posta uygulamanızda hazır olarak açılır.',
    name: 'Adınız',
    replyTo: 'E-posta adresiniz',
    subject: 'Konu',
    message: 'Mesajınız',
    send: 'E-posta uygulamasında aç',
    required: 'Bu alanı doldurun.',
    invalidEmail: 'Geçerli bir e-posta adresi girin.',
    opened: 'E-posta uygulamanız açıldı. Açılmadıysa doğrudan rdvn.35050@gmail.com adresine yazabilirsiniz.',
  },
  footer: {
    rights: 'Tüm hakları saklıdır.',
    source: 'Kaynak kodu',
  },
  notFound: {
    title: 'Bu sayfa bulunamadı.',
    text: 'Adres değişmiş ya da yanlış yazılmış olabilir.',
    back: 'Genel bakışa dön',
  },
};

const en = {
  meta: {
    homeTitle: 'Rıdvan Şevki Karslı — Java Backend Developer',
    homeDescription:
      'Software engineer building scalable backend services with Java, Spring Boot and PostgreSQL. Based in Izmir, Turkey.',
    aboutTitle: 'About — Rıdvan Şevki Karslı',
    projectsTitle: 'Projects — Rıdvan Şevki Karslı',
    contactTitle: 'Contact — Rıdvan Şevki Karslı',
    notFoundTitle: 'Page not found — Rıdvan Şevki Karslı',
  },
  nav: {
    home: 'Overview',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    switchLanguage: 'Türkçeye geç',
    skip: 'Skip to content',
    status: 'Current role',
  },
  identity: {
    role: 'Java Backend Developer',
    location: 'Izmir, Turkey',
    status: 'Software engineer at ENM Dijital',
  },
  home: {
    headline: 'I build backend systems that run reliably in production.',
    lead:
      'I work on REST services, data models and integrations with Java and Spring Boot. I am currently developing the backend architecture of Plukto, an AI-assisted customer experience platform.',
    primaryAction: 'Get in touch',
    secondaryAction: 'See projects',
    factsLabel: 'In short',
    facts: [
      { value: '3+ years', label: 'of backend work in production' },
      { value: '3', label: 'companies in software roles' },
      { value: 'TR / EN', label: 'working languages' },
    ],
  },
  sections: {
    focus: 'What I work on',
    experience: 'Experience',
    projects: 'Selected projects',
    education: 'Education',
    skills: 'Technical skills',
    contact: 'Contact',
    allProjects: 'All projects',
    fullProfile: 'Full profile',
  },
  focus: [
    {
      title: 'Backend services',
      text: 'Spring Boot services with a layered architecture that are easy to test and maintain. Split into microservices where it pays off, with clear boundaries either way.',
    },
    {
      title: 'APIs and data models',
      text: 'REST endpoints documented with OpenAPI; normalized PostgreSQL schemas, managed migrations and query optimization.',
    },
    {
      title: 'Integration and security',
      text: 'JWT-based authentication, role management, third-party API and hardware integrations, performance work.',
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'ENM Dijital',
      period: 'Jan 2026 — Present',
      place: 'Remote, full-time',
      summary:
        'Building the backend of Plukto, CeyBer Dijital’s AI-assisted customer experience platform, using a layered architecture and microservices.',
      points: [
        'Designed the platform’s layered backend architecture',
        'Built PostgreSQL data models and secure REST endpoints',
        'Worked on the backend of the voice and text analysis modules on voiceai.ceyberdigital.com',
      ],
    },
    {
      role: 'Software Specialist',
      company: 'Yalın Otomasyon',
      period: 'May 2025 — Dec 2025',
      place: 'Izmir, Bornova, full-time',
      summary:
        'Developed software for automation machines used by corporate clients and managed hardware–software integration.',
      points: [
        'Built backend modules that made the production line more stable',
        'Ran integration between machine hardware and software',
        'Worked directly with clients to analyze requirements and deliver the solution',
      ],
    },
    {
      role: 'Engineering Intern',
      company: 'ENM Dijital',
      period: 'Dec 2024 — Dec 2025',
      place: 'Remote, internship',
      summary: 'Took part in mobile development with SwiftUI (iOS) and Kotlin (Android).',
      points: [
        'Shipped new features on iOS and Android',
        'Integrated backend services into the mobile apps',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Kalem Web Software Ltd.',
      period: 'Feb 2023 — Oct 2024',
      place: 'Turkey, full-time',
      summary: 'Built maintainable, scalable backend infrastructure for corporate web projects.',
      points: [
        'Delivered production-ready backend modules for corporate projects',
        'Reduced maintenance effort through modular design',
      ],
    },
  ],
  projects: [
    {
      name: 'Sağlıktan',
      kind: 'Community platform',
      summary:
        'A safe space that brings people living with chronic and rare diseases, and their relatives, together in illness-specific groups.',
      details: [
        'Illness groups with posts and comments',
        'Role-based authorization and moderation',
        'Spring Boot REST API with a React client',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
      repo: 'https://github.com/ridvanKarsli/SagliktanApi',
    },
    {
      name: 'Carbovira',
      kind: 'Industrial symbiosis API',
      summary:
        'A REST API where companies list their waste as another company’s raw material, search listings and message each other.',
      details: [
        'Feature-based modules',
        'JWT authentication and Flyway migrations',
        'End-to-end tests with Testcontainers',
      ],
      stack: ['Spring Boot', 'PostgreSQL', 'JWT', 'Flyway', 'MapStruct', 'Docker'],
      repo: 'https://github.com/ridvanKarsli/CarboviraRestAPI',
    },
  ],
  projectsPage: {
    intro:
      'Personal projects with public source code. Company work is confidential and is summarized under experience instead.',
    repo: 'Source code',
    stack: 'Stack',
    more: 'More of my work is on my GitHub profile.',
  },
  education: [
    {
      school: 'Manisa Celal Bayar University',
      program: 'Computer Engineering, BSc',
      period: '2022 — Present',
    },
    {
      school: 'Kütahya Dumlupınar University',
      program: 'Computer Programming, associate degree',
      period: '2020 — 2022',
    },
  ],
  skills: [
    { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'C#', '.NET 8', 'REST', 'Microservices'] },
    { group: 'Data', items: ['PostgreSQL', 'Entity Framework Core', 'Flyway', 'SQL optimization', 'Data modeling'] },
    { group: 'Quality', items: ['JUnit', 'Testcontainers', 'OpenAPI / Swagger', 'SOLID', 'Design patterns'] },
    { group: 'Other', items: ['React', 'Kotlin', 'SwiftUI', 'Docker', 'Git'] },
  ],
  about: {
    title: 'About',
    paragraphs: [
      'I am a software engineer building production backend systems with Java and Spring Boot. Most of my work is service design, data modeling and making systems talk to each other securely.',
      'When I write code I think about readability and changeability first: clear layers, small testable units, meaningful names. I approach performance problems by measuring, not guessing.',
      'Having worked with hardware in industrial automation and with iOS and Android on the mobile side helps me see how a backend service is actually consumed. I am continuing my Computer Engineering degree at Manisa Celal Bayar University.',
    ],
    principlesTitle: 'How I work',
    principles: [
      { title: 'Contract first', text: 'Before writing the API I pin down endpoints, error responses and the shape of the data.' },
      { title: 'Testable design', text: 'I keep business rules apart from infrastructure and test critical flows against a real database.' },
      { title: 'Plain communication', text: 'I hear requirements directly from clients or the team and write assumptions down.' },
    ],
  },
  contactPage: {
    title: 'Contact',
    intro:
      'Write to me about job offers, freelance projects or technical questions. I usually reply within two business days.',
    channels: 'Reach me directly',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    formTitle: 'Write a message',
    formNote: 'Pressing the button opens your message, ready to send, in your email app.',
    name: 'Your name',
    replyTo: 'Your email',
    subject: 'Subject',
    message: 'Message',
    send: 'Open in email app',
    required: 'Fill in this field.',
    invalidEmail: 'Enter a valid email address.',
    opened: 'Your email app has been opened. If it did not open, write to rdvn.35050@gmail.com directly.',
  },
  footer: {
    rights: 'All rights reserved.',
    source: 'Source code',
  },
  notFound: {
    title: 'This page could not be found.',
    text: 'The address may have changed or been mistyped.',
    back: 'Back to overview',
  },
};

export const content = { tr, en };
