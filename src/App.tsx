import React, { useState, useEffect } from 'react';
import {
  Camera,
  Video,
  PenTool,
  Mic,
  ArrowUpRight,
  Sparkles,
  Users,
  Calendar,
  Newspaper,
  Search,
  ChevronRight,
  Play,
  Award,
  Layers,
  Globe,
  CheckCircle2,
  X,
  Menu,
  Filter,
  ExternalLink,
  Heart,
  Share2,
  Eye,
  Compass,
  BookOpen,
  Send
} from 'lucide-react';

// --- CUSTOM SVG COMPONENTS ---

// Logo UKM Multimedia JGU (Inspired by the Blue Ribbon 'M' + Play Icon)
const MultimediaLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="mmGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00c6ff" />
        <stop offset="100%" stopColor="#0342ab" />
      </linearGradient>
      <linearGradient id="mmGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0342ab" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    {/* Left Ribbon of M */}
    <path
      d="M16 78C16 50 22 25 32 25C40 25 42 52 44 72"
      stroke="url(#mmGrad1)"
      strokeWidth="13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Middle Ribbon of M */}
    <path
      d="M44 72C46 48 52 25 62 25C70 25 71 48 71 68"
      stroke="url(#mmGrad2)"
      strokeWidth="13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Play Triangle Integration on Right */}
    <path
      d="M68 38L90 53L68 68V38Z"
      fill="url(#mmGrad1)"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Hand-drawn style curved neon arrow (SocialFi Reference Style)
const DoodleArrowLeft = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M25 85C15 55 45 25 55 55C65 85 35 105 95 70"
      stroke="#a3e635"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M78 62L98 68L88 88"
      stroke="#a3e635"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DoodleArrowRight = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 45C45 10 95 20 85 55C78 78 48 82 45 90"
      stroke="#a3e635"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35 72L43 93L66 86"
      stroke="#a3e635"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SmallDoodleArrow = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M15 20C5 45 30 55 45 35C52 25 58 28 65 25"
      stroke="#0f172a"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M54 18L67 24L59 37"
      stroke="#0f172a"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- DATA ---

const PENGURUS_DATA = [
  {
    id: 'ketum',
    role: 'Ketua Umum',
    shortRole: 'Ketum',
    name: 'Rangga Syahgani',
    category: 'BPH',
    handle: '@rangga.syhghni',
    quote: 'Memimpin Barisan Terdepan Multimedia menuju ekosistem kreatif yang kolaboratif dan berdampak.',
    tasks: ['Penanggung jawab tertinggi seluruh aktivitas UKM Multimedia JGU', 'Menentukan arah kebijakan strategis & kemitraan eksternal', 'Mengkoordinasikan BPH dan seluruh Kepala Departemen'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    badge: 'BPH INTI'
  },
  {
    id: 'waketum',
    role: 'Wakil Ketua Umum',
    shortRole: 'Waketum',
    name: 'Nabila Putri A.',
    category: 'BPH',
    handle: '@nabilaptr.jgu',
    quote: 'Menjaga sinergi internal dan memastikan setiap departemen berkembang sesuai potensinya.',
    tasks: ['Mendampingi Ketua Umum dalam pengawasan internal organisasi', 'Mengevaluasi kinerja program kerja tiap departemen', 'Menjaga harmonisasi dan kaderisasi anggota Baramedia'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    badge: 'BPH INTI'
  },
  {
    id: 'sekre',
    role: 'Sekretaris Umum',
    shortRole: 'Sekretaris',
    name: 'Alya Rahmadani',
    category: 'BPH',
    handle: '@alyarahma_',
    quote: 'Kerapian administrasi dan dokumentasi adalah fondasi organisasi yang profesional.',
    tasks: ['Mengelola surat-menyurat, proposal, dan LPJ kegiatan', 'Mengarsipkan database anggota dan inventaris organisasi', 'Notulensi rapat BPH dan rapat umum anggota'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
    badge: 'ADMINISTRASI'
  },
  {
    id: 'bendahara',
    role: 'Bendahara Umum',
    shortRole: 'Bendahara',
    name: 'Siti Zahra N.',
    category: 'BPH',
    handle: '@zahranur_mm',
    quote: 'Transparansi dan akuntabilitas pengelolaan finansial untuk mendukung karya tanpa batas.',
    tasks: ['Merancang Rencana Anggaran Biaya (RAB) periode kepengurusan', 'Mengelola kas rutin, dana kegiatan, dan pembukuan keuangan', 'Melakukan audit dan laporan keuangan berkala'],
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80',
    badge: 'FINANSIAL'
  },
  {
    id: 'humas',
    role: 'Hubungan Masyarakat',
    shortRole: 'Humas',
    name: 'Dinda Maharani',
    category: 'BPH',
    handle: '@dindamhrn',
    quote: 'Menjadi jembatan komunikasi antara UKM Multimedia, sivitas akademika JGU, dan pihak eksternal.',
    tasks: ['Menjalin relasi dengan UKM lain di dalam & luar Jakarta Global University', 'Mengelola komunikasi kemitraan dan media partner', 'Menjadi juru bicara resmi dalam kegiatan kolaborasi'],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
    badge: 'PUBLIC RELATIONS'
  },
  {
    id: 'kadep-foto',
    role: 'Kadep & Wakadep Fotografi',
    shortRole: 'Fotografi',
    name: 'Fajar Pratama & Dimas A.',
    category: 'KADEP',
    handle: '@dept.foto.jgu',
    quote: 'Membekukan momen berharga menjadi cerita visual yang tak lekang oleh waktu.',
    tasks: ['Koordinasi tim dokumentasi foto seluruh event kampus JGU', 'Pelatihan teknik fotografi, lighting studio, dan color grading', 'Kurasi karya foto untuk pameran dan publikasi sosial media'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80',
    badge: 'DEPT. FOTOGRAFI'
  },
  {
    id: 'kadep-video',
    role: 'Kadep & Wakadep Videografi',
    shortRole: 'Videografi',
    name: 'Reza Mahendra & Kevin S.',
    category: 'KADEP',
    handle: '@dept.video.jgu',
    quote: 'Menghidupkan imajinasi melalui sinematografi, ritme visual, dan audio yang menggugah.',
    tasks: ['Produksi aftermovie kegiatan besar JGU (PBAK, Wisuda, Festival)', 'Pembuatan konten Reels/TikTok kreatif dan profil organisasi', 'Mentoring penulisan naskah, kameramen, hingga post-production'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80',
    badge: 'DEPT. VIDEOGRAFI'
  },
  {
    id: 'kadep-mnd',
    role: 'Kadep & Wakadep Media & Design',
    shortRole: 'Media & Desain',
    name: 'Bagas Aditia & Raka P.',
    category: 'KADEP',
    handle: '@dept.mnd.jgu',
    quote: 'Membangun identitas visual yang ikonik, estetik, dan komunikatif di setiap piksel.',
    tasks: ['Merancang grand design feeds Instagram @multimediajgu', 'Membuat poster event, hari besar, microblog, dan aset merchandise', 'Eksplorasi tipografi, UI/UX, dan ilustrasi digital'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80',
    badge: 'DEPT. MnD'
  },
  {
    id: 'kadep-pers',
    role: 'Kadep & Wakadep Pers',
    shortRole: 'Pers',
    name: 'Nadia Safira & Tiara K.',
    category: 'KADEP',
    handle: '@dept.pers.jgu',
    quote: 'Menyuarakan fakta, merangkai kata, dan mengabarkan inspirasi dari sudut kampus JGU.',
    tasks: ['Meliput berita terkini seputar kegiatan internal JGU & mahasiswa', 'Menulis press release, caption edukatif, dan artikel buletin', 'Melakukan wawancara eksklusif dengan tokoh kampus & narasumber'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80',
    badge: 'DEPT. PERS'
  }
];

const DEPARTMENTS_DATA = [
  {
    id: 'fotografi',
    name: 'Departemen Fotografi',
    shortName: 'FOTOGRAFI',
    icon: Camera,
    tagline: 'Capture The Unseen, Freeze The Emotion',
    description:
      'Departemen Fotografi adalah garda terdepan dalam mengabadikan setiap momen bersejarah di Jakarta Global University. Mulai dari stage photography, human interest, hingga studio photoshoot untuk kebutuhan branding kepengurusan.',
    skills: ['Stage & Event Photography', 'Studio Lighting Setup', 'Adobe Lightroom & Raw Processing', 'Visual Storytelling', 'Street Hunting'],
    stats: { members: '28 Anggota', projects: '45+ Liputan/Tahun', gear: 'DSLR & Mirrorless Ready' },
    gallery: [
      { title: 'Photoshoot Kabinet Baramedia', tag: 'Studio & Outdoor', img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Dokumentasi PBAK JGU', tag: 'Stage Photography', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
      { title: 'Hunting Foto Kota Tua & Urban', tag: 'Street Photography', img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'videografi',
    name: 'Departemen Videografi',
    shortName: 'VIDEOGRAFI',
    icon: Video,
    tagline: 'Motion, Emotion & Cinematic Vision',
    description:
      'Departemen Videografi berfokus pada penciptaan karya audio-visual bergerak yang sinematik. Kami memproduksi video profil, aftermovie event kampus, podcast kreatif, hingga konten pendek (Reels/TikTok) yang dinamis.',
    skills: ['Cinematography & Directing', 'Gimbal & Camera Movement', 'Premiere Pro & DaVinci Resolve', 'Sound Design & Audio Mixing', 'Motion Graphics'],
    stats: { members: '24 Anggota', projects: '30+ Produksi Video', gear: '4K Cinema & Gimbal Stabilizer' },
    gallery: [
      { title: 'Aftermovie PBAK JGU', tag: 'Cinematic Aftermovie', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80' },
      { title: 'Company Profile Baramedia', tag: 'Creative Directing', img: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80' },
      { title: 'Behind The Scene Produksi', tag: 'Documentary', img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'mnd',
    name: 'Departemen Media & Design (MnD)',
    shortName: 'MEDIA & DESIGN',
    icon: PenTool,
    tagline: 'Crafting Visual Identity & Aesthetic Grids',
    description:
      'Departemen Media & Design (MnD) adalah otak di balik tampilan visual Instagram @multimediajgu yang ikonik dengan perpaduan warna biru-putih, efek glassmorphism, dan tipografi modern. Kami mengubah informasi menjadi karya visual yang memikat.',
    skills: ['Social Media Grid Branding', 'Poster & Flyer Manipulation', 'Typography & Layouting', 'Adobe Photoshop & Illustrator', 'UI/UX & Digital Assets'],
    stats: { members: '26 Anggota', projects: '120+ Feeds & Poster', gear: 'Creative Cloud & Figma' },
    gallery: [
      { title: 'Grand Design Feed Baramedia', tag: 'Social Media Identity', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
      { title: 'Poster Peringatan Hari Besar', tag: 'Digital Manipulation', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80' },
      { title: 'Merchandise & Lanyard Resmi', tag: 'Apparel Design', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pers',
    name: 'Departemen Pers & Jurnalistik',
    shortName: 'PERS',
    icon: Mic,
    tagline: 'Voice of Truth, Storyteller of Campus',
    description:
      'Departemen Pers berperan sebagai pusat informasi, jurnalistik kampus, dan redaksi UKM Multimedia JGU. Mengemas berita seputar prestasi mahasiswa, agenda universitas, liputan lapangan, hingga copywriting konten media sosial.',
    skills: ['Campus Journalism & Reporting', 'In-Depth Interviewing', 'Creative Copywriting', 'Press Release & Editorial', 'Public Speaking & Voice Over'],
    stats: { members: '20 Anggota', projects: '60+ Liputan & Artikel', gear: 'Wireless Mic & Press ID' },
    gallery: [
      { title: 'Liputan Eksklusif Event Kampus', tag: 'Live Reporting', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80' },
      { title: 'Wawancara Tokoh & Rektorat JGU', tag: 'Press Interview', img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80' },
      { title: 'Redaksi Buletin Baramedia', tag: 'Editorial & Copywriting', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

const ACTIVITIES_DATA = [
  {
    id: 'act-1',
    title: 'Liputan & Dokumentasi PBAK JGU',
    category: 'Campus Event',
    date: 'September 2024',
    highlightBadge: 'PBAK 2024',
    department: 'All Departments',
    description: 'Tim Baramedia terjun langsung mengawal Pengenalan Budaya Akademik dan Kemahasiswaan (PBAK) Jakarta Global University melalui live report, stage photography, dan produksi aftermovie resmi.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Aftermovie 4K PBAK JGU', '300+ Curated High-Res Photos', 'Live Story & Press Release Harian']
  },
  {
    id: 'act-2',
    title: 'MM Peduli Sesama: Bakti Sosial & Dokumentasi Kemanusiaan',
    category: 'Social Action',
    date: 'Ramadan / April',
    highlightBadge: 'MM PEDULI SESAMA',
    department: 'BPH & Humas',
    description: 'Program kepedulian sosial UKM Multimedia JGU untuk berbagi kebahagiaan kepada masyarakat sekitar kampus sekaligus mendokumentasikan kisah-kisah inspiratif penuh makna.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Penyaluran Donasi & Santunan', 'Human Interest Photo Series', 'Video Dokumenter Singkat']
  },
  {
    id: 'act-3',
    title: 'Photoshoot & Launching Kabinet BARAMEDIA',
    category: 'Internal Activity',
    date: 'Awal Periode',
    highlightBadge: 'ACTIVITY',
    department: 'Fotografi & MnD',
    description: 'Sesi pemotretan konsep wide-angle dan fish-eye berbalut almamater dan jaket kebanggaan JGU, dilanjutkan dengan olah digital bergaya Y2K Blue Aura di feed Instagram resmi.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    deliverables: ['99+ Postingan Grid Estetik', 'Perkenalan BPH & 4 Departemen', 'Rebranding Visual Identity']
  },
  {
    id: 'act-4',
    title: 'Workshop Kreatif: Mastering Visual & Jurnalistik Era Digital',
    category: 'Workshop',
    date: 'Program Rutin',
    highlightBadge: 'KELAS MULTIMEDIA',
    department: '4 Departemen',
    description: 'Pelatihan intensif bagi seluruh anggota UKM Multimedia JGU untuk mengasah skill teknis pengoperasian kamera, tata cahaya, desain grafis, hingga penulisan berita kampus.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Praktik Lapangan Langsung', 'Mentoring Bersama Alumni & Praktisi', 'Portofolio Karya Anggota']
  }
];

const NEWS_DATA = [
  {
    id: 'news-1',
    title: 'Resmi Dilantik! Kabinet BARAMEDIA Siap Jadi Barisan Terdepan Multimedia di JGU',
    category: 'Internal Multimedia',
    date: '14 Okt 2026',
    author: 'Redaksi Departemen Pers',
    readTime: '3 Menit Baca',
    excerpt: 'Mengusung semangat pembaruan dan estetika visual modern, kepengurusan UKM Multimedia JGU periode terbaru meluncurkan identitas visual biru-putih yang segar.',
    content: `Jakarta Global University (JGU) — UKM Multimedia JGU resmi memperkenalkan jajaran pengurus terbaru di bawah nama kebanggaan BARAMEDIA (Barisan Terdepan Multimedia). Melalui rangkaian unggahan kreatif di akun Instagram resmi @multimediajgu, struktur Badan Pengurus Harian (BPH) mulai dari Ketua Umum, Wakil Ketua Umum, Sekretaris, Bendahara, Humas, hingga empat departemen utama tampil dengan konsep visual yang berani.\n\nEmpat pilar departemen yang menjadi motor penggerak organisasi tahun ini meliputi Departemen Fotografi, Departemen Videografi, Departemen Media & Design (MnD), serta Departemen Pers. Keempatnya saling berkolaborasi untuk memastikan setiap agenda kemahasiswaan maupun institusi di lingkungan JGU terdokumentasi dan terpublikasi secara profesional.`,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'news-2',
    title: 'Semarak PBAK Jakarta Global University: Sinergi Mahasiswa Baru dalam Inovasi & Kreativitas',
    category: 'Berita Kampus JGU',
    date: '08 Okt 2026',
    author: 'Tim Liputan Pers JGU',
    readTime: '4 Menit Baca',
    excerpt: 'Ratusan mahasiswa baru memadati auditorium utama JGU. Simak rangkuman kemeriahan parade UKM dan penampilan perdana karya visual Baramedia.',
    content: `Suasana penuh antusiasme menyelimuti kampus Jakarta Global University (JGU) saat pelaksanaan Pengenalan Budaya Akademik dan Kemahasiswaan (PBAK). Acara tahunan ini tidak hanya memperkenalkan sistem akademik kampus, tetapi juga menjadi panggung unjuk gigi bagi berbagai Unit Kegiatan Mahasiswa (UKM).\n\nUKM Multimedia JGU turut mengambil peran krusial sebagai tim dokumentasi dan publikasi media. Mulai dari penayangan video bumper pembuka hingga liputan cepat di sela-sela acara berhasil menyedot perhatian mahasiswa baru yang tertarik mendalami dunia industri kreatif selama berkuliah di JGU.`,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'news-3',
    title: 'Bedah Estetika Feed @multimediajgu: Rahasia Di Balik Palet White-Blue & Tipografi Klasik-Modern',
    category: 'Tips & Kreatif',
    date: '02 Okt 2026',
    author: 'Departemen Media & Design (MnD)',
    readTime: '5 Menit Baca',
    excerpt: 'Bagaimana tim MnD memadukan warna Royal Blue (#0342ab) dan Ice White (#e9ecf4) dengan gaya fotografi wide-angle yang sedang tren di kalangan Gen-Z?',
    content: `Pernahkah kamu memperhatikan keselarasan warna pada tampilan profil Instagram @multimediajgu? Tim Departemen Media & Design (MnD) merancang sistem desain yang menggabungkan palet warna dingin—mulai dari Deep Royal Blue (#0342ab), Soft Ice White (#e9ecf4), hingga Pastel Blue (#bfccde & #94abcc).\n\nSelain pemilihan warna yang konsisten dengan identitas Jakarta Global University, penggunaan font serif kaligrafi yang dikombinasikan dengan bounding-box vektor ala software desain memberikan kesan kreatif, dinamis, dan dekat dengan dunia kreator visual masa kini.`,
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'news-4',
    title: 'Perayaan Hari Kartini & Hari Besar Nasional: Wujud Apresiasi Inklusivitas di Lingkungan JGU',
    category: 'Berita Kampus JGU',
    date: '25 Sep 2026',
    author: 'Departemen Pers & Humas',
    readTime: '3 Menit Baca',
    excerpt: 'Melalui karya poster interaktif dan artikel reflektif, UKM Multimedia JGU terus merawat semangat keberagaman dan toleransi antar sivitas akademika.',
    content: `Sebagai organisasi kemahasiswaan yang menjunjung tinggi nilai inklusivitas di Jakarta Global University, UKM Multimedia rutin menghadirkan publikasi khusus pada setiap peringatan hari besar nasional maupun keagamaan.\n\nMelalui kolaborasi riset dari Departemen Pers dan eksekusi visual dari Departemen Media & Design, setiap unggahan dirancang bukan sekadar ucapan seremonial, melainkan pengingat akan pentingnya kontribusi generasi muda dalam membawa perubahan positif.`,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export default function App() {
  // Navigation & Interactive States
  const [activeVisiTab, setActiveVisiTab] = useState('visi');
  const [pengurusFilter, setPengurusFilter] = useState('ALL');
  const [selectedPengurus, setSelectedPengurus] = useState(null);
  const [activeDept, setActiveDept] = useState('fotografi');
  const [activityFilter, setActivityFilter] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [newsSearch, setNewsSearch] = useState('');
  const [newsCategory, setNewsCategory] = useState('Semua');
  const [selectedNews, setSelectedNews] = useState(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [joinForm, setJoinForm] = useState({
    nama: '',
    nim: '',
    prodi: '',
    departemen: 'Fotografi',
    alasan: ''
  });

  // Subtle parallax effect on hero floating glass cards
  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMousePos({ x, y });
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered Pengurus
  const filteredPengurus = PENGURUS_DATA.filter((item) =>
    pengurusFilter === 'ALL' ? true : item.category === pengurusFilter
  );

  // Selected Department Object
  const currentDeptObj = DEPARTMENTS_DATA.find((d) => d.id === activeDept) || DEPARTMENTS_DATA[0];
  const ActiveDeptIcon = currentDeptObj.icon;

  // Filtered Activities
  const filteredActivities = ACTIVITIES_DATA.filter((act) =>
    activityFilter === 'All' ? true : act.category === activityFilter
  );

  // Filtered News
  const filteredNews = NEWS_DATA.filter((item) => {
    const matchesCategory = newsCategory === 'Semua' || item.category === newsCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(newsSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    setJoinSuccess(true);
    setTimeout(() => {
      setJoinSuccess(false);
      setIsJoinModalOpen(false);
      setJoinForm({ nama: '', nim: '', prodi: '', departemen: 'Fotografi', alasan: '' });
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#022b73] text-slate-900 font-sans selection:bg-[#a3e635] selection:text-[#0342ab] overflow-x-hidden">
      {/* Google Fonts Injection for Display & Script/Serif Typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');

        .font-display {
          font-family: 'Syne', 'Plus Jakarta Sans', sans-serif;
        }
        .font-serif-italic {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-style: italic;
        }
        .bg-hero-grid {
          background-color: #0342ab;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .glass-card-hero {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(191, 204, 222, 0.18) 100%);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 25px 50px -12px rgba(2, 24, 68, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.6);
        }
        .glass-dark {
          background: linear-gradient(135deg, rgba(3, 66, 171, 0.72) 0%, rgba(2, 43, 115, 0.85) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }
        .glass-light {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(233, 236, 244, 0.62) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 16px 40px -12px rgba(3, 66, 171, 0.12);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 16s linear infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }
        .animate-float-1 {
          animation: float-slow 5s ease-in-out infinite;
        }
      `}</style>

      {/* OUTER CONTAINER FRAME (Inspired by the rounded browser showcase in reference image 1) */}
      <div className="max-w-[1440px] mx-auto sm:px-4 md:px-8 pt-2 sm:pt-6 pb-12">
        <div className="rounded-none sm:rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.45)] border-0 sm:border border-white/15 bg-hero-grid relative">
          
          {/* AMBIENT GLOW ORBS */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="pointer-events-none absolute top-[28rem] -right-24 w-96 h-96 rounded-full bg-[#94abcc]/30 blur-3xl" />

          {/* ==================== 1. FLOATING GLASS NAVBAR ==================== */}
          <header className="sticky top-4 z-40 px-4 sm:px-8 pt-4">
            <div className="max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-3 glass-dark flex items-center justify-between shadow-xl">
              {/* Brand Logo (Speech Bubble Style like BASE CLUB reference) */}
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-2.5 group text-left focus:outline-none"
              >
                <div className="bg-white rounded-full p-1.5 shadow-md group-hover:scale-105 transition-transform">
                  <MultimediaLogo className="w-7 h-7" />
                </div>
                <div className="flex items-center">
                  <span className="bg-white text-[#0342ab] font-extrabold text-xs sm:text-sm px-2.5 py-1 rounded-l-full tracking-tight">
                    MULTIMEDIA
                  </span>
                  <span className="border border-[#a3e635] text-white font-bold text-xs sm:text-sm px-2.5 py-1 rounded-r-full bg-[#0342ab]/80 tracking-wider">
                    JGU
                  </span>
                </div>
              </button>

              {/* Center Pill Navigation (Exact match to reference pill buttons) */}
              <nav className="hidden lg:flex items-center gap-2">
                {[
                  { label: 'Tentang & Visi', target: 'visi-misi' },
                  { label: 'Kepengurusan', target: 'kepengurusan' },
                  { label: '4 Departemen', target: 'departemen' },
                  { label: 'Kegiatan', target: 'kegiatan' },
                  { label: 'Berita JGU', target: 'berita' }
                ].map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#e9ecf4] border border-white/25 hover:border-[#a3e635] hover:bg-white/15 hover:text-white transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Right CTA Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white border border-white/60 hover:bg-[#a3e635] hover:text-[#0342ab] hover:border-[#a3e635] transition-all duration-300 flex items-center gap-1.5 shadow-sm"
                >
                  <span>Gabung Baramedia</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-full border border-white/25 text-white hover:bg-white/10"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-2 rounded-3xl p-4 glass-dark text-white space-y-2 shadow-2xl">
                {[
                  { label: 'Tentang & Visi Misi', target: 'visi-misi' },
                  { label: 'Kepengurusan (BPH & Kadep)', target: 'kepengurusan' },
                  { label: '4 Departemen Multimedia', target: 'departemen' },
                  { label: 'Kegiatan & Program Kerja', target: 'kegiatan' },
                  { label: 'Berita & Redaksi JGU', target: 'berita' }
                ].map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/15 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#a3e635]" />
                  </button>
                ))}
              </div>
            )}
          </header>

          {/* ==================== 2. HERO SECTION ("#CLUB SOCIALFI PEOPLE" STYLE) ==================== */}
          <section
            id="hero"
            onMouseMove={handleHeroMouseMove}
            className="relative pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-8 overflow-hidden"
          >
            {/* Top Tag Pill */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-[#e9ecf4] text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
                <span>OFFICIAL WEBSITE UKM MULTIMEDIA JAKARTA GLOBAL UNIVERSITY</span>
              </div>
            </div>

            {/* GIANT STACKED TYPOGRAPHY CONTAINER WITH OVERLAPPING GLASS CARDS */}
            <div className="relative max-w-6xl mx-auto text-center select-none py-4 sm:py-8">
              
              {/* Massive Stacked Text */}
              <div className="font-display font-extrabold uppercase tracking-tighter leading-[0.88] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                {/* LINE 1 */}
                  <div className="relative inline-block text-[2.2rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6.4rem] xl:text-[7.2rem]">
                    <span className="text-[#a3e635] font-serif-italic font-bold mr-1 sm:mr-3 drop-shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                      #
                    </span>
                    <span>BARAMEDIA</span>
                    {/* Top Right Hand-drawn Neon Arrow */}
                    <DoodleArrowRight className="hidden sm:block absolute right-1 sm:right-4 -top-8 sm:-top-10 w-16 h-16 md:w-22 md:h-22 pointer-events-none" />                  </div>

                  {/* LINE 2 */}
                  <div className="block text-[2.1rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.1rem] xl:text-[6.9rem] text-[#e9ecf4]">
                    MULTIMEDIA
                  </div>

                  {/* LINE 3 */}
                  <div className="block text-[2.1rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.1rem] xl:text-[6.9rem] text-white">
                    JGU
                  </div>
              </div>

              {/* FLOATING GLASS CARD 1 (Left-Center - Inspired by baseclub.eth tilted glass card) */}
              <div
                style={{
                  transform: `translate3d(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px, 0) rotate(-11deg)`
                }}
                onClick={() => scrollToSection('kepengurusan')}
                className="cursor-pointer hidden md:flex flex-col items-center justify-between w-52 lg:w-60 p-5 rounded-[30px] glass-card-hero absolute left-[10%] lg:left-[14%] bottom-[2%] z-20 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-white/90">
                  <span className="px-2 py-0.5 rounded-full bg-[#0342ab]/60 border border-white/30">KABINET</span>
                  <span className="text-[#a3e635]">● ACTIVE</span>
                </div>
                <div className="my-2.5 w-20 h-20 rounded-full bg-white p-1.5 shadow-inner flex items-center justify-center relative">
                  <MultimediaLogo className="w-14 h-14" />
                  <span className="absolute -bottom-1 -right-1 bg-[#a3e635] text-[#0342ab] text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                    JGU
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-white font-extrabold text-sm tracking-tight">@multimediajgu</p>
                  <p className="text-[#e9ecf4]/90 text-xs font-medium mt-0.5">304+ Creative Followers</p>
                </div>
              </div>

              {/* FLOATING GLASS CARD 2 (Right-Center - Inspired by pearl.eth tilted glass card) */}
              <div
                style={{
                  transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 0) rotate(12deg)`
                }}
                onClick={() => scrollToSection('departemen')}
                className="cursor-pointer hidden md:flex flex-col items-center justify-between w-52 lg:w-60 p-5 rounded-[30px] glass-card-hero absolute right-[15%] lg:right-[10%] top-[15%] z-20 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-white/90">
                  <span className="px-2 py-0.5 rounded-full bg-white/25">4 PILAR</span>
                  <span>99+ POSTS</span>
                </div>
                <div className="my-2.5 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg relative">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
                    alt="Multimedia Camera"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0342ab]/60 to-transparent" />
                </div>
                <div className="text-center">
                  <p className="text-white font-extrabold text-sm tracking-tight">baramedia.jgu</p>
                  <p className="text-[#e9ecf4]/90 text-xs font-medium mt-0.5">Foto • Video • MnD • Pers</p>
                </div>
              </div>

              {/* Bottom Left Hand-drawn Neon Arrow */}
              <DoodleArrowLeft className="hidden md:block absolute left-[8%] lg:left-[12%] -bottom-6 w-28 h-28 pointer-events-none" />

              {/* ROTATING NEON LIME BADGE (Bottom Right - Just like 'GET STARTED OF FREE' badge in reference) */}
              <button
                onClick={() => scrollToSection('departemen')}
                className="hidden sm:flex items-center justify-center w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-[#a3e635] text-[#0342ab] shadow-[0_15px_40px_rgba(163,230,53,0.45)] absolute right-[4%] lg:right-[8%] -bottom-8 z-30 group hover:scale-110 transition-transform"
              >
                <svg viewBox="0 0 120 120" className="w-full h-full p-1.5 animate-spin-slow">
                  <path
                    id="circlePath"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                  <text className="text-[10.2px] font-extrabold uppercase tracking-[0.14em] fill-[#0342ab]">
                    <textPath href="#circlePath" startOffset="0%">
                      • BARISAN TERDEPAN MULTIMEDIA • JGU
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 stroke-[2.75] text-[#0342ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>

            {/* Mobile Quick Glass Cards (Visible only on mobile so mobile users also see the floating cards) */}
            <div className="grid grid-cols-2 gap-3 mt-6 md:hidden">
              <div
                onClick={() => scrollToSection('kepengurusan')}
                className="p-4 rounded-2xl glass-card-hero text-center"
              >
                <p className="text-xs font-bold text-[#a3e635]">@multimediajgu</p>
                <p className="text-white font-extrabold text-sm mt-1">BPH & Pengurus</p>
                <p className="text-[11px] text-white/80 mt-0.5">Kabinet Baramedia</p>
              </div>
              <div
                onClick={() => scrollToSection('departemen')}
                className="p-4 rounded-2xl glass-card-hero text-center"
              >
                <p className="text-xs font-bold text-[#a3e635]">4 Departemen</p>
                <p className="text-white font-extrabold text-sm mt-1">Karya & Divisi</p>
                <p className="text-[11px] text-white/80 mt-0.5">Foto, Video, MnD, Pers</p>
              </div>
            </div>
          </section>

          {/* ==================== 3. ROUNDED WHITE SHEET CONTAINER (SOCIALFI BENTO + MAIN SECTIONS) ==================== */}
          <div className="bg-[#e9ecf4] rounded-t-[40px] sm:rounded-t-[56px] pt-10 sm:pt-14 pb-20 px-4 sm:px-8 lg:px-12 text-slate-900 relative z-20 shadow-[0_-20px_60px_rgba(2,24,68,0.35)]">
            
            {/* --- TOP 3 SOCIALFI-STYLE INTERACTIVE HIGHLIGHT CARDS --- */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
              
              {/* Card 1: 4 Departemen Kreatif */}
              <div
                onClick={() => scrollToSection('departemen')}
                className="cursor-pointer group bg-white/80 hover:bg-white rounded-[32px] p-6 sm:p-7 border border-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-center">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900">
                    EKSPLORASI 4 DIVISI
                    <br />
                    KREATIF UTAMA
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Wadah pengembangan bakat visual & jurnalistik mahasiswa JGU
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center relative">
                  {/* Tilted Blue Badge Card */}
                  <div className="bg-[#0342ab] text-white p-3.5 rounded-2xl -rotate-6 shadow-lg flex items-center gap-3 group-hover:rotate-0 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left pr-2">
                      <p className="text-xs font-extrabold">baramedia.jgu</p>
                      <p className="text-[10px] text-[#bfccde]">99+ Karya Terkurasi</p>
                    </div>
                  </div>
                  {/* Neon Pill Overlay */}
                  <span className="-ml-3 mt-6 bg-[#a3e635] text-[#0342ab] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                    4 DEPARTEMEN
                  </span>
                </div>
              </div>

              {/* Card 2: Struktur BPH & Kadep */}
              <div
                onClick={() => scrollToSection('kepengurusan')}
                className="cursor-pointer group bg-white/80 hover:bg-white rounded-[32px] p-6 sm:p-7 border border-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
              >
                <div className="text-center">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900">
                    SINERGI PENGURUS
                    <br />
                    BPH & KADEP
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Kolaborasi solid Ketum, Waketum, Sekre, Bendahara & Kadep
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="w-full max-w-[260px] bg-[#0342ab] text-white rounded-full py-3 px-5 flex items-center justify-between text-xs sm:text-sm font-bold shadow-md">
                    <span>KABINET</span>
                    <span className="text-[#a3e635]">BARAMEDIA</span>
                  </div>
                  <div className="-mt-3 w-11 h-11 rounded-full bg-[#a3e635] text-[#0342ab] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Card 3: Pusat Media & Berita JGU */}
              <div
                onClick={() => scrollToSection('berita')}
                className="cursor-pointer group bg-white/80 hover:bg-white rounded-[32px] p-6 sm:p-7 border border-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-center">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900">
                    PUSAT LIPUTAN &
                    <br />
                    MEDIA KAMPUS JGU
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Dokumentasi event, aksi sosial, dan rilis berita terkini
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-[#a3e635] text-[#0342ab] px-6 py-3.5 rounded-[24px] rounded-bl-none shadow-md text-center group-hover:scale-105 transition-transform">
                    <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                      TOTAL REACH & AUDIENCE
                    </p>
                    <p className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">
                      304+ FOLLOWERS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== 4. VISI, MISI & FILOSOFI LOGO SECTION ==================== */}
            <section id="visi-misi" className="max-w-6xl mx-auto mt-20 sm:mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#bfccde]/60 text-[#0342ab] text-xs font-extrabold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> IDENTITAS ORGANISASI
                  </span>
                  <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#0342ab] tracking-tight">
                    Mengenal{' '}
                    <span className="font-serif-italic font-bold text-4xl sm:text-6xl text-slate-800">
                      Visi, Misi & Logo
                    </span>
                  </h2>
                </div>

                {/* Interactive Switcher Pills */}
                <div className="inline-flex p-1.5 rounded-full bg-[#bfccde]/50 border border-white self-start">
                  {[
                    { id: 'visi', label: 'Visi Baramedia' },
                    { id: 'misi', label: 'Misi Utama' },
                    { id: 'logo', label: 'Filosofi Logo' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveVisiTab(tab.id)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                        activeVisiTab === tab.id
                          ? 'bg-[#0342ab] text-white shadow-md'
                          : 'text-slate-700 hover:text-[#0342ab]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visi / Misi / Logo Interactive Content Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Visual Poster Card (Inspired by Instagram Grid Visi / Misi / Logo post) */}
                <div className="lg:col-span-5 rounded-[32px] overflow-hidden relative min-h-[340px] bg-gradient-to-br from-[#0342ab] via-[#94abcc] to-[#bfccde] p-8 flex flex-col justify-between text-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                    alt="Baramedia Team"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-45"
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold border border-white/30">
                      UKM MULTIMEDIA JGU
                    </span>
                    <span className="text-xs font-mono opacity-80">#BARAMEDIA</span>
                  </div>

                  {/* Center Script Typography with Vector Anchor Box (Exact nod to their IG feed design!) */}
                  <div className="relative z-10 my-8 text-center">
                    <div className="inline-block border-2 border-white/80 px-8 py-3 relative bg-white/10 backdrop-blur-sm">
                      {/* Corner Vector Nodes */}
                      <span className="w-2.5 h-2.5 bg-white absolute -top-1.5 -left-1.5" />
                      <span className="w-2.5 h-2.5 bg-white absolute -top-1.5 -right-1.5" />
                      <span className="w-2.5 h-2.5 bg-white absolute -bottom-1.5 -left-1.5" />
                      <span className="w-2.5 h-2.5 bg-white absolute -bottom-1.5 -right-1.5" />
                      <h3 className="font-serif-italic text-5xl sm:text-6xl font-bold tracking-wide text-white drop-shadow-md">
                        {activeVisiTab === 'visi' && 'Visi'}
                        {activeVisiTab === 'misi' && 'Misi'}
                        {activeVisiTab === 'logo' && 'Logo'}
                      </h3>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs text-[#e9ecf4]">
                    <span>Barisan Terdepan Multimedia</span>
                    <span>@multimediajgu</span>
                  </div>
                </div>

                {/* Right Glassmorphic Explanation Panel */}
                <div className="lg:col-span-7 rounded-[32px] glass-light p-7 sm:p-10 flex flex-col justify-between">
                  {activeVisiTab === 'visi' && (
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 text-[#0342ab] font-bold text-sm">
                        <Compass className="w-5 h-5" />
                        <span>VISI UKM MULTIMEDIA JGU</span>
                      </div>
                      <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                        “Menjadikan UKM Multimedia Jakarta Global University sebagai{' '}
                        <span className="text-[#0342ab] underline decoration-[#a3e635] decoration-4">
                          barisan terdepan
                        </span>{' '}
                        dalam inovasi kreatif, pusat informasi yang kredibel, serta wadah kolaborasi seni visual dan jurnalistik yang berdaya saing tinggi.”
                      </blockquote>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        {[
                          { title: 'Kreatif & Inovatif', desc: 'Adaptif terhadap tren desain, sinematografi, dan media baru.' },
                          { title: 'Kredibel & Aktual', desc: 'Menyajikan dokumentasi dan liputan berita kampus yang akurat.' },
                          { title: 'Kolaboratif', desc: 'Bersinergi dengan seluruh elemen internal maupun eksternal JGU.' }
                        ].map((p, i) => (
                          <div key={i} className="p-4 rounded-2xl bg-[#e9ecf4]/90 border border-[#bfccde]">
                            <p className="font-extrabold text-[#0342ab] text-sm">{p.title}</p>
                            <p className="text-xs text-slate-600 mt-1">{p.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeVisiTab === 'misi' && (
                    <div className="space-y-5">
                      <div className="inline-flex items-center gap-2 text-[#0342ab] font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>MISI STRATEGIS BARAMEDIA</span>
                      </div>
                      <ul className="space-y-3.5">
                        {[
                          'Mengembangkan kompetensi teknis dan artistik anggota di bidang Fotografi, Videografi, Media & Desain, serta Pers melalui pelatihan berkelanjutan.',
                          'Menjadi pusat dokumentasi dan publikasi resmi yang responsif terhadap setiap kegiatan akademik maupun kemahasiswaan di Jakarta Global University.',
                          'Membangun tata kelola organisasi yang profesional, transparan, dan kekeluargaan antar pengurus BPH maupun anggota departemen.',
                          'Memperluas jejaring kemitraan media (media partner) dengan komunitas kreatif dan universitas lain di tingkat regional maupun nasional.'
                        ].map((misi, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#bfccde]/60"
                          >
                            <span className="w-7 h-7 rounded-full bg-[#0342ab] text-[#a3e635] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              0{idx + 1}
                            </span>
                            <span className="text-sm sm:text-base text-slate-700 font-medium">{misi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeVisiTab === 'logo' && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-2 border border-[#bfccde]">
                          <MultimediaLogo className="w-12 h-12" />
                        </div>
                        <div>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0342ab]">
                            IDENTITAS VISUAL
                          </span>
                          <h4 className="text-xl font-extrabold text-slate-900">
                            Makna Logo UKM Multimedia JGU
                          </h4>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/80 border border-[#bfccde]">
                          <p className="font-extrabold text-[#0342ab] text-sm">Pita Dinamis Huruf "M"</p>
                          <p className="text-xs text-slate-600 mt-1">
                            Melambangkan fleksibilitas, kesinambungan ide kreatif, dan sinergi 4 departemen dalam satu kesatuan Multimedia.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/80 border border-[#bfccde]">
                          <p className="font-extrabold text-[#0342ab] text-sm">Simbol Play (Segitiga Media)</p>
                          <p className="text-xs text-slate-600 mt-1">
                            Merepresentasikan pergerakan maju tanpa henti, produksi audio-visual, dan kesiapan menyiarkan karya inspiratif.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/80 border border-[#bfccde] sm:col-span-2">
                          <p className="font-extrabold text-[#0342ab] text-sm">
                            Gradasi Warna Biru Royal (#0342ab) & Cyan Cerah
                          </p>
                          <p className="text-xs text-slate-600 mt-1">
                            Mencerminkan kecerdasan teknologi, profesionalisme, integritas jurnalistik, dan semangat muda mahasiswa Jakarta Global University.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ==================== 5. STRUKTUR KEPENGURUSAN (BPH & KADEP/WAKADEP) ==================== */}
            <section id="kepengurusan" className="max-w-6xl mx-auto mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0342ab] text-white text-xs font-extrabold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-[#a3e635]" /> KABINET BARAMEDIA
                  </span>
                  <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                    Struktur{' '}
                    <span className="font-serif-italic font-bold text-4xl sm:text-6xl text-[#0342ab]">
                      Kepengurusan
                    </span>
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Klik pada kartu pengurus untuk melihat detail tugas dan tanggung jawabnya.
                  </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'ALL', label: 'Semua Pengurus (9)' },
                    { id: 'BPH', label: 'BPH Inti (Ketum - Humas)' },
                    { id: 'KADEP', label: 'Kadep & Wakadep (4 Divisi)' }
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setPengurusFilter(btn.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                        pengurusFilter === btn.id
                          ? 'bg-[#0342ab] text-white shadow-lg scale-105'
                          : 'bg-white text-slate-700 hover:bg-[#bfccde]/60 border border-[#bfccde]'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instagram-Feed Aesthetic Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPengurus.map((person) => (
                  <div
                    key={person.id}
                    onClick={() => setSelectedPengurus(person)}
                    className="group cursor-pointer rounded-[32px] overflow-hidden relative h-[390px] bg-gradient-to-b from-[#94abcc] via-[#0342ab] to-[#022b73] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border-2 border-white"
                  >
                    {/* Background Photo */}
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 mix-blend-luminosity group-hover:mix-blend-normal"
                    />

                    {/* Blue/White Aura Gradient Overlay (Inspired by @multimediajgu IG Feed) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0342ab] via-[#0342ab]/35 to-white/25" />

                    {/* Decorative Top Bar */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/85 text-[#0342ab] backdrop-blur-md shadow-sm">
                        {person.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white group-hover:bg-[#a3e635] group-hover:text-[#0342ab] transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Characteristic Script/Serif Title Overlay (Like 'Ketum', 'Waketum', 'Sekretaris', 'Bendahara' in user screenshot) */}
                    <div className="absolute top-14 left-0 right-0 text-center pointer-events-none px-4">
                      <span className="font-serif-italic font-bold text-4xl sm:text-5xl text-white drop-shadow-[0_4px_20px_rgba(3,66,171,0.95)] tracking-wide">
                        {person.shortRole}
                      </span>
                    </div>

                    {/* Bottom Glassmorphic Info Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card-hero text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-semibold text-[#a3e635] uppercase tracking-wider">
                            {person.role}
                          </p>
                          <h3 className="font-display font-extrabold text-lg leading-tight mt-0.5">
                            {person.name}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono bg-[#0342ab]/60 px-2.5 py-1 rounded-full border border-white/25">
                          {person.handle}
                        </span>
                      </div>
                      <p className="text-xs text-[#e9ecf4]/90 line-clamp-2 mt-2">
                        “{person.quote}”
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== 6. EMPAT DEPARTEMEN UTAMA (INTERACTIVE SHOWCASE) ==================== */}
            <section id="departemen" className="max-w-6xl mx-auto mt-24">
              <div className="rounded-[40px] bg-[#0342ab] text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
                {/* Subtle Grid Inside Department Section */}
                <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-40" />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/15">
                    <div>
                      <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#a3e635] text-xs font-extrabold uppercase tracking-wider">
                        <Layers className="w-3.5 h-3.5" /> 4 PILAR BARAMEDIA
                      </span>
                      <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl tracking-tight">
                        Departemen{' '}
                        <span className="font-serif-italic font-normal text-[#bfccde] text-4xl sm:text-6xl">
                          Multimedia JGU
                        </span>
                      </h2>
                    </div>

                    {/* 4 Interactive Department Circle/Pill Highlights (Inspired by IG Story Highlights) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {DEPARTMENTS_DATA.map((dept) => {
                        const IconComponent = dept.icon;
                        const isSelected = activeDept === dept.id;
                        return (
                          <button
                            key={dept.id}
                            onClick={() => setActiveDept(dept.id)}
                            className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl font-bold text-xs transition-all ${
                              isSelected
                                ? 'bg-[#a3e635] text-[#0342ab] shadow-[0_10px_25px_rgba(163,230,53,0.35)] scale-105'
                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                            }`}
                          >
                            <IconComponent className="w-4 h-4 shrink-0" />
                            <span className="truncate">{dept.shortName}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Department Detail Content */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Description, Skills & Quick Stats */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="inline-flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#a3e635] text-[#0342ab] flex items-center justify-center shadow-lg">
                          <ActiveDeptIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[#bfccde] font-bold">
                            {currentDeptObj.tagline}
                          </p>
                          <h3 className="font-display font-extrabold text-2xl sm:text-3xl">
                            {currentDeptObj.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-[#e9ecf4] text-sm sm:text-base leading-relaxed">
                        {currentDeptObj.description}
                      </p>

                      {/* Skill Pills */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#a3e635] mb-2.5">
                          FOKUS KEAHLIAN & KOMPETENSI:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {currentDeptObj.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/25 text-white"
                            >
                              ✦ {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Department Stats Row */}
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                          <p className="text-[11px] text-[#bfccde]">Kekuatan Tim</p>
                          <p className="font-extrabold text-sm sm:text-base mt-0.5">
                            {currentDeptObj.stats.members}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                          <p className="text-[11px] text-[#bfccde]">Output Karya</p>
                          <p className="font-extrabold text-sm sm:text-base mt-0.5">
                            {currentDeptObj.stats.projects}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                          <p className="text-[11px] text-[#bfccde]">Tools Utama</p>
                          <p className="font-extrabold text-sm sm:text-base mt-0.5">
                            {currentDeptObj.stats.gear}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Mini Portfolio Showcase Cards */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentDeptObj.gallery.map((item, index) => (
                        <div
                          key={index}
                          className="group rounded-3xl overflow-hidden glass-card-hero p-2.5 flex flex-col justify-between h-64 sm:h-80 relative"
                        >
                          <div className="w-full h-full rounded-2xl overflow-hidden relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0342ab] via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="inline-block px-2 py-0.5 rounded-md bg-[#a3e635] text-[#0342ab] text-[10px] font-extrabold">
                                {item.tag}
                              </span>
                              <h4 className="text-white font-bold text-xs sm:text-sm mt-1 leading-snug">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== 7. KEGIATAN & PROGRAM KERJA (ACTIVITY HIGHLIGHTS) ==================== */}
            <section id="kegiatan" className="max-w-6xl mx-auto mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#bfccde]/70 text-[#0342ab] text-xs font-extrabold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" /> REKAM JEJAK & PROKER
                  </span>
                  <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                    Kegiatan{' '}
                    <span className="font-serif-italic font-bold text-4xl sm:text-6xl text-[#0342ab]">
                      Baramedia
                    </span>
                  </h2>
                </div>

                {/* Activity Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {['All', 'Campus Event', 'Social Action', 'Internal Activity', 'Workshop'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActivityFilter(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                        activityFilter === cat
                          ? 'bg-[#0342ab] text-white shadow-md'
                          : 'bg-white text-slate-700 border border-[#bfccde] hover:bg-[#bfccde]/40'
                      }`}
                    >
                      {cat === 'All' ? 'Semua Kegiatan' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => setSelectedActivity(act)}
                    className="group cursor-pointer rounded-[32px] bg-white border border-white p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-60 rounded-[24px] overflow-hidden">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0342ab]/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0342ab] text-[#a3e635] text-[11px] font-extrabold">
                          {act.highlightBadge}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/90 text-slate-800 text-[11px] font-bold">
                          {act.date}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                          Kolaborasi: {act.department}
                        </span>
                        <span className="w-9 h-9 rounded-full bg-[#a3e635] text-[#0342ab] flex items-center justify-center group-hover:rotate-45 transition-transform">
                          <ArrowUpRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    <div className="pt-5 px-2">
                      <h3 className="font-display font-extrabold text-xl text-slate-900 group-hover:text-[#0342ab] transition-colors">
                        {act.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2">
                        {act.description}
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                        {act.deliverables.map((del, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#e9ecf4] text-[#0342ab]"
                          >
                            ✓ {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== 8. BERITA & ARTIKEL (MULTIMEDIA & INTERNAL JGU) ==================== */}
            <section id="berita" className="max-w-6xl mx-auto mt-24">
              <div className="rounded-[36px] bg-gradient-to-br from-[#bfccde]/60 via-white to-[#e9ecf4] p-6 sm:p-10 border border-white shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0342ab] text-white text-xs font-extrabold uppercase tracking-wider">
                      <Newspaper className="w-3.5 h-3.5 text-[#a3e635]" /> REDAKSI DEPARTEMEN PERS
                    </span>
                    <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                      Berita{' '}
                      <span className="font-serif-italic font-bold text-4xl sm:text-6xl text-[#0342ab]">
                        Multimedia & JGU
                      </span>
                    </h2>
                  </div>

                  {/* Search & Category Filter */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={newsSearch}
                        onChange={(e) => setNewsSearch(e.target.value)}
                        placeholder="Cari berita JGU / Multimedia..."
                        className="pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#94abcc] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0342ab] w-full sm:w-64"
                      />
                    </div>
                    <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                      {['Semua', 'Internal Multimedia', 'Berita Kampus JGU', 'Tips & Kreatif'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setNewsCategory(cat)}
                          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                            newsCategory === cat
                              ? 'bg-[#0342ab] text-white'
                              : 'bg-white text-slate-700 hover:bg-[#e9ecf4]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* News Cards Grid */}
                {filteredNews.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-slate-600 font-semibold">
                      Tidak ada berita yang cocok dengan pencarian "{newsSearch}".
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredNews.map((item) => (
                      <article
                        key={item.id}
                        onClick={() => setSelectedNews(item)}
                        className="cursor-pointer group rounded-[28px] bg-white p-5 border border-[#e9ecf4] shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row gap-5 items-center"
                      >
                        <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden shrink-0 relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0342ab]/90 text-white text-[10px] font-bold">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                              <span>{item.date}</span>
                              <span>•</span>
                              <span>{item.readTime}</span>
                            </div>
                            <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0342ab] transition-colors mt-1 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[#0342ab]">
                              Oleh: {item.author}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0342ab] group-hover:translate-x-1 transition-transform">
                              Baca Selengkapnya <ChevronRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* ==================== 9. FOOTER (SOCIALFI & BARAMEDIA STYLE) ==================== */}
          <footer className="bg-[#0342ab] text-white px-6 sm:px-12 py-12 border-t border-white/15">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full p-2">
                    <MultimediaLogo className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-xl tracking-tight">
                      UKM MULTIMEDIA JGU
                    </h4>
                    <p className="text-xs text-[#a3e635] font-bold">
                      🔥 BARAMEDIA (Barisan Terdepan Multimedia)
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#bfccde] leading-relaxed">
                  Official Organization of Jakarta Global University (@jg_university). Wadah kolaborasi Fotografi, Videografi, Media & Design (MnD), serta Pers Kampus.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/multimediajgu/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full glass-card-hero text-xs sm:text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <InstagramIcon className="w-4 h-4 text-[#a3e635]" />
                  <span>@multimediajgu</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="px-5 py-3 rounded-full bg-[#a3e635] text-[#0342ab] text-xs sm:text-sm font-extrabold hover:scale-105 transition-transform"
                >
                  Open Recruitment Info
                </button>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#bfccde] gap-2">
              <p>© 2026 UKM Multimedia JGU — Kabinet BARAMEDIA. All rights reserved.</p>
              <p>Color Palette: #e9ecf4 • #0342ab • #bfccde • #94abcc</p>
            </div>
          </footer>
        </div>
      </div>

      {/* ==================== MODALS ==================== */}

      {/* 1. MODAL DETAIL PENGURUS */}
      {selectedPengurus && (
        <div
          onClick={() => setSelectedPengurus(null)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full rounded-[32px] bg-[#e9ecf4] border-2 border-white overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="relative h-64 bg-gradient-to-br from-[#0342ab] to-[#94abcc]">
              <img
                src={selectedPengurus.image}
                alt={selectedPengurus.name}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0342ab] via-[#0342ab]/30 to-transparent" />
              <button
                onClick={() => setSelectedPengurus(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-[#a3e635] text-[#0342ab] text-[10px] font-extrabold uppercase">
                  {selectedPengurus.badge}
                </span>
                <h3 className="font-serif-italic text-4xl font-bold mt-1">
                  {selectedPengurus.role}
                </h3>
                <p className="font-display font-extrabold text-lg">{selectedPengurus.name}</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm italic text-slate-700 bg-white p-3.5 rounded-2xl border border-[#bfccde]">
                “{selectedPengurus.quote}”
              </p>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0342ab] mb-2">
                  TUGAS & TANGGUNG JAWAB UTAMA:
                </h4>
                <ul className="space-y-2">
                  {selectedPengurus.tasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0342ab] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  Instagram: {selectedPengurus.handle}
                </span>
                <button
                  onClick={() => setSelectedPengurus(null)}
                  className="px-5 py-2 rounded-full bg-[#0342ab] text-white text-xs font-bold"
                >
                  Tutup Profil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL DETAIL KEGIATAN */}
      {selectedActivity && (
        <div
          onClick={() => setSelectedActivity(null)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full rounded-[32px] bg-white overflow-hidden shadow-2xl"
          >
            <div className="relative h-64">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#0342ab] text-[#a3e635] text-xs font-extrabold">
                {selectedActivity.highlightBadge}
              </span>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0342ab]">
                <span>{selectedActivity.date}</span>
                <span>•</span>
                <span>{selectedActivity.department}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900">
                {selectedActivity.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedActivity.description}
              </p>
              <div className="p-4 rounded-2xl bg-[#e9ecf4]">
                <p className="text-xs font-extrabold text-[#0342ab] uppercase mb-2">
                  Output & Dokumentasi Kegiatan:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedActivity.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white text-xs font-bold text-slate-800 border border-[#bfccde]"
                    >
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. MODAL BACA BERITA LENGKAP */}
      {selectedNews && (
        <div
          onClick={() => setSelectedNews(null)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl"
          >
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full bg-[#0342ab] text-white text-xs font-bold">
                  {selectedNews.category}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                <span>{selectedNews.date}</span>
                <span>•</span>
                <span>{selectedNews.author}</span>
                <span>•</span>
                <span>{selectedNews.readTime}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                {selectedNews.title}
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line pt-2 border-t border-slate-100">
                {selectedNews.content}
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0342ab] text-white text-xs font-bold"
                >
                  Kembali ke Beranda Berita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL GABUNG BARAMEDIA (OPEN RECRUITMENT FORM) */}
      {isJoinModalOpen && (
        <div
          onClick={() => setIsJoinModalOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-[32px] bg-[#0342ab] text-white p-6 sm:p-8 border border-white/30 shadow-2xl relative"
          >
            <button
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <div className="bg-white p-1.5 rounded-full">
                <MultimediaLogo className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#a3e635]">
                REGISTRASI ANGGOTA BARU
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl">
              Gabung Barisan Terdepan Multimedia JGU
            </h3>
            <p className="text-xs text-[#bfccde] mt-1">
              Pilih departemen impianmu dan kembangkan karya bersama keluarga besar @multimediajgu.
            </p>

            {joinSuccess ? (
              <div className="my-8 p-6 rounded-2xl bg-white/15 border border-[#a3e635] text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#a3e635] mx-auto" />
                <h4 className="font-extrabold text-lg">Pendaftaran Terkirim!</h4>
                <p className="text-xs text-[#e9ecf4]">
                  Terima kasih telah mendaftar di UKM Multimedia JGU. Tim Humas & BPH akan menghubungi kamu melalui kontak mahasiswa.
                </p>
              </div>
            ) : (
              <form onSubmit={handleJoinSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-[#e9ecf4] block mb-1">
                    Nama Lengkap Mahasiswa
                  </label>
                  <input
                    type="text"
                    required
                    value={joinForm.nama}
                    onChange={(e) => setJoinForm({ ...joinForm, nama: e.target.value })}
                    placeholder="Contoh: Rangga Syahgani"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#a3e635]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#e9ecf4] block mb-1">NIM JGU</label>
                    <input
                      type="text"
                      required
                      value={joinForm.nim}
                      onChange={(e) => setJoinForm({ ...joinForm, nim: e.target.value })}
                      placeholder="2401xxxx"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#a3e635]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#e9ecf4] block mb-1">
                      Pilihan Departemen
                    </label>
                    <select
                      value={joinForm.departemen}
                      onChange={(e) => setJoinForm({ ...joinForm, departemen: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#022b73] border border-white/25 text-sm text-white focus:outline-none focus:border-[#a3e635]"
                    >
                      <option value="Fotografi">Fotografi</option>
                      <option value="Videografi">Videografi</option>
                      <option value="Media & Design">Media & Design (MnD)</option>
                      <option value="Pers">Pers & Jurnalistik</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#e9ecf4] block mb-1">
                    Alasan Bergabung & Portofolio Singkat
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={joinForm.alasan}
                    onChange={(e) => setJoinForm({ ...joinForm, alasan: e.target.value })}
                    placeholder="Ceritakan minatmu di bidang multimedia..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#a3e635]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#a3e635] text-[#0342ab] font-extrabold text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pendaftaran Baramedia</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}