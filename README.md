# Dashboard Slicing Tsel

Dashboard React (Vite + Tailwind CSS v4). Dibuat sebagai starting point — konten HTML + Tailwind akan di-convert ke komponen React di `src/App.jsx`.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Struktur

- `src/App.jsx` — komponen utama, tempat konversi HTML + Tailwind
- `src/index.css` — entry Tailwind (`@import "tailwindcss";`)
- `vite.config.js` — sudah include plugin React + Tailwind
- Chart: `echarts` + `echarts-for-react` (lihat contoh di `src/App.jsx`)

## Push ke GitHub

```bash
git remote add origin <url-repo-github-kamu>
git branch -M main
git push -u origin main
```

## Deploy ke Vercel

1. Buka https://vercel.com/new dan import repo GitHub ini.
2. Vercel otomatis mendeteksi framework **Vite** — build command `npm run build`, output directory `dist`. Tidak perlu konfigurasi tambahan.
3. Klik Deploy.

Setiap push ke branch `main` akan otomatis trigger deploy baru (setelah project di-import sekali di Vercel).
