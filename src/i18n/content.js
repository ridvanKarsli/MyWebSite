// Sitedeki tüm metinler. Yeni bir iş/proje eklemek için ilgili diziye bir kayıt eklemek yeterli.

export const contact = {
  email: 'rdvn.35050@gmail.com',
  phone: '0553 699 91 19',
  phoneHref: 'tel:+905536999119',
  github: 'https://github.com/ridvanKarsli',
  linkedin: 'https://www.linkedin.com/in/r%C4%B1dvan-karsl%C4%B1-44a783294/',
};

const tr = {
  meta: {
    homeTitle: 'Rıdvan Şevki Karslı — Bilgisayar Mühendisi',
    homeDescription:
      'Java, Spring Boot, .NET ve React ile uçtan uca web uygulamaları geliştiren bilgisayar mühendisi. İzmir.',
    aboutTitle: 'Hakkımda — Rıdvan Şevki Karslı',
    projectsTitle: 'Projeler — Rıdvan Şevki Karslı',
    contactTitle: 'İletişim — Rıdvan Şevki Karslı',
    notFoundTitle: 'Sayfa bulunamadı — Rıdvan Şevki Karslı',
  },
  nav: {
    home: 'Ana sayfa',
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
    role: 'Bilgisayar Mühendisi',
    location: 'İzmir, Türkiye',
    status: 'Yaşar Bilgi’de yazılım geliştirme uzman yardımcısı',
  },
  home: {
    headline: 'Rıdvan Şevki Karslı',
    lead:
      'İzmir’de yaşayan bir bilgisayar mühendisiyim. Yaşar Bilgi’de yazılım geliştirme ekibinde çalışıyorum. Java, .NET ve React ile full stack projeler geliştiriyorum.',
  },
  sections: {
    experience: 'Deneyim',
    projects: 'Seçili projeler',
    education: 'Eğitim',
    skills: 'Teknik yetkinlikler',
    contact: 'İletişim',
    allProjects: 'Tüm projeler',
    fullProfile: 'Profilin tamamı',
  },
  experience: [
    {
      role: 'Yazılım Geliştirme Uzman Yardımcısı',
      company: 'Yaşar Bilgi',
      period: 'Eylül 2026 — Günümüz',
      place: 'İzmir, iş yerinde, tam zamanlı',
      summary: 'Yaşar Bilgi’nin yazılım geliştirme ekibinde kurumsal uygulamalar üzerinde çalışıyorum.',
      points: [],
    },
    {
      role: 'Yazılım Mühendisi',
      company: 'ENM Digital',
      period: 'Aralık 2025 — Ağustos 2026',
      place: 'Manisa, hibrit, tam zamanlı',
      summary:
        'CeyBer Dijital’in yapay zekâ destekli müşteri deneyimi platformu Plukto için katmanlı mimari ve mikroservis yaklaşımıyla backend geliştirdim.',
      points: [
        'Platformun katmanlı backend mimarisini tasarladım',
        'PostgreSQL veri modellerini ve güvenli REST uç noktalarını oluşturdum',
        'voiceai.ceyberdigital.com üzerindeki ses ve metin analiz modüllerinin backend tarafında çalıştım',
      ],
    },
    {
      role: 'Yazılım Uzmanı',
      company: 'Yalın Otomasyon',
      period: 'Mart 2025 — Aralık 2025',
      place: 'Kemalpaşa, İzmir, hibrit, tam zamanlı',
      summary:
        'Kurumsal müşteriler için otomasyon makinelerinin yazılımını geliştirdim, donanım ile yazılım arasındaki entegrasyonu yönettim.',
      points: [
        'Sensör verisini gerçek zamanlı işleyen backend modülleri geliştirdim',
        'PostgreSQL tabanlı veri toplama, analiz ve raporlama altyapısı kurdum',
        'Müşterilerle doğrudan çalışarak gereksinimleri analiz ettim ve çözümü teslim ettim',
      ],
    },
    {
      role: 'Stajyer Mühendis',
      company: 'ENM Digital',
      period: 'Aralık 2024 — Aralık 2025',
      place: 'Manisa, hibrit, staj',
      summary:
        'Proje Sihirbazı mobil uygulamasını SwiftUI (iOS) ve Kotlin (Android) ile geliştiren ekipte yer aldım.',
      points: [
        'iOS ve Android tarafında yeni özellikler geliştirdim',
        'Backend servislerini mobil uygulamalara entegre ettim',
      ],
    },
    {
      role: 'Bilgisayar Mühendisi',
      company: 'Kalem Web Yazılım Ltd. Şti.',
      period: 'Şubat 2023 — Ekim 2024',
      place: 'İzmir, uzaktan, tam zamanlı',
      summary:
        'Web geliştirici olarak kurumsal projelerin API ve backend tarafında çalıştım.',
      points: [
        'Kurumsal projelere üretime hazır backend modülleri teslim ettim',
        'Modüler tasarımla bakım yükünü azalttım',
      ],
    },
  ],
  projects: [
    {
      name: 'Sağlıktan',
      kind: 'Sağlık topluluğu platformu',
      summary:
        'Hastaları, hasta yakınlarını ve uzman doktorları hastalığa özel gruplarda bir araya getiren paylaşım platformu. Yayında.',
      details: [
        'Spring Boot ve Java 21 ile REST API, Spring Security ve JWT',
        'PostgreSQL ve Flyway ile şema yönetimi, OpenAPI dokümantasyonu',
        'React 19 arayüz; backend Railway’de, arayüz Vercel’de',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
      repo: 'https://github.com/ridvanKarsli/SagliktanApi',
      live: 'https://sagliktan.com',
      featured: true,
    },
    {
      name: 'taneHesap',
      kind: 'İşletme yönetim paneli',
      summary:
        'Birden fazla işletmenin modüllerini rol bazlı yönettiği, gerçek zamanlı bildirimli bir yönetim uygulaması.',
      details: [
        '.NET 10 Web API; Domain, Application, Infrastructure ve API katmanları',
        'ASP.NET Core Identity, JWT ve TOTP ile iki adımlı doğrulama',
        'React ve TypeScript arayüz, SignalR ile anlık bildirimler, PWA desteği',
      ],
      stack: ['.NET 10', 'ASP.NET Core', 'PostgreSQL', 'React', 'TypeScript', 'SignalR'],
      repo: 'https://github.com/ridvanKarsli/taneHesapApi',
      featured: true,
    },
    {
      name: 'Carbovira',
      kind: 'Endüstriyel simbiyoz API’si',
      summary:
        'Firmaların atıklarını başka bir firmanın hammaddesi olarak ilan edip aradığı, mesajlaşarak anlaştığı REST API.',
      details: [
        'Spring Boot ve Java 25, özelliğe göre ayrılmış modüller',
        'Flyway, MapStruct, Criteria API ile tek sorguda filtreleme',
        'Testcontainers ile uçtan uca testler, GitHub Actions ile CI',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Testcontainers'],
      repo: 'https://github.com/ridvanKarsli/CarboviraRestAPI',
      featured: true,
    },
    {
      name: 'TAMİ Ödeme SDK',
      kind: 'Java ödeme kütüphanesi',
      summary:
        'Garanti BBVA / TAMİ Sanal POS için bağımsız Java istemci kütüphanesi: satış, 3D Secure, ön otorizasyon, iptal/iade ve sorgulama.',
      details: [
        'Her işlem için senkron ve CompletableFuture ile asenkron kullanım',
        'JWK/JWS (HS512) ile istek imzalama',
        'Doğrulama, API, bağlantı ve güvenlik hatalarını ayıran istisna hiyerarşisi',
      ],
      stack: ['Java', 'Maven', 'JUnit'],
      repo: 'https://github.com/ridvanKarsli/tamiPaymentSdk',
    },
    {
      name: 'Blog platformu',
      kind: 'Yönetim panelli blog',
      summary:
        'Yazı, kategori, etiket ve medya yönetimi olan; tam metin arama ve site haritası sunan kişisel blog altyapısı.',
      details: [
        'Spring Boot API, HttpOnly çerezde JWT',
        'PostgreSQL tam metin arama, MinIO ile görsel depolama',
        'Next.js arayüz, Docker Compose ve Nginx ile tek komutla kurulum',
      ],
      stack: ['Spring Boot', 'Next.js', 'PostgreSQL', 'MinIO', 'Docker'],
      repo: 'https://github.com/ridvanKarsli/BlogBackend',
    },
    {
      name: 'Mollaoğlu İnşaat',
      kind: 'Kurumsal web sitesi',
      summary:
        'Bir inşaat firması için kurumsal site: hizmetler, filtrelenebilir proje listesi, proje detayları, kariyer ve teklif formu.',
      details: [
        'React ve Vite, çok sayfalı yönlendirme',
        'İçerik tek veri dosyasından yönetiliyor',
      ],
      stack: ['React', 'Vite', 'CSS'],
      repo: 'https://github.com/ridvanKarsli/mollaogluins',
    },
  ],
  projectsPage: {
    intro:
      'Kaynak kodu açık olan full stack ve backend projelerim. Şirket projeleri gizlilik nedeniyle burada yer almıyor; deneyim bölümünde özetleniyor.',
    repo: 'Kaynak kodu',
    live: 'Siteyi aç',
    stack: 'Teknolojiler',
    more: 'Mobil uygulamalar ve diğer çalışmalarım GitHub profilimde.',
  },
  education: [
    {
      school: 'Manisa Celal Bayar Üniversitesi',
      program: 'Bilgisayar Mühendisliği',
    },
    {
      school: 'Kütahya Dumlupınar Üniversitesi',
      program: 'Bilgisayar Programcılığı',
    },
  ],
  skills: [
    { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'C#', '.NET 10', 'ASP.NET Core', 'REST'] },
    { group: 'Arayüz', items: ['React', 'TypeScript', 'Next.js', 'Vite'] },
    { group: 'Veri', items: ['PostgreSQL', 'EF Core', 'Flyway', 'MinIO', 'Veri modelleme'] },
    { group: 'Kalite ve yayın', items: ['JUnit', 'xUnit', 'Testcontainers', 'GitHub Actions', 'Docker', 'Nginx'] },
    { group: 'Mobil', items: ['SwiftUI', 'Kotlin'] },
  ],
  about: {
    title: 'Hakkımda',
    paragraphs: [
      'İzmir’de yaşıyorum ve Eylül 2026’dan bu yana Yaşar Bilgi’de yazılım geliştirme uzman yardımcısı olarak çalışıyorum.',
      'Backend tarafında Java/Spring Boot ve .NET, arayüz tarafında React, TypeScript ve Next.js kullanıyorum. Daha önce Kalem Web’de kurumsal web projelerinde, Yalın Otomasyon’da endüstriyel otomasyon yazılımlarında ve ENM Digital’de hem mobil hem backend tarafında çalıştım.',
      'Manisa Celal Bayar Üniversitesi’nde Bilgisayar Mühendisliği, Kütahya Dumlupınar Üniversitesi’nde Bilgisayar Programcılığı okudum.',
    ],
  },
  contactPage: {
    title: 'İletişim',
    intro:
      'Bir proje, bir kod parçası ya da aklınıza takılan bir şey hakkında yazmak isterseniz e-posta kutum açık.',
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
    back: 'Ana sayfaya dön',
  },
};

const en = {
  meta: {
    homeTitle: 'Rıdvan Şevki Karslı — Computer Engineer',
    homeDescription:
      'Computer engineer building end-to-end web applications with Java, Spring Boot, .NET and React. Based in Izmir, Turkey.',
    aboutTitle: 'About — Rıdvan Şevki Karslı',
    projectsTitle: 'Projects — Rıdvan Şevki Karslı',
    contactTitle: 'Contact — Rıdvan Şevki Karslı',
    notFoundTitle: 'Page not found — Rıdvan Şevki Karslı',
  },
  nav: {
    home: 'Home',
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
    role: 'Computer Engineer',
    location: 'Izmir, Turkey',
    status: 'Assistant software development specialist at Yaşar Bilgi',
  },
  home: {
    headline: 'Rıdvan Şevki Karslı',
    lead:
      'I’m a computer engineer based in Izmir, working in the software development team at Yaşar Bilgi. I build full stack projects with Java, .NET and React.',
  },
  sections: {
    experience: 'Experience',
    projects: 'Selected projects',
    education: 'Education',
    skills: 'Technical skills',
    contact: 'Contact',
    allProjects: 'All projects',
    fullProfile: 'Full profile',
  },
  experience: [
    {
      role: 'Assistant Software Development Specialist',
      company: 'Yaşar Bilgi',
      period: 'Sep 2026 — Present',
      place: 'Izmir, on-site, full-time',
      summary: 'Working on enterprise applications in Yaşar Bilgi’s software development team.',
      points: [],
    },
    {
      role: 'Software Engineer',
      company: 'ENM Digital',
      period: 'Dec 2025 — Aug 2026',
      place: 'Manisa, hybrid, full-time',
      summary:
        'Built the backend of Plukto, CeyBer Dijital’s AI-assisted customer experience platform, using a layered architecture and microservices.',
      points: [
        'Designed the platform’s layered backend architecture',
        'Built PostgreSQL data models and secure REST endpoints',
        'Worked on the backend of the voice and text analysis modules on voiceai.ceyberdigital.com',
      ],
    },
    {
      role: 'Software Specialist',
      company: 'Yalın Otomasyon',
      period: 'Mar 2025 — Dec 2025',
      place: 'Kemalpaşa, Izmir, hybrid, full-time',
      summary:
        'Developed software for automation machines used by corporate clients and managed hardware–software integration.',
      points: [
        'Built backend modules that process sensor data in real time',
        'Set up PostgreSQL-based data collection, analysis and reporting',
        'Worked directly with clients to analyze requirements and deliver the solution',
      ],
    },
    {
      role: 'Engineering Intern',
      company: 'ENM Digital',
      period: 'Dec 2024 — Dec 2025',
      place: 'Manisa, hybrid, internship',
      summary:
        'Part of the team building the Proje Sihirbazı mobile app with SwiftUI (iOS) and Kotlin (Android).',
      points: [
        'Shipped new features on iOS and Android',
        'Integrated backend services into the mobile apps',
      ],
    },
    {
      role: 'Computer Engineer',
      company: 'Kalem Web Yazılım Ltd. Şti.',
      period: 'Feb 2023 — Oct 2024',
      place: 'Izmir, remote, full-time',
      summary: 'Worked as a web developer on the API and backend side of corporate projects.',
      points: [
        'Delivered production-ready backend modules for corporate projects',
        'Reduced maintenance effort through modular design',
      ],
    },
  ],
  projects: [
    {
      name: 'Sağlıktan',
      kind: 'Health community platform',
      summary:
        'Brings patients, their relatives and specialist doctors together in illness-specific groups. Live in production.',
      details: [
        'REST API with Spring Boot and Java 21, Spring Security and JWT',
        'PostgreSQL with Flyway migrations, OpenAPI documentation',
        'React 19 client; backend on Railway, front end on Vercel',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
      repo: 'https://github.com/ridvanKarsli/SagliktanApi',
      live: 'https://sagliktan.com',
      featured: true,
    },
    {
      name: 'taneHesap',
      kind: 'Business management panel',
      summary:
        'A management app where several businesses run their modules with role-based access and real-time notifications.',
      details: [
        '.NET 10 Web API with Domain, Application, Infrastructure and API layers',
        'ASP.NET Core Identity, JWT and TOTP two-factor authentication',
        'React and TypeScript client, SignalR notifications, PWA support',
      ],
      stack: ['.NET 10', 'ASP.NET Core', 'PostgreSQL', 'React', 'TypeScript', 'SignalR'],
      repo: 'https://github.com/ridvanKarsli/taneHesapApi',
      featured: true,
    },
    {
      name: 'Carbovira',
      kind: 'Industrial symbiosis API',
      summary:
        'A REST API where companies list their waste as another company’s raw material, search listings and agree on deals by message.',
      details: [
        'Spring Boot on Java 25 with feature-based modules',
        'Flyway, MapStruct, single-query filtering with the Criteria API',
        'End-to-end tests with Testcontainers, CI on GitHub Actions',
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Testcontainers'],
      repo: 'https://github.com/ridvanKarsli/CarboviraRestAPI',
      featured: true,
    },
    {
      name: 'TAMİ Payment SDK',
      kind: 'Java payment library',
      summary:
        'An independent Java client for the Garanti BBVA / TAMİ virtual POS: sales, 3D Secure, pre-authorization, cancel/refund and queries.',
      details: [
        'Synchronous and CompletableFuture-based async calls for every operation',
        'Request signing with JWK/JWS (HS512)',
        'Exception hierarchy separating validation, API, connection and security errors',
      ],
      stack: ['Java', 'Maven', 'JUnit'],
      repo: 'https://github.com/ridvanKarsli/tamiPaymentSdk',
    },
    {
      name: 'Blog platform',
      kind: 'Blog with admin panel',
      summary:
        'A personal blog engine with post, category, tag and media management, full-text search and a sitemap.',
      details: [
        'Spring Boot API with JWT in an HttpOnly cookie',
        'PostgreSQL full-text search, image storage on MinIO',
        'Next.js front end, one-command setup with Docker Compose and Nginx',
      ],
      stack: ['Spring Boot', 'Next.js', 'PostgreSQL', 'MinIO', 'Docker'],
      repo: 'https://github.com/ridvanKarsli/BlogBackend',
    },
    {
      name: 'Mollaoğlu İnşaat',
      kind: 'Company website',
      summary:
        'Website for a construction firm: services, a filterable project list, project pages, careers and a quote form.',
      details: ['React and Vite with multi-page routing', 'All content managed from a single data file'],
      stack: ['React', 'Vite', 'CSS'],
      repo: 'https://github.com/ridvanKarsli/mollaogluins',
    },
  ],
  projectsPage: {
    intro:
      'Full stack and backend projects with public source code. Company work is confidential and is summarized under experience instead.',
    repo: 'Source code',
    live: 'Open site',
    stack: 'Stack',
    more: 'Mobile apps and more of my work are on my GitHub profile.',
  },
  education: [
    {
      school: 'Manisa Celal Bayar University',
      program: 'Computer Engineering',
    },
    {
      school: 'Kütahya Dumlupınar University',
      program: 'Computer Programming',
    },
  ],
  skills: [
    { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'C#', '.NET 10', 'ASP.NET Core', 'REST'] },
    { group: 'Front end', items: ['React', 'TypeScript', 'Next.js', 'Vite'] },
    { group: 'Data', items: ['PostgreSQL', 'EF Core', 'Flyway', 'MinIO', 'Data modeling'] },
    { group: 'Quality and delivery', items: ['JUnit', 'xUnit', 'Testcontainers', 'GitHub Actions', 'Docker', 'Nginx'] },
    { group: 'Mobile', items: ['SwiftUI', 'Kotlin'] },
  ],
  about: {
    title: 'About',
    paragraphs: [
      'I live in Izmir and have been working at Yaşar Bilgi as an assistant software development specialist since September 2026.',
      'On the backend I use Java/Spring Boot and .NET; on the front end React, TypeScript and Next.js. Before this I worked on corporate web projects at Kalem Web, industrial automation software at Yalın Otomasyon, and both mobile and backend at ENM Digital.',
      'I studied Computer Engineering at Manisa Celal Bayar University and Computer Programming at Kütahya Dumlupınar University.',
    ],
  },
  contactPage: {
    title: 'Contact',
    intro:
      'If you’d like to talk about a project, a piece of code or anything else, my inbox is open.',
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
    back: 'Back to home',
  },
};

export const content = { tr, en };
