# Portofolio M. Fadhil Anhar

Portofolio pribadi berbasis Next.js, React, TypeScript, Tailwind CSS, dan Framer Motion.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Next.js. Untuk memeriksa build produksi, jalankan `npm run build`.

## Melengkapi konten portofolio

Konten utama tersimpan di `lib/data.ts`. Field opsional sengaja dibiarkan kosong/tidak ditampilkan sampai materi aslinya tersedia.

### Detail proyek

Setiap objek di `projects` menerima field berikut:

- `image`: path screenshot, misalnya `"/projects/sapakampus-home.png"`; simpan berkas di `public/projects/`.
- `imageAlt`: deskripsi singkat screenshot untuk aksesibilitas.
- `contribution`, `challenge`, `outcome`: peran yang benar-benar dikerjakan, masalah, dan hasil proyek.
- `demoUrl`, `repoUrl`: tautan demo dan repositori jika tersedia.

Contoh bentuk data:

```ts
{
  title: "Nama proyek",
  role: "Peran dalam proyek",
  desc: "Masalah yang diselesaikan dan gambaran singkat solusinya.",
  stack: ["Teknologi"],
  image: "/projects/nama-proyek.png",
  imageAlt: "Tampilan halaman utama proyek",
  contribution: "Bagian yang dikerjakan",
  challenge: "Tantangan yang dihadapi",
  outcome: "Hasil yang dapat dibuktikan",
  demoUrl: "https://contoh-domain.test",
  repoUrl: "https://github.com/akun/repositori",
}
```

Hapus field yang belum ada datanya. Preview, uraian kontribusi/tantangan/hasil, dan tautan hanya muncul saat diisi.

### Bukti keahlian

Tambahkan item ke array `skillEvidence` di `lib/data.ts` untuk menampilkan galeri hasil desain atau antarmuka. Simpan screenshot di `public/`, lalu isi `title`, `category`, `description`, `image`, dan `imageAlt`. `url` dan `urlLabel` bersifat opsional. Bagian galeri tidak tampil jika array masih kosong.

### CV

Simpan CV terbaru dalam PDF di folder `public/`, lalu isi field `cvUrl` pada objek `profile`, misalnya `cvUrl: "/cv-anhar.pdf"`. Tombol unduh akan tampil setelah field ini diisi; field yang kosong tidak menampilkan tombol.

## Preferensi tampilan

Gunakan sakelar di navigasi atas untuk tema gelap/terang dan kontrol di kanan bawah untuk animasi foto profil. Animasi section dan kartu berulang saat masuk kembali ke layar, serta mengikuti preferensi `prefers-reduced-motion` perangkat.
