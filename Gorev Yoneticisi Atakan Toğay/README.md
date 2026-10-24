# 📝 Görev Yöneticisi (React + Tailwind CSS)

Web Geliştirme / JavaScript proje yönergesi kapsamında hazırlanmış TODO tarzı bir uygulama.

## Özellikler
- **Ekle:** Başlık, açıklama ve öncelik ile yeni görev
- **Listele:** Tümü / Devam Eden / Tamamlanan filtresi ve arama
- **Güncelle:** Görevi satır içinde düzenleme, tamamlandı işaretleme
- **Sil:** Onay ile silme
- Veriler **LocalStorage**'da saklanır (sayfa yenilense de kaybolmaz)

## Teknolojiler
ReactJS 19, Vite, Tailwind CSS 4, LocalStorage

## Klasör Yapısı
```
src/
├── Components/   Header, TaskForm, TaskItem, TaskList, FilterBar
├── Pages/        Home
├── Interfaces/   task.js (Task tipi, sabitler, createTask)
├── hooks/        useLocalStorage
├── App.jsx
└── main.jsx
```

## Çalıştırma
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ klasörünü üretir
```

## Yayına Alma (Netlify)
Repo'yu Netlify'a bağla; `netlify.toml` build ayarlarını (`npm run build`, `dist`) içerir.

## Ekran Görüntüsü
![Ekran görüntüsü](./screenshot.png)


##Not
bazı anlamadığım yerlerde yapay zekadan yardım aldım saygılarımla
