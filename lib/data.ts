export type Profile = {
  name: string
  email: string
  phone: string
  github: string
  instagram: string
  cvUrl?: string
}

export const profile: Profile = {
  name: "M. Fadhil Anhar",
  email: "mfadhilanhar@gmail.com",
  phone: "0895393859635",
  github: "https://github.com/anhrxf",
  instagram: "https://www.instagram.com/anhrxf_/",
  // Isi setelah CV siap, misalnya "/cv-anhar.pdf" (simpan file di public/).
}

export type Project = {
  title: string
  role: string
  desc: string
  stack: string[]
  image?: string
  imageAlt?: string
  contribution?: string
  challenge?: string
  outcome?: string
  demoUrl?: string
  repoUrl?: string
}

export type SkillEvidence = {
  title: string
  category: string
  description: string
  image: string
  imageAlt: string
  url?: string
  urlLabel?: string
}

// Hanya cantumkan proyek dengan informasi yang sudah tersedia.
export const projects: Project[] = [
  {
    title: "SiBanjir",
    role: "Proyek kelompok, mata kuliah Rekayasa Perangkat Lunak",
    desc: "Sistem pelaporan banjir untuk BPBD Kota Palembang, supaya laporan warga masuk ke satu tempat dan bisa ditindaklanjuti. Dokumen proyek mencakup test plan dengan 59 test case dan 4 skenario end-to-end, serta unit test report.",
    stack: ["Node.js", "Jest", "Test Plan", "Unit Test"],
  },
  {
    title: "SIPP — Sistem Informasi Pemesanan Pulang Pergi",
    role: "Ketua tim & Backend Developer, Proyek Akhir Pengembangan Aplikasi Web II",
    desc: "Proposal aplikasi web pemesanan tiket travel antarkota untuk membantu penumpang melihat jadwal dan sisa kursi, lalu memesan perjalanan tanpa konfirmasi manual. Rancangan fitur mencakup pemilihan kursi, simulasi pembayaran, e-tiket dengan QR Code, validasi tiket dan pembaruan status perjalanan oleh driver, daftar tunggu otomatis, serta dasbor admin untuk mengelola armada, jadwal, dan pesanan.",
    stack: ["Laravel 13", "PHP 8.3", "MongoDB", "Blade", "Tailwind CSS", "Alpine.js", "QR Code"],
  },
  {
    title: "SapaKampus",
    role: "Proyek aplikasi web",
    desc: "Aplikasi untuk membantu mahasiswa berlatih menyusun pesan kepada dosen. Fitur mencakup analisis struktur pesan berbasis aturan lokal, saran diksi, template untuk berbagai keperluan akademik, dan panduan etika komunikasi.",
    stack: ["React", "TypeScript", "Vite"],
  },
]

export const skills = [
  {
    name: "Designer",
    desc: "Merancang antarmuka dan alur pengguna agar mudah dipahami: dari wireframe, prototype, sampai sistem visual yang konsisten.",
    items: ["UI design", "Wireframing", "Prototyping", "Design system", "Figma"],
  },
  {
    name: "Web Developer",
    desc: "Membangun website responsif dari desain sampai berjalan di browser, dengan kode yang rapi dan mudah dirawat.",
    items: ["HTML dan CSS", "JavaScript dan TypeScript", "React dan Next.js", "Tailwind CSS"],
  },
  {
    name: "Tools & Produktivitas",
    desc: "Ahli menggunakan Microsoft Word dan Canva untuk mendukung kebutuhan dokumen dan desain visual.",
    items: ["Microsoft Word", "Canva"],
  },
]

// Tambahkan bukti karya keahlian setelah screenshot dan tautannya siap.
export const skillEvidence: SkillEvidence[] = []
