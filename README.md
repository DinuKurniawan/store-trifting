# Thrift Corner 👕 Vintage & Streetwear Orisinal Bandung

Website satu halaman untuk toko thrift / vintage streetwear "Thrift Corner" — katalog online dengan pemesanan via WhatsApp.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Static Site](https://img.shields.io/badge/Static_Site-25331D)

## Tentang Proyek

Thrift Corner adalah website statis satu halaman berbahasa Indonesia untuk toko vintage di Bandung. Pengunjung bisa menjelajahi kategori, memfilter koleksi "1 of 1", melihat detail tiap produk dalam popup, lalu memesan langsung lewat tombol "Beli via WhatsApp" yang pesannya sudah terisi otomatis.

Tidak ada backend, database, atau proses build — cukup buka file-nya di browser dan website langsung jalan.

## Fitur Utama

- Navbar sticky dengan menu aktif otomatis (scroll spy) dan drawer hamburger di HP
- Hero dengan animasi masuk berurutan dan efek parallax ringan
- Kategori (6 kartu) dan Koleksi Terbaru (8 produk)
- Tab filter produk: Semua, Outerwear, Vintage T-Shirt, Celana, Dress & Tops
- Popup detail produk: galeri 4 foto, tabel ukuran presisi, catatan kondisi, status SOLD OUT, accordion info, dan produk terkait
- Tombol "Detail" dan "Beli via WhatsApp" di tiap kartu (popup bisa ditutup lewat tombol X, klik backdrop, atau tombol Escape)
- Form ulasan dengan validasi (nama wajib, rating bintang, ulasan min. 20 karakter, upload foto max 5MB) — khusus tampilan, belum menyimpan data
- Animasi scroll halus (IntersectionObserver) yang menghormati `prefers-reduced-motion`
- Tombol WhatsApp melayang yang muncul setelah hero, dan progress bar scroll di atas halaman

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML5 (`index.html`) | Struktur seluruh halaman dan semua section |
| Tailwind CSS v4 via CDN (`@tailwindcss/browser@4`) | Styling utility-first, warna custom lewat arbitrary value (mis. `bg-[#25331D]`) dan blok `@theme` |
| JavaScript vanilla (`app.js`) | Render produk, filter, popup, form ulasan, dan animasi scroll |
| Google Fonts | Space Grotesk (judul) dan Plus Jakarta Sans (isi) |
| Material Symbols Outlined | Semua ikon di website |
| Unsplash | Foto produk dan hero (sementara, sebaiknya diganti foto asli toko) |

## Struktur Halaman

- `#beranda` — Beranda (hero)
- `#kategori` — Kategori Pilihan
- `#koleksi` — Koleksi Terbaru + tab filter + grid produk (`#productGrid`)
- `#cara-belanja` — 4 Langkah Mudah Belanja Thrift
- `#tentang` — Cerita di Balik Thrift Corner
- `#testimoni` — Cerita Pelanggan + form ulasan (`#form-ulasan`, `#reviewForm`)
- `#kontak` — Konsultasi & Kunjungan Studio
- Footer — navigasi, pembayaran, ekspedisi

## Cara Menjalankan

**Cara 1 — buka langsung (paling mudah):**

1. Download / clone folder proyek ini.
2. Klik dua kali file `index.html` — website terbuka di browser.

**Cara 2 — local server (disarankan):**

```bash
npx serve .
```

Lalu buka alamat yang muncul (biasanya `http://localhost:3000`). Alternatif: install ekstensi **Live Server** di VS Code, klik kanan `index.html` → **Open with Live Server**.

> Butuh koneksi internet, karena Tailwind, font Google, foto, dan peta dimuat dari CDN.

## Panduan Kustomisasi

### Nomor WhatsApp dan pesan otomatis

Nomor dipakai di satu tempat, di `app.js` baris atas:

```js
const WA = "6281234567890";
const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
```

Ganti `6281234567890` dengan nomor toko (format: kode negara tanpa `+`, mis. `62812xxxxxxx`). Semua tombol beli memakai fungsi `waLink()`, jadi cukup ganti di sini — kecuali link statis di `index.html` (navbar, hero, kontak, footer, tombol melayang), yang masih tertulis manual sebagai `https://wa.me/6281234567890?...`. Cari `wa.me/` di `index.html` dan ganti semuanya.

Untuk mengubah isi pesan otomatis, edit teks di dalam `waLink(...)`, contoh di fungsi `cardHTML()`:

```js
const waMsg = `Halo Thrift Corner! Saya mau beli ${p.name} (${p.brand}, size ${p.size}) ${rupiah(p.price)}. Apakah masih ada?`;
```

### Instagram, TikTok, alamat, jam buka, dan Google Maps

- Cari `@thriftcorner.id` dan `@thriftcorner_vintage` di `index.html` untuk mengganti username Instagram/TikTok.
- Alamat (`Jl. Riau No. 42, Citarum, Bandung`) dan jam (`10.00–22.00 WIB`, admin `09.00–21.00 WIB`) ada di section `#kontak` — edit teksnya langsung.
- Peta memakai `<iframe>` Google Maps embed; ganti atribut `src`-nya dengan link embed alamat barumu (dari Google Maps → Bagikan → Sematkan peta).

### Produk: tambah, edit, dan tandai SOLD OUT

Produk **bukan** ditulis di HTML — semuanya ada di array `PRODUCTS` di `app.js`, lalu digambar otomatis oleh fungsi `renderGrid()` lewat template `cardHTML()`. Untuk menambah produk, tambah satu object:

```js
{
  id: "nama-unik-produk", brand: "Nama Brand", name: "Nama Produk Lengkap",
  cat: "outerwear", // pilihan: outerwear | tshirt | celana | dress
  catLabel: "Outerwear", price: 250000, original: 400000,
  size: "L", measure: "LD 54 × P 72 cm",
  condition: "9/10", material: "Katun 100%", soldOut: false,
  desc: "Deskripsi singkat produk...",
  ukuran: { dada: 54, panjang: 72, lengan: 22, bahu: 47 },
  note: "Catatan jujur tentang kondisi barang...",
  images: ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"],
},
```

Keterangan:

- `cat` menentukan tab filter mana yang menampilkan produk ini.
- `price` tampil sebagai harga (difformat otomatis oleh fungsi `rupiah()`), `original` tampil dicoret.
- Untuk menandai **SOLD OUT**, ubah `soldOut: false` menjadi `soldOut: true` — kartu otomatis jadi abu-abu dengan label merah dan tombol "Terjual", dan popup-nya ikut menyesuaikan.
- Ganti URL di `images` dengan foto asli produk (4 sudut berbeda).

### Warna dan font

Tidak ada file `tailwind.config` — warna ditulis langsung sebagai arbitrary value (contoh: `bg-[#25331D]`, `text-[#FF915A]`). Token utama:

| Token | Nilai |
|---|---|
| Hijau olive (primer) | `#25331D` / `#3B4A32` |
| Terracotta / oranye (aksen) | `#9B4413` / `#FF915A` |
| Background krem | `#F6FBEF` / `#F1F5EA` |

Untuk mengganti warna global, cari-dan-ganti (find & replace) kode hex-nya di `index.html` dan `app.js`. Font diatur di blok `<style type="text/tailwindcss">` (`--font-display`, `--font-body`) plus link Google Fonts di `<head>`.

### Data popup produk

Popup digambar oleh fungsi `renderModal()` di `app.js` dari object produk yang diklik (`openModal(id)` → `renderModal()`, ditutup dengan `closeModal()` via tombol `#modalClose`, klik `#modalBackdrop`, atau Escape). Jadi cukup edit object produk di `PRODUCTS` (judul, harga, ukuran di `ukuran`, dan array `images`) — popup ikut berubah sendiri.

## Deploy

**GitHub Pages:**

1. Buat repository baru di GitHub, upload `index.html` dan `app.js` ke branch `main`.
2. Buka Settings → Pages → Source pilih `main` / root.
3. Simpan — website online di `https://username.github.io/nama-repo`.

**Netlify:**

1. Buka [app.netlify.com](https://app.netlify.com) → Add new site → Deploy manually.
2. Drag & drop folder proyek (berisi `index.html` + `app.js`).
3. Selesai — dapat URL `*.netlify.app` (bisa ganti nama di Site settings).

**Vercel:**

1. Buka [vercel.com](https://vercel.com) → Add New → Project → Import repository GitHub berisi file proyek.
2. Framework Preset pilih **Other**, biarkan semua setting default.
3. Klik Deploy — dapat URL `*.vercel.app`.

## Keterbatasan & Rencana Pengembangan

Jujur dulu sebelum online:

1. **Form ulasan hanya tampilan.** Data tidak tersimpan ke mana pun (validasi dan banner "Terima kasih!" jalan murni di browser). Untuk menampung ulasan betulan, sambungkan ke **Formspree**, **Google Forms**, atau **Google Sheets**.
2. **Data produk tertulis di kode** (array `PRODUCTS` di `app.js`). Untuk update stok yang lebih mudah, pindahkan ke file **JSON** terpisah atau **Google Sheets** sebagai mini-database.
3. **Tailwind via CDN** (`@tailwindcss/browser@4`) ditujukan untuk prototyping — file-nya berat untuk production. Untuk versi produksi, build dengan **Tailwind CLI** agar CSS-nya ramping.
4. **Foto masih dari Unsplash dan avatar dari pravatar.** Ganti dengan foto asli barang toko, simpan di folder `assets/` atau CDN sendiri agar tidak bergantung pada link luar.
5. **Konten placeholder yang wajib diganti:** nomor WhatsApp `6281234567890`, username sosmed, alamat showroom, testimoni contoh (Dimas, Sarah, Reza), serta angka `4.9 / 5` dan `128+ ulasan` di section testimoni.

## Struktur Folder

```text
store-trifting/
├── index.html   # Struktur halaman + styling + section
├── app.js       # Data produk (PRODUCTS) + popup + filter + form + animasi
├── README.md    # File ini
└── assets/      # (opsional, belum ada) taruh foto produk asli di sini
```

## Lisensi

> **Catatan:** pilih salah satu sebelum dipublikasikan — lisensi **MIT** (bebas dipakai siapa pun) atau **All rights reserved** (hak cipta penuh milik toko).

## Kontak

- WhatsApp pemilik: `+62 812-xxxx-xxxx` *(ganti dengan nomor asli)*
- Instagram: `@thriftcorner.id` *(ganti bila berbeda)*
