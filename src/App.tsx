/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  EyeOff, 
  MessageSquareOff, 
  TrendingDown, 
  LogOut, 
  Users, 
  ChevronRight,
  Menu,
  ShieldCheck,
  Zap,
  BarChart3,
  Video
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navLinks = [
    { name: "Tính năng", href: "#" },
    { name: "Lợi ích", href: "#" },
    { name: "Báo giá", href: "#" },
    { name: "Demo", href: "#" },
  ];

  const features = [
    "Tăng mắt xem livestream",
    "Seeding comment tự động",
    "Tăng tương tác video TikTok",
    "Kéo đúng tệp khách hàng làm đẹp",
    "Hỗ trợ livestream sôi động hơn"
  ];

  const painPoints = [
    {
      id: "pain-1",
      icon: <EyeOff className="w-8 h-8" />,
      title: "Live ít mắt xem",
      desc: "Livestream không có người xem, thuật toán không phân phối."
    },
    {
      id: "pain-2",
      icon: <MessageSquareOff className="w-8 h-8" />,
      title: "Không có comment",
      desc: "Không có ai hỏi mua hàng, không khí im ắng, nhàm chán."
    },
    {
      id: "pain-3",
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Video bị chìm",
      desc: "Video đăng lên ít view, không lên xu hướng, tốn công vô ích."
    },
    {
      id: "pain-4",
      icon: <LogOut className="w-8 h-8" />,
      title: "Khách vào rồi thoát",
      desc: "Khách lướt qua không dừng lại vì live trông quá vắng vẻ."
    },
    {
      id: "pain-5",
      icon: <Users className="w-8 h-8" />,
      title: "Thiếu hiệu ứng",
      desc: "Không tạo được hiệu ứng đông khách, thiếu động lực chốt đơn."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
          isScrolled ? "glass-panel shadow-2xl py-3" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div id="logo-container" className="flex items-center gap-2 group cursor-pointer">
             <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center neon-box-cyan transform group-hover:scale-110 transition-transform">
               <Video className="text-brand-bg w-6 h-6 fill-current" />
             </div>
             <h1 id="app-name" className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight">
               MKT <span className="text-brand-cyan">TikPro</span>
             </h1>
          </div>

          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div id="nav-actions" className="flex items-center gap-4">
            <button id="btn-header-demo" className="hidden sm:block bg-brand-cyan text-brand-bg px-6 py-2 rounded font-bold text-xs uppercase tracking-wider hover:bg-white transition-all transform hover:scale-105 active:scale-95 neon-box-cyan">
              NHẬN DEMO NGAY
            </button>
            <button id="btn-mobile-menu" className="md:hidden text-white p-2">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-brand-cyan/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-40 w-80 h-80 bg-brand-pink/30 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              id="hero-content" 
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <h2 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black font-headline text-white leading-[1.1] uppercase neon-text-cyan">
                  LIVESTREAM <br />
                  <span className="text-white">MỸ PHẨM ÍT</span> <br />
                  <span className="text-white">NGƯỜI XEM?</span>
                </h2>
                <h3 id="hero-subtitle" className="text-xl md:text-2xl font-headline font-bold text-brand-pink uppercase tracking-wide neon-text-pink mt-4">
                  VIDEO TIKTOK KHÔNG CÓ TƯƠNG TÁC?
                </h3>
              </div>

              <p id="hero-description" className="text-gray-400 text-lg leading-relaxed max-w-xl">
                MKT TikPro giúp shop mỹ phẩm tăng tương tác TikTok, seeding livestream và tạo hiệu ứng live đông người tự động. Giải pháp tối ưu để đột phá doanh thu trên nền tảng Video ngắn.
              </p>

              <motion.ul 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                id="feature-list" 
                className="flex flex-col gap-4"
              >
                {features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    variants={fadeIn}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                    <span className="font-medium text-sm md:text-base">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div id="hero-cta" className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
                <button id="btn-hero-demo" className="bg-brand-cyan text-brand-bg px-10 py-5 rounded font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 neon-box-cyan w-full sm:w-auto">
                  NHẬN DEMO NGAY
                </button>
                <div id="price-info" className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Chi phí siêu tiết kiệm</span>
                  <span id="price-value" className="text-2xl font-headline font-black text-brand-cyan">CHỈ 3 TRIỆU / 1 NĂM</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="hero-image-container" 
              className="relative aspect-square md:aspect-video lg:aspect-square w-full"
            >
              <div id="image-glow" className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/20 to-brand-pink/20 blur-3xl -z-10 rounded-3xl" />
              <div 
                id="hero-main-image"
                className="w-full h-full rounded-2xl bg-cover bg-center border border-brand-outline neon-box-cyan overflow-hidden relative group"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC129mJpSXBwjeTTNrfVb967DvIkHJpThvpIkUh9io_r2eA3TzieqroUs3x1JgrkGtn5EWGJQAv3g68ToFShspfjvrcZOYdsM3gkUSrQ_vKMWMvyx5el9RfL7zxsLDfXkjGcGuTZMCyehosLY8rBUSmUjvJd2RfRfLx5YBL5ZPpWMkuDku_V7Bd15wjz-WUqv4Fo-aCgQKaFvKaEqJVA_DB82hFcyHm9MombMQGTgTyzFzAWFZdx-nHJaTo8TGHd5EF1NysgoDbafY")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent group-hover:from-brand-bg/40 transition-all" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="pain-points" className="py-24 px-6 md:px-12 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            <motion.div 
              {...fadeIn}
              id="pain-points-header" 
              className="text-center"
            >
              <h2 id="pain-points-title" className="text-2xl md:text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tight leading-tight neon-text-pink max-w-4xl mx-auto">
                TẠI SAO NHIỀU SHOP MỸ PHẨM LIVESTREAM KHÔNG RA ĐƠN?
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              id="pain-grid" 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {painPoints.map((point) => (
                <motion.div 
                  key={point.id}
                  variants={fadeIn}
                  id={point.id}
                  className="glass-panel p-8 rounded-2xl flex flex-col gap-6 hover:border-brand-pink/50 transition-all group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink group-hover:scale-110 group-hover:bg-brand-pink/20 transition-all">
                    {point.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-headline font-bold text-white group-hover:text-brand-pink transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer / Features Detail Section - Simplified representation */}
        <section id="trust-indicators" className="py-20 px-6 border-t border-brand-outline">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
             <div id="trust-1" className="flex items-center gap-4">
                <ShieldCheck className="text-brand-cyan w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Bảo mật tuyệt đối</span>
                  <span className="text-gray-500 text-xs">An toàn cho tài khoản</span>
                </div>
             </div>
             <div id="trust-2" className="flex items-center gap-4">
                <Zap className="text-brand-cyan w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Hiệu quả tức thì</span>
                  <span className="text-gray-500 text-xs">Kích hoạt trong 5 phút</span>
                </div>
             </div>
             <div id="trust-3" className="flex items-center gap-4">
                <BarChart3 className="text-brand-cyan w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Báo cáo real-time</span>
                  <span className="text-gray-500 text-xs">Theo dõi mọi chỉ số</span>
                </div>
             </div>
             <div id="trust-4" className="flex items-center gap-4">
                <CheckCircle2 className="text-brand-cyan w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Hỗ trợ 24/7</span>
                  <span className="text-gray-500 text-xs">Luôn đồng hành cùng bạn</span>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer id="main-footer" className="bg-black py-12 px-6 border-t border-brand-outline/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
             <Video className="text-brand-cyan w-6 h-6" />
             <span className="text-white font-bold font-headline">MKT TikPro</span>
           </div>
           <p className="text-gray-500 text-xs">
             &copy; {new Date().getFullYear()} MKT TikPro. All rights reserved. Hỗ trợ kinh doanh TikTok hiệu quả.
           </p>
           <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium">Điều khoản</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium">Bảo mật</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

