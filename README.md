# ridvankarsli.com

Kişisel web sitemin kaynak kodu. React 18, React Router ve Vite ile yazıldı; stil için düz CSS kullanılıyor.

## Çalıştırma

Node.js 18 veya üzeri gerekir.

```bash
npm install
npm run dev
```

Geliştirme sunucusu http://localhost:5174 adresinde açılır.

## Diğer komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run build` | `dist/` klasörüne üretim çıktısı alır |
| `npm run preview` | Üretim çıktısını yerelde sunar |
| `npm run lint` | ESLint kontrolü |
| `npm run format` | Prettier ile biçimlendirme |

## Yapı

```
src/
  i18n/content.js      Türkçe ve İngilizce tüm metinler, iletişim bilgileri
  i18n/LanguageContext Dil seçimi
  components/          Yerleşim, bölümler, ikonlar
  pages/               Genel bakış, Hakkımda, Projeler, İletişim
  styles/main.css      Renkler, tipografi ve yerleşim
```

Deneyim, proje veya yetenek eklemek için yalnızca `src/i18n/content.js` dosyasını düzenlemek yeterli.

## Yayın

Vercel üzerinde yayınlanıyor; `vercel.json` tüm yolları `index.html`'e yönlendirir.

## Lisans

MIT
