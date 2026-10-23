import React, { useState } from 'react';
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
  ExternalLink,
  Compass,
  Send
} from 'lucide-react';

// --- CUSTOM SVG COMPONENTS ---

// Logo UKM Multimedia JGU (Dynamic Ribbon M + Play Icon)
import logoMultimedia from './assets/Logo Multimedia.svg';
const MultimediaLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img 
    src={logoMultimedia} 
    alt="Logo UKM Multimedia JGU" 
    className={`${className} object-contain`} 
  />
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
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

// Hand-drawn curved neon arrows with float animation
const DoodleArrowLeft = ({ className = "w-24 h-24" }: { className?: string }) => (
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

const DoodleArrowRight = ({ className = "w-24 h-24" }: { className?: string }) => (
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

// --- DATA ---

const PENGURUS_DATA = [
  {
    id: 'ketum',
    role: 'Ketua Umum',
    name: 'Rangga Syahgani',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'waketum',
    role: 'Wakil Ketua Umum',
    name: 'Nabila Putri A.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sekre',
    role: 'Sekretaris Umum',
    name: 'Alya Rahmadani',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'bendahara',
    role: 'Bendahara Umum',
    name: 'Siti Zahra N.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'humas',
    role: 'Hubungan Masyarakat',
    name: 'Dinda Maharani',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'kadep-foto',
    role: 'Kepala Departemen Fotografi',
    name: 'Fajar Pratama',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80'
  },
    {
    id: 'wakadep-foto',
    role: 'Wakil Kepala Departemen Fotografi',
    name: 'Fajar Pratama',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'kadep-video',
    role: 'Kepala Departemen Videografi',
    name: 'Reza Mahendra',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80'
  },
    {
    id: 'wakadep-video',
    role: 'Wakil Kepala Departemen Videografi',
    name: 'Reza Mahendra',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'kadep-mnd',
    role: 'Kepala Departemen Media & Design',
    name: 'Bagas Aditia',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'Kepala-pers',
    role: 'Kepala Departemen Pers',
    name: 'Nadia Safira',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80'
  },
    {
    id: 'wakadep-pers',
    role: 'Wakil Kepala Departemen Pers',
    name: 'Nadia Safira',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80'
  },
];

const DEPARTMENTS_DATA = [
  {
    id: 'fotografi',
    name: 'Fotografi',
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
    name: 'Videografi',
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
    name: 'Media & Design (MnD)',
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
    name: 'Pers',
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
  },
  {
    id: 'act-5',
    title: 'Pameran Karya Visual & Expo Kreatif Multimedia JGU',
    category: 'Exhibition',
    date: 'Desember 2024',
    highlightBadge: 'EXPO 2024',
    department: '4 Departemen & BPH',
    description: 'Ajang unjuk gigi karya terbaik anggota Baramedia mulai dari pameran foto cetak fine-art, screening video pendek sinematik, hingga instalasi branding grafis interaktif.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Pameran 50+ Karya Terpilih', 'Screening Mini Cinema', 'Katalog Digital Baramedia']
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
  const [activeVisiTab, setActiveVisiTab] = useState('visi');
  const [selectedPengurus, setSelectedPengurus] = useState<any>(null);
  const [activeDept, setActiveDept] = useState('fotografi');
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [newsSearch, setNewsSearch] = useState('');
  const [newsCategory, setNewsCategory] = useState('Semua');
  const [selectedNews, setSelectedNews] = useState<any>(null);
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

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 22;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentDeptObj = DEPARTMENTS_DATA.find((d) => d.id === activeDept) || DEPARTMENTS_DATA[0];
  const ActiveDeptIcon = currentDeptObj.icon;

  const displayedActivities = showAllActivities ? ACTIVITIES_DATA : ACTIVITIES_DATA.slice(0, 4);

  const filteredNews = NEWS_DATA.filter((item) => {
    const matchesCategory = newsCategory === 'Semua' || item.category === newsCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(newsSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleJoinSubmit = (e: React.FormEvent) => {
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
      {/* CSS Keyframes & Animations Suite */}
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
          background-size: 56px 56px;
        }
        
        /* Shimmer Card Reflection */
        .glass-card-hero {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.32) 0%, rgba(191, 204, 222, 0.16) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 25px 50px -12px rgba(2, 24, 68, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.6);
          overflow: hidden;
        }
        .glass-card-hero::after {
          content: '';
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            45deg,
            transparent 45%,
            rgba(255, 255, 255, 0.22) 50%,
            transparent 55%
          );
          transition: transform 0.8s ease-in-out;
          pointer-events: none;
        }
        .glass-card-hero:hover::after {
          transform: translate(25%, 25%);
        }

        .glass-dark {
          background: linear-gradient(135deg, rgba(3, 66, 171, 0.75) 0%, rgba(2, 43, 115, 0.88) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.22);
        }
        .glass-light {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(233, 236, 244, 0.65) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 16px 40px -12px rgba(3, 66, 171, 0.12);
        }

        /* Continuous Animations */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }

        @keyframes float-smooth {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float-doodle {
          animation: float-smooth 4.5s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.12); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 7s ease-in-out infinite;
        }

        /* Marquee Infinite Loop */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 24s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* OUTER CONTAINER FRAME */}
      <div className="max-w-[1440px] mx-auto sm:px-4 md:px-8 pt-2 sm:pt-6 pb-12">
        <div className="rounded-none sm:rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.45)] border-0 sm:border border-white/15 bg-hero-grid relative">
          
          {/* AMBIENT GLOW ORBS WITH BREATHING PULSE */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-400/30 blur-3xl animate-pulse-glow" />
          <div className="pointer-events-none absolute top-[28rem] -right-24 w-[30rem] h-[30rem] rounded-full bg-[#94abcc]/35 blur-3xl animate-pulse-glow" style={{ animationDelay: '3.5s' }} />

          {/* ==================== 1. FLOATING GLASS NAVBAR ==================== */}
          <header className="sticky top-4 z-40 px-4 sm:px-8 pt-4">
            <div className="max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-3 glass-dark flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-white/40">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-2.5 group text-left focus:outline-none"
              >
                <div className="bg-white rounded-full p-1.5 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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

              <nav className="hidden lg:flex items-center gap-2">
                {[
                  { label: 'Visi Misi', target: 'visi-misi' },
                  { label: 'Kepengurusan', target: 'kepengurusan' },
                  { label: 'Departemen', target: 'departemen' },
                  { label: 'Kegiatan', target: 'kegiatan' },
                  { label: 'Berita', target: 'berita' }
                ].map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#e9ecf4] border border-white/20 hover:border-[#a3e635] hover:bg-white/15 hover:text-[#a3e635] hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white border border-white/60 hover:border-[#a3e635] transition-all duration-300 flex items-center gap-1.5 shadow-md active:scale-95"
                >
                  <span className="absolute inset-0 bg-[#a3e635] translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  <span className="group-hover:text-[#0342ab] transition-colors duration-300">Gabung Baramedia</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:text-[#0342ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-full border border-white/25 text-white hover:bg-white/10 active:scale-90 transition-transform"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu with Fade-in Animation */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-2 rounded-3xl p-4 glass-dark text-white space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                {[
                  { label: 'Visi Misi', target: 'visi-misi' },
                  { label: 'Kepengurusan', target: 'kepengurusan' },
                  { label: 'Departemen', target: 'departemen' },
                  { label: 'Kegiatan', target: 'kegiatan' },
                  { label: 'Berita', target: 'berita' }
                ].map((item) => (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/15 flex items-center justify-between transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#a3e635]" />
                  </button>
                ))}
              </div>
            )}
          </header>

         {/* ==================== 2. HERO SECTION ==================== */}
          {/* ==================== 2. HERO SECTION ==================== */}
          <section
            id="hero"
            onMouseMove={handleHeroMouseMove}
            className="relative pt-8 sm:pt-12 pb-24 sm:pb-32 px-4 sm:px-8 overflow-hidden"
          >
            {/* Top Tag Pill */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-[#e9ecf4] text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] animate-ping" />
                <span className="tracking-wide">OFFICIAL WEBSITE UKM MULTIMEDIA JAKARTA GLOBAL UNIVERSITY</span>
              </div>
            </div>

            {/* HERO STAGE CONTAINER */}
            <div className="relative max-w-5xl mx-auto py-4 sm:py-8 flex flex-col items-center justify-center">

              {/* FLOATING GLASS CARD 1 (KIRI - KECIL & DI SAYAP LUAR) */}
              {/* FLOATING GLASS CARD 1 (KIRI) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-20px',    /* atau '0px' / '20px' sesuai kerapatan layar yang diinginkan */
                    top: '10px',      /* ganti bottom menjadi top agar naik ke area lingkaran merah */
                    transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0) rotate(-12deg)`
                  }}
                  onClick={() => scrollToSection('kepengurusan')}
                  className="cursor-pointer hidden lg:flex flex-col items-center justify-between w-36 xl:w-40 p-3 rounded-[20px] glass-card-hero z-10 hover:scale-105 hover:-rotate-3 hover:shadow-[0_15px_35px_rgba(3,66,171,0.5)] transition-all duration-300"
                >
                <div className="w-full flex justify-between items-center text-[8px] font-bold uppercase tracking-wider text-white/90">
                  <span className="px-1.5 py-0.5 rounded-full bg-[#0342ab]/70 border border-white/30">KABINET</span>
                  <span className="text-[#a3e635] flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#a3e635] animate-ping" />
                    ACTIVE
                  </span>
                </div>
                <div className="my-1.5 w-11 h-11 rounded-full bg-white p-1 shadow-inner flex items-center justify-center relative group">
                  <MultimediaLogo className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <span className="absolute -bottom-0.5 -right-0.5 bg-[#a3e635] text-[#0342ab] text-[8px] font-extrabold px-1 py-0.2 rounded-full shadow">
                    JGU
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-white font-extrabold text-[11px] tracking-tight">@multimediajgu</p>
                  <p className="text-[#e9ecf4]/80 text-[9px] font-medium">Kabinet Baramedia</p>
                </div>
              </div>

              {/* FLOATING GLASS CARD 2 (KANAN - KECIL & DI SAYAP LUAR) */}
              <div
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '15px',
                  transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0) rotate(9deg)`
                }}
                onClick={() => scrollToSection('departemen')}
                className="cursor-pointer hidden lg:flex flex-col items-center justify-between w-36 xl:w-40 p-3 rounded-[20px] glass-card-hero z-10 hover:scale-105 hover:rotate-3 hover:shadow-[0_15px_35px_rgba(3,66,171,0.5)] transition-all duration-300"
              >
                <div className="w-full flex justify-between items-center text-[8px] font-bold uppercase tracking-wider text-white/90">
                  <span className="px-1.5 py-0.5 rounded-full bg-white/25">4 PILAR</span>
                  <span>PORTFOLIO</span>
                </div>
                <div className="my-1.5 w-11 h-11 rounded-full overflow-hidden border border-white shadow-md relative group">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
                    alt="Multimedia Camera"
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0342ab]/60 to-transparent" />
                </div>
                <div className="text-center">
                  <p className="text-white font-extrabold text-[11px] tracking-tight">baramedia.jgu</p>
                  <p className="text-[#e9ecf4]/80 text-[9px] font-medium">Foto • Video • MnD • Pers</p>
                </div>
              </div>

              {/* AREA TIPOGRAFI UTAMA TENGAH (KOMPAK, RAPI, CENTERED) */}
              <div className="flex flex-col items-center justify-center text-center select-none w-full max-w-[850px] mx-auto px-4 z-10">
                
                {/* 1. #BARAMEDIA (UKURAN DIKECILKAN AGAR PAS & TIDAK MEREBUT PERHATIAN) */}
                <div className="relative inline-block text-[1.1rem] sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] font-display font-extrabold uppercase tracking-tight text-white drop-shadow-sm mb-1.5">
                  <span className="text-[#a3e635] font-serif-italic font-bold mr-1.5 drop-shadow-[0_0_12px_rgba(163,230,53,0.6)] animate-pulse">
                    #
                  </span>
                  <span>BARAMEDIA</span>

                  {/* Panah Neon Hijau */}
                  <div className="hidden sm:block absolute -right-7 sm:-right-9 -top-4 sm:-top-6 w-9 h-9 md:w-12 md:h-12 pointer-events-none animate-float-doodle">
                    <DoodleArrowRight className="w-full h-full drop-shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
                  </div>
                </div>

                {/* 2 & 3. CONTAINER TEPAT TENGAH: MULTIMEDIA & JAKARTA GLOBAL UNIVERSITY */}
                <div className="inline-flex flex-col items-center justify-center max-w-full">
                  {/* MULTIMEDIA: UKURAN RADA TENGAH, LEGA, TIDAK MENABRAK POJOK */}
                  <h1 className="font-display font-extrabold uppercase text-[2.4rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] text-[#e9ecf4] tracking-tight leading-[0.9] hover:text-white transition-colors duration-500 whitespace-nowrap drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                    MULTIMEDIA
                  </h1>

                  {/* JAKARTA GLOBAL UNIVERSITY: RATA TEPI KIRI DENGAN 'M', TEPI KANAN DENGAN 'A' */}
                  <div className="w-full flex justify-between items-center text-[0.44rem] sm:text-[0.7rem] md:text-[0.88rem] lg:text-[1.02rem] font-display font-extrabold uppercase text-white leading-none mt-2 sm:mt-2.5 px-0.5 select-none drop-shadow">
                    {"JAKARTA GLOBAL UNIVERSITY".split("").map((char, idx) => (
                      <span
                        key={idx}
                        className={char === " " ? "opacity-0 w-1 sm:w-2 inline-block select-none" : "inline-block"}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* ROTATING NEON LIME BADGE (DIBERI JARAK/GAP AGAR TIDAK MENABRAK TULISAN UNIVERSITY) */}
              <button
                onClick={() => scrollToSection('departemen')}
                className="hidden sm:flex items-center justify-center w-22 h-22 lg:w-26 lg:h-26 rounded-full bg-[#a3e635] text-[#0342ab] shadow-[0_12px_30px_rgba(163,230,53,0.45)] absolute right-2 sm:right-6 lg:right-10 -bottom-10 lg:-bottom-12 z-20 group hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg viewBox="0 0 120 120" className="w-full h-full p-1.5 animate-spin-slow group-hover:[animation-duration:8s]">
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
                  <ArrowUpRight className="w-6 h-6 stroke-[2.75] text-[#0342ab] group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </button>

              {/* Doodle Panah Kiri Bawah */}
              <div className="hidden md:block absolute left-4 lg:left-8 -bottom-6 w-14 h-14 pointer-events-none animate-float-doodle" style={{ animationDelay: '2s' }}>
                <DoodleArrowLeft className="w-full h-full drop-shadow-[0_0_10px_rgba(163,230,53,0.4)]" />
              </div>

            </div>

            {/* Mobile Quick Cards */}
            <div className="grid grid-cols-2 gap-3 mt-6 lg:hidden">
              <div
                onClick={() => scrollToSection('kepengurusan')}
                className="p-4 rounded-2xl glass-card-hero text-center active:scale-95 transition-transform"
              >
                <p className="text-xs font-bold text-[#a3e635]">@multimediajgu</p>
                <p className="text-white font-extrabold text-sm mt-1">BPH & Pengurus</p>
                <p className="text-[11px] text-white/80 mt-0.5">Kabinet Baramedia</p>
              </div>
              <div
                onClick={() => scrollToSection('departemen')}
                className="p-4 rounded-2xl glass-card-hero text-center active:scale-95 transition-transform"
              >
                <p className="text-xs font-bold text-[#a3e635]">4 Departemen</p>
                <p className="text-white font-extrabold text-sm mt-1">Karya & Divisi</p>
                <p className="text-[11px] text-white/80 mt-0.5">Foto, Video, MnD, Pers</p>
              </div>
            </div>
          </section>

          {/* ==================== RUNNING MARQUEE TICKER (BARIS TEKS BERJALAN DINAMIS) ==================== */}
          <div className="relative z-30 -mb-4 bg-[#a3e635] text-[#0342ab] py-3.5 overflow-hidden shadow-lg border-y-2 border-white/20 select-none">
            <div className="animate-marquee whitespace-nowrap flex items-center font-display font-extrabold uppercase text-xs sm:text-sm tracking-wider">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-4">
                  <span>✦ BARISAN TERDEPAN MULTIMEDIA</span>
                  <span>● FOTOGRAFI</span>
                  <span>✦ VIDEOGRAFI</span>
                  <span>● MEDIA & DESIGN (MND)</span>
                  <span>✦ PERS</span>
                  <span>● JAKARTA GLOBAL UNIVERSITY</span>
                  <span>● @MULTIMEDIAJGU</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 3. ROUNDED WHITE SHEET CONTAINER ==================== */}
          <div className="bg-[#e9ecf4] rounded-t-[40px] sm:rounded-t-[56px] pt-12 sm:pt-16 pb-20 px-4 sm:px-8 lg:px-12 text-slate-900 relative z-20 shadow-[0_-20px_60px_rgba(2,24,68,0.35)]">
            
            {/* --- TOP 3 SOCIALFI BENTO CARDS --- */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
              <div
                onClick={() => scrollToSection('departemen')}
                className="cursor-pointer group bg-white/80 hover:bg-white rounded-[32px] p-6 sm:p-7 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-center">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900 group-hover:text-[#0342ab] transition-colors">
                    EKSPLORASI 4 DIVISI
                    <br />
                    KREATIF UTAMA
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Wadah pengembangan bakat visual & jurnalistik mahasiswa JGU
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center relative">
                  <div className="bg-[#0342ab] text-white p-3.5 rounded-2xl -rotate-6 shadow-lg flex items-center gap-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left pr-2">
                      <p className="text-xs font-extrabold">baramedia.jgu</p>
                      <p className="text-[10px] text-[#bfccde]">99+ Karya Terkurasi</p>
                    </div>
                  </div>
                  <span className="-ml-3 mt-6 bg-[#a3e635] text-[#0342ab] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    4 DEPARTEMEN
                  </span>
                </div>
              </div>

              <div
                onClick={() => scrollToSection('kepengurusan')}
                className="cursor-pointer group bg-white/80 hover:bg-white rounded-[32px] p-6 sm:p-7 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative"
              >
                <div className="text-center">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900 group-hover:text-[#0342ab] transition-colors">
                    SINERGI PENGURUS
                    <br />
                    BPH & KADEP
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Kolaborasi solid Ketum, Waketum, Sekre, Bendahara & Kadep
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="w-full max-w-[260px] bg-[#0342ab] text-white rounded-full py-3 px-5 flex items-center justify-between text-xs sm:text-sm font-bold shadow-md group-hover:shadow-lg transition-shadow">
                    <span>KABINET</span>
                    <span className="text-[#a3e635]">BARAMEDIA</span>
                  </div>
                  <div className="-mt-3 w-11 h-11 rounded-full bg-[#a3e635] text-[#0342ab] flex items-center justify-center shadow-md group-hover:scale-125 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              <div
                onClick={() => scrollToSection('berita')}
                className="cursor-pointer group bg-white/80 hover:bg-white rounded-[32px] p-6 sm:p-7 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="text-center">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900 group-hover:text-[#0342ab] transition-colors">
                    PUSAT LIPUTAN &
                    <br />
                    MEDIA KAMPUS JGU
                  </h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Dokumentasi event, aksi sosial, dan rilis berita terkini
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-[#a3e635] text-[#0342ab] px-6 py-3.5 rounded-[24px] rounded-bl-none shadow-md text-center group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
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
                    <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> IDENTITAS ORGANISASI
                  </span>
                  <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#0342ab] tracking-tight">
                    Mengenal{' '}
                    <span className="font-serif-italic font-bold text-4xl sm:text-6xl text-slate-800">
                      Visi, Misi & Logo
                    </span>
                  </h2>
                </div>

                {/* Interactive Switcher Pills with active scale effect */}
                <div className="inline-flex p-1.5 rounded-full bg-[#bfccde]/50 border border-white self-start shadow-inner">
                  {[
                    { id: 'visi', label: 'Visi' },
                    { id: 'misi', label: 'Misi' },
                    { id: 'logo', label: 'Filosofi Logo' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveVisiTab(tab.id)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                        activeVisiTab === tab.id
                          ? 'bg-[#0342ab] text-white shadow-md scale-105'
                          : 'text-slate-700 hover:text-[#0342ab]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visi / Misi / Logo Container with Smooth Content Transition */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-5 rounded-[32px] overflow-hidden relative min-h-[340px] bg-gradient-to-br from-[#0342ab] via-[#94abcc] to-[#bfccde] p-8 flex flex-col justify-between text-white shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                    alt="Baramedia Team"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-45 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold border border-white/30">
                      UKM MULTIMEDIA JGU
                    </span>
                    <span className="text-xs font-mono opacity-80">#BARAMEDIA</span>
                  </div>

                  <div className="relative z-10 my-8 text-center">
                    <div className="inline-block border-2 border-white/80 px-8 py-3 relative bg-white/10 backdrop-blur-sm group-hover:border-[#a3e635] transition-colors duration-300">
                      <span className="w-2.5 h-2.5 bg-white absolute -top-1.5 -left-1.5 group-hover:bg-[#a3e635] transition-colors" />
                      <span className="w-2.5 h-2.5 bg-white absolute -top-1.5 -right-1.5 group-hover:bg-[#a3e635] transition-colors" />
                      <span className="w-2.5 h-2.5 bg-white absolute -bottom-1.5 -left-1.5 group-hover:bg-[#a3e635] transition-colors" />
                      <span className="w-2.5 h-2.5 bg-white absolute -bottom-1.5 -right-1.5 group-hover:bg-[#a3e635] transition-colors" />
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

                <div className="lg:col-span-7 rounded-[32px] glass-light p-7 sm:p-10 flex flex-col justify-between transition-all duration-300">
                  {activeVisiTab === 'visi' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="inline-flex items-center gap-2 text-[#0342ab] font-bold text-sm">
                        <Compass className="w-5 h-5 animate-spin-slow" />
                        <span>VISI MULTIMEDIA</span>
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
                          <div key={i} className="p-4 rounded-2xl bg-[#e9ecf4]/90 border border-[#bfccde] hover:border-[#0342ab] hover:-translate-y-1 transition-all duration-200">
                            <p className="font-extrabold text-[#0342ab] text-sm">{p.title}</p>
                            <p className="text-xs text-slate-600 mt-1">{p.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeVisiTab === 'misi' && (
                    <div className="space-y-5 animate-in fade-in duration-300">
                      <div className="inline-flex items-center gap-2 text-[#0342ab] font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#a3e635]" />
                        <span>MISI MULTIMEDIA</span>
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
                            className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#bfccde]/60 hover:bg-white hover:shadow-md hover:-translate-x-1 transition-all duration-200"
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
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-2 border border-[#bfccde] hover:rotate-6 transition-transform">
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
                        <div className="p-4 rounded-2xl bg-white/80 border border-[#bfccde] hover:border-[#0342ab] transition-colors">
                          <p className="font-extrabold text-[#0342ab] text-sm">Pita Dinamis Huruf "M"</p>
                          <p className="text-xs text-slate-600 mt-1">
                            Melambangkan fleksibilitas, kesinambungan ide kreatif, dan sinergi 4 departemen dalam satu kesatuan Multimedia.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/80 border border-[#bfccde] hover:border-[#0342ab] transition-colors">
                          <p className="font-extrabold text-[#0342ab] text-sm">Simbol Play (Segitiga Media)</p>
                          <p className="text-xs text-slate-600 mt-1">
                            Merepresentasikan pergerakan maju tanpa henti, produksi audio-visual, dan kesiapan menyiarkan karya inspiratif.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/80 border border-[#bfccde] sm:col-span-2 hover:border-[#0342ab] transition-colors">
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

{/* ==================== 5. STRUKTUR KEPENGURUSAN (CASUAL SCRAPBOOK STYLE) ==================== */}
            <section id="kepengurusan" className="max-w-6xl mx-auto mt-24 relative p-4 sm:p-8 md:p-10 rounded-[40px] overflow-hidden">
              
              {/* BACKDROP KREATIF: Tekstur Dot Matrix, Ambient Glow & Watermark Stamp */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#bfccde]/35 to-white/70 border border-white shadow-xl rounded-[40px] pointer-events-none -z-10 overflow-hidden">
                {/* Pola Titik Grid (Dot Pattern) */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0342ab_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
                
                {/* Pendar Cahaya Neon Lembut */}
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-400/25 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#a3e635]/25 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
              </div>

              {/* Header Santai */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 relative z-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0342ab] text-[#a3e635] text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                    <Users className="w-3.5 h-3.5" /> KABINET BARAMEDIA
                  </span>
                  <h2 className="mt-2 font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                    Pengurus{' '}
                    <span className="font-serif-italic font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0342ab]">
                      Multimedia JGU
                    </span>
                  </h2>
                </div>
              </div>

              {/* GRID KARTU: 2 KOLOM DI MOBILE, 4 KOLOM DI DESKTOP */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-6 pt-2 relative z-10">
                {PENGURUS_DATA.map((person, index) => {
                  // Variasi rotasi santai ala scrapbook photo-card
                  const rotations = [
                    '-rotate-2',
                    'rotate-1',
                    'rotate-2',
                    'rotate-[-1.5deg]',
                    'rotate-1',
                    'rotate-[-2deg]',
                    'rotate-2',
                    'rotate-[-1deg]',
                    'rotate-1'
                  ];
                  const currentRotation = rotations[index % rotations.length];

                  return (
                    <div
                      key={person.id}
                      className={`relative group ${currentRotation} hover:rotate-0 hover:scale-105 transition-all duration-300`}
                    >
                      {/* Masking Tape (Selotip Transparan Atas) */}
                      <div className="absolute -top-2.5 sm:-top-3.5 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-4 sm:h-6 bg-white/60 backdrop-blur-md border border-white/50 shadow-sm z-30 rounded-xs pointer-events-none rotate-[-1deg]" />

                      {/* Frame Kartu Foto 3:4 */}
                      <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-slate-950 border-2 border-white/80 shadow-md hover:shadow-2xl aspect-[3/4] flex flex-col justify-between p-3 sm:p-4">
                        
                        {/* Foto Pengurus */}
                        <img
                          src={person.image}
                          alt={person.name}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                        />

                        {/* Gradient Bayangan Teks */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />

                        {/* 1. BAGIAN ATAS: NAMA PENGURUS (NEON LIME) */}
                        <div className="relative z-10">
                          <h3 className="font-display font-extrabold uppercase text-[#a3e635] text-xs sm:text-base lg:text-lg tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] line-clamp-2">
                            {person.name}
                          </h3>
                        </div>

                        {/* 2. BAGIAN BAWAH: JABATAN (OUTLINE PILL BOX) */}
                        <div className="relative z-10 w-full">
                          <div className="w-full text-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md border border-white/60 shadow-lg group-hover:border-[#a3e635] transition-colors">
                            <p className="text-[10px] sm:text-xs font-bold text-white tracking-tight line-clamp-1">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

           {/* ==================== 6. EMPAT DEPARTEMEN (JUDUL VERTIKAL & EXPANDABLE DOCK) ==================== */}
            <section id="departemen" className="max-w-6xl mx-auto mt-24">
              <div className="rounded-[40px] bg-[#0342ab] text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
                {/* Latar Belakang Kotak Grid Halus */}
                <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-35" />

                <div className="relative z-10 space-y-8">
                  {/* Header: Judul Bertumpuk Vertikal & Dock Ikon di Kanan */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/15">
                    {/* SISI KIRI: JUDUL EKSPLORASI & DEPARTEMEN BERBARIS VERTIKAL (TIDAK LEBAR KE SAMPING) */}
                    <div>
                      <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#a3e635] text-xs font-extrabold uppercase tracking-wider">
                        <Layers className="w-3.5 h-3.5" /> 4 departemen
                      </span>
                      <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-none">
                        <span className="block text-white">Departemeni</span>
                        <span className="block font-serif-italic font-normal text-[#bfccde] text-4xl sm:text-6xl mt-1">
                          Multimedia 
                        </span>
                      </h2>
                    </div>

                    {/* SISI KANAN: DOCK TERKUNCI 1 BARIS (FLEX-NOWRAP, BEBAS MELEBAR SAAT HOVER) */}
                    <div className="flex flex-nowrap items-center gap-2 sm:gap-2.5 p-1.5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 shrink-0 self-start sm:self-auto">
                      {DEPARTMENTS_DATA.map((dept) => {
                        const IconComponent = dept.icon;
                        const isSelected = activeDept === dept.id;

                        // Nama lengkap tanpa singkatan & tanpa titik-titik
                        const fullDepartmentNames: Record<string, string> = {
                          fotografi: 'Fotografi',
                          videografi: 'Videografi',
                          mnd: 'Media & Design',
                          pers: 'Pers'
                        };
                        const fullName = fullDepartmentNames[dept.id] || dept.name;

                        return (
                          <button
                            key={dept.id}
                            onClick={() => setActiveDept(dept.id)}
                            className={`group shrink-0 flex items-center justify-center h-12 rounded-2xl transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? 'bg-[#a3e635] text-[#0342ab] shadow-[0_8px_20px_rgba(163,230,53,0.4)] px-4'
                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/15 px-3.5 hover:px-4'
                            }`}
                          >
                            {/* Ikon Tetap Tenang di Posisi Tengah */}
                            <IconComponent className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />

                            {/* Teks Nama Full Muncul Meluncur Halus Tanpa Menabrak Elemen Lain */}
                            <span className="max-w-0 opacity-0 overflow-hidden group-hover:max-w-[180px] group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-300 ease-out whitespace-nowrap font-display font-extrabold text-xs sm:text-sm tracking-wide">
                              {fullName}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Banner Info Departemen Terpilih */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#a3e635] text-[#0342ab] flex items-center justify-center shadow-lg hover:rotate-12 transition-transform">
                        <ActiveDeptIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                          {currentDeptObj.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#bfccde] mt-0.5 font-medium">
                          {currentDeptObj.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#a3e635] text-xs font-bold self-start sm:self-auto backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Have fun & berkarya bareng!</span>
                    </div>
                  </div>

                  {/* Visual Showcase: 3 Kartu Karya */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                    {currentDeptObj.gallery.map((item, index) => (
                      <div
                        key={index}
                        className="group rounded-3xl overflow-hidden glass-card-hero p-2.5 flex flex-col justify-between aspect-[4/5] relative hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(2,24,68,0.6)] transition-all duration-500 cursor-pointer"
                      >
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#022b73] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                          <div className="absolute top-3 left-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold border border-white/30">
                              {item.tag}
                            </span>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-[#a3e635] font-bold">
                                KARYA BARAMEDIA
                              </p>
                              <h4 className="text-white font-display font-extrabold text-sm sm:text-base leading-snug mt-0.5">
                                {item.title}
                              </h4>
                            </div>
                            <span className="w-8 h-8 rounded-full bg-[#a3e635] text-[#0342ab] flex items-center justify-center shrink-0 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md">
                              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

           {/* ==================== 7. KEGIATAN & PROGRAM KERJA (SQUARE 1:1 & SEE MORE) ==================== */}
            <section id="kegiatan" className="max-w-6xl mx-auto mt-24">
              {/* Header Kegiatan (Tanpa Filter) */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#bfccde]/70 text-[#0342ab] text-xs font-extrabold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" /> REKAM JEJAK & TIMELINE PROKER
                  </span>
                  <h2 className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                    Timeline{' '}
                    <span className="font-serif-italic font-bold text-4xl sm:text-6xl text-[#0342ab]">
                      Kegiatan Baramedia
                    </span>
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#0342ab] border border-[#bfccde] font-bold text-xs shadow-sm">
                  <span>Total {ACTIVITIES_DATA.length} Kegiatan Terlaksana</span>
                </div>
              </div>

              {/* TIMELINE CONTAINER */}
              <div className="relative mt-10">
                {/* Garis Vertikal Tengah (Desktop) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-1 bg-gradient-to-b from-[#0342ab] via-[#94abcc] to-[#a3e635] rounded-full shadow-[0_0_12px_rgba(3,66,171,0.25)]" />

                {/* Garis Vertikal Kiri (Mobile) */}
                <div className="md:hidden absolute left-5 top-4 bottom-8 w-1 bg-gradient-to-b from-[#0342ab] via-[#94abcc] to-[#a3e635] rounded-full shadow-sm" />

                {/* Daftar Item Timeline */}
                <div className="space-y-12 md:space-y-20">
                  {displayedActivities.map((act, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={act.id}
                        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center pl-12 md:pl-0"
                      >
                        {/* Simpul Titik Timeline */}
                        <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-[#0342ab] border-4 border-white shadow-xl flex items-center justify-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635] animate-ping" />
                          </div>
                        </div>

                        {/* SISI 1: CARD BERASIO 1:1 (PERSEGI KOMPAK) */}
                        <div
                          className={`w-full ${
                            isEven ? 'md:order-1 md:pr-4' : 'md:order-2 md:pl-4'
                          }`}
                        >
                          <div
                            onClick={() => setSelectedActivity(act)}
                            className="group cursor-pointer rounded-[28px] overflow-hidden bg-white border-2 border-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 relative max-w-md mx-auto md:mx-0"
                          >
                            {/* Frame Gambar Persegi 1:1 */}
                            <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                              <img
                                src={act.image}
                                alt={act.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />

                              {/* Gradient Vignette */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#022b73] via-[#022b73]/50 to-transparent" />

                              {/* Badge Atas */}
                              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#0342ab] text-[#a3e635] text-[11px] font-extrabold shadow-sm">
                                  {act.highlightBadge}
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#0342ab] text-[11px] font-bold shadow-sm">
                                  {act.category}
                                </span>
                              </div>

                              {/* Konten Teks Bawah */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10">
                                <span className="text-[10px] font-semibold text-[#a3e635] uppercase tracking-wider block mb-1">
                                  Divisi: {act.department}
                                </span>
                                <h3 className="font-display font-extrabold text-base sm:text-lg leading-snug group-hover:text-[#a3e635] transition-colors line-clamp-2">
                                  {act.title}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-[#e9ecf4]/90 mt-1.5 line-clamp-2 leading-relaxed">
                                  {act.description}
                                </p>

                                {/* Tag Singkat & Tombol Aksi */}
                                <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between">
                                  <span className="text-[11px] font-semibold text-[#e9ecf4] group-hover:text-[#a3e635] transition-colors">
                                    Detail Kegiatan
                                  </span>
                                  <span className="w-7 h-7 rounded-full bg-[#a3e635] text-[#0342ab] flex items-center justify-center group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md">
                                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* SISI 2: PANEL INFORMASI TANGGAL & MILESTONE */}
                        <div
                          className={`w-full ${
                            isEven
                              ? 'md:order-2 md:pl-4 text-left'
                              : 'md:order-1 md:pr-4 md:text-right'
                          }`}
                        >
                          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0342ab] text-[#a3e635] font-extrabold text-xs shadow-md mb-2.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{act.date}</span>
                          </div>

                          <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                            Milestone #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </h4>

                          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md inline-block leading-relaxed">
                            Dokumentasi resmi dan publikasi kreatif yang dirancang oleh tim kolaborasi{' '}
                            <span className="font-bold text-[#0342ab]">{act.department}</span> untuk civitas akademika Jakarta Global University.
                          </p>

                          {/* Deliverables Output Pills */}
                          <div
                            className={`mt-3 space-y-1.5 flex flex-col ${
                              isEven ? 'items-start' : 'items-start md:items-end'
                            }`}
                          >
                            {act.deliverables.map((item: string, i: number) => (
                              <div
                                key={i}
                                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-xl border border-[#bfccde]/80 shadow-sm"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#0342ab] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* TOMBOL "SEE MORE" (MUNCUL OTOMATIS JIKA KEGIATAN LEBIH DARI 4) */}
                {ACTIVITIES_DATA.length > 4 && (
                  <div className="mt-14 text-center relative z-20">
                    <button
                      onClick={() => setShowAllActivities(!showAllActivities)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0342ab] text-white hover:bg-[#a3e635] hover:text-[#0342ab] font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <span>
                        {showAllActivities
                          ? 'Tampilkan Lebih Sedikit'
                          : `Lihat Kegiatan Lainnya (+${ACTIVITIES_DATA.length - 4} Kegiatan)`}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          showAllActivities ? '-rotate-90' : 'rotate-90'
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>
            </section>  

            {/* ==================== 8. BERITA & ARTIKEL ==================== */}
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

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={newsSearch}
                        onChange={(e) => setNewsSearch(e.target.value)}
                        placeholder="Cari berita JGU / Multimedia..."
                        className="pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#94abcc] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0342ab] w-full sm:w-64 transition-all"
                      />
                    </div>
                    <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                      {['Semua', 'Internal Multimedia', 'Berita Kampus JGU'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setNewsCategory(cat)}
                          className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                            newsCategory === cat
                              ? 'bg-[#0342ab] text-white shadow-md'
                              : 'bg-white text-slate-700 hover:bg-[#e9ecf4]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

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
                        className="cursor-pointer group rounded-[28px] bg-white p-5 border border-[#e9ecf4] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center"
                      >
                        <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden shrink-0 relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
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
                            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0342ab] group-hover:translate-x-1.5 transition-transform duration-200">
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

          {/* ==================== 9. FOOTER ==================== */}
          <footer className="bg-[#0342ab] text-white px-6 sm:px-12 py-12 border-t border-white/15">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full p-2 hover:scale-110 hover:rotate-6 transition-all duration-300">
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
                  className="px-5 py-3 rounded-full glass-card-hero text-xs sm:text-sm font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-[#a3e635]" />
                  <span>@multimediajgu</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="px-5 py-3 rounded-full bg-[#a3e635] text-[#0342ab] text-xs sm:text-sm font-extrabold hover:scale-105 active:scale-95 transition-all shadow-lg"
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

      {/* ==================== MODALS WITH FADE-ZOOM ANIMATIONS ==================== */}

      {/* 1. MODAL DETAIL PENGURUS */}
      {selectedPengurus && (
        <div
          onClick={() => setSelectedPengurus(null)}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full rounded-[32px] bg-[#e9ecf4] border-2 border-white overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 hover:rotate-90 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-[#a3e635] text-[#0342ab] text-[10px] font-extrabold uppercase shadow-sm">
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
                  {selectedPengurus.tasks.map((t: string, i: number) => (
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
                  className="px-5 py-2 rounded-full bg-[#0342ab] text-white text-xs font-bold hover:brightness-110 active:scale-95 transition-all"
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
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl w-full rounded-[32px] bg-white overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="relative h-64">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 hover:rotate-90 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#0342ab] text-[#a3e635] text-xs font-extrabold shadow-sm">
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
                  {selectedActivity.deliverables.map((d: string, i: number) => (
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

      {/* 3. MODAL BACA BERITA */}
      {selectedNews && (
        <div
          onClick={() => setSelectedNews(null)}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 hover:rotate-90 transition-all duration-200"
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
                  className="px-6 py-2.5 rounded-full bg-[#0342ab] text-white text-xs font-bold hover:brightness-110 active:scale-95 transition-all"
                >
                  Kembali ke Beranda Berita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL GABUNG BARAMEDIA */}
      {isJoinModalOpen && (
        <div
          onClick={() => setIsJoinModalOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full rounded-[32px] bg-[#0342ab] text-white p-6 sm:p-8 border border-white/30 shadow-2xl relative animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 hover:rotate-90 transition-all duration-200"
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
              <div className="my-8 p-6 rounded-2xl bg-white/15 border border-[#a3e635] text-center space-y-2 animate-in zoom-in-90 duration-300">
                <CheckCircle2 className="w-10 h-10 text-[#a3e635] mx-auto animate-bounce" />
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#e9ecf4] block mb-1">
                      Pilihan Departemen
                    </label>
                    <select
                      value={joinForm.departemen}
                      onChange={(e) => setJoinForm({ ...joinForm, departemen: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#022b73] border border-white/25 text-sm text-white focus:outline-none focus:border-[#a3e635] transition-all"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#a3e635] text-[#0342ab] font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_10px_25px_rgba(163,230,53,0.4)]"
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