import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Type, Image as ImageIcon, LayoutGrid, Square, Circle, Smile, Frame, Plus, Play,
  ChevronDown, Check, MessageSquare, Droplet, HelpCircle, Home, X, BarChart2,
  Building2, Coffee, Store, Utensils, Briefcase, Menu,
} from "lucide-react";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8 xl:gap-12">
          <a href="/" className="flex items-center group py-2 shrink-0">
            <img
              src="https://vibe.filesafe.space/1779696263388944422/attachments/d866f4a1-ad78-402a-be0d-84ca7e1a396d.png"
              alt="Kool Vision Marketing"
              className="h-12 sm:h-16 group-hover:scale-105 transition-transform object-contain"
            />
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] lg:text-[15px] font-semibold text-foreground/80">
            <a href="#" className="text-primary border-b-2 border-primary py-6 sm:py-7">Home</a>
            <a href="#" className="hover:text-primary transition-colors py-6 sm:py-7">Services</a>
            <a href="#" className="hover:text-primary transition-colors py-6 sm:py-7">Portfolio</a>
            <a href="#" className="hover:text-primary transition-colors py-6 sm:py-7">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:flex font-bold border-gray-200 text-primary hover:bg-gray-50 h-10 px-4 lg:px-6">
            Client Portal
          </Button>
          <Button className="hidden md:flex font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 lg:px-6 h-10 text-sm">
            Start a Project
          </Button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="px-4 py-5 flex flex-col gap-1">
            <a onClick={close} href="#" className="text-primary font-semibold text-base py-3 px-3 rounded-lg bg-primary/5">Home</a>
            <a onClick={close} href="#" className="text-foreground/80 font-semibold text-base py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors">Services</a>
            <a onClick={close} href="#" className="text-foreground/80 font-semibold text-base py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors">Portfolio</a>
            <a onClick={close} href="#" className="text-foreground/80 font-semibold text-base py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors">Contact</a>
          </div>
          <div className="px-4 pb-5 flex flex-col gap-2">
            <Button variant="outline" className="w-full font-bold border-gray-200 text-primary hover:bg-gray-50 h-11">Client Portal</Button>
            <Button className="w-full font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-11">Start a Project</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scaleMax = isMobile ? 1.35 : 2.5;
  const scale = useTransform(smoothProgress, [0, 0.6], [scaleMax, 1]);

  return (
    <section ref={containerRef} className="relative bg-[#f9f9fb]" style={{ height: isMobile ? "220vh" : "350vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pt-16 sm:pt-20">

        <motion.div
          style={{ scale }}
          className="relative w-[95vw] max-w-[1200px] h-[72vh] max-h-[750px] shrink-0 flex flex-col rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white origin-center lg:origin-[55%_53.7333%]"
        >
          {/* Top Bar */}
          <div className="h-12 sm:h-14 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-4 shrink-0 z-10 overflow-x-auto no-scrollbar">
            <div className="flex items-center min-w-max">
              <div className="flex gap-1.5 mr-3 sm:mr-6">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-3 text-gray-500">
                <Home className="w-4 h-4 hidden sm:block" />
                <div className="flex items-center gap-1 text-[11px] sm:text-[13px] font-medium text-gray-800 bg-gray-100 px-2 py-1 rounded">
                  Project: Redesign <ChevronDown className="w-3 h-3" />
                </div>
                <X className="w-4 h-4 hidden sm:block" />
                <div className="hidden sm:block w-[1px] h-4 bg-gray-300 mx-1" />
                <span className="hidden md:inline text-[13px] text-gray-400">Client Review - V1</span>
                <Plus className="w-4 h-4 text-gray-400 hidden sm:block" />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-5 text-gray-500 mx-4">
              <Type className="w-4 h-4" />
              <ImageIcon className="w-4 h-4" />
              <BarChart2 className="w-4 h-4" />
              <LayoutGrid className="w-4 h-4" />
              <Square className="w-4 h-4" />
              <Smile className="w-4 h-4" />
              <Frame className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-2 sm:gap-4 min-w-max ml-2 sm:ml-4">
              <div className="flex -space-x-1.5">
                <img src="https://i.pravatar.cc/100?img=1" className="w-6 h-6 rounded-full border-2 border-white relative z-30" alt="avatar" loading="lazy" />
                <img src="https://i.pravatar.cc/100?img=2" className="w-6 h-6 rounded-full border-2 border-white relative z-20" alt="avatar" loading="lazy" />
                <img src="https://i.pravatar.cc/100?img=3" className="w-6 h-6 rounded-full border-2 border-white relative z-10" alt="avatar" loading="lazy" />
              </div>
              <span className="hidden sm:inline text-[13px] font-medium text-primary">Share</span>
              <div className="flex items-center gap-1 text-primary">
                <Play className="w-4 h-4 fill-current" />
                <ChevronDown className="w-3 h-3 hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Main Editor Body */}
          <div className="flex-1 flex overflow-hidden">

            {/* Left Sidebar */}
            <div className="hidden lg:flex w-[200px] xl:w-[240px] bg-[#f9fafb] border-r border-gray-200 flex-col shrink-0">
              <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <span className="text-[13px] font-bold text-gray-800 flex items-center gap-1">Project: Redesign <ChevronDown className="w-3 h-3" /></span>
                <span className="text-[11px] text-gray-500">Wireframes</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex gap-3 items-start relative">
                  <span className="text-[11px] font-bold text-primary mt-1">1</span>
                  <div className="relative w-full aspect-[16/10] bg-white border-2 border-primary rounded-lg p-2 shadow-sm overflow-hidden flex flex-col items-center justify-center">
                    <div className="text-[8px] font-black text-primary leading-tight text-center">Websites<br />Drive Results.</div>
                    <div className="absolute top-[-6px] right-[-6px] w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"><Check className="w-2 h-2 text-white" /></div>
                    <div className="absolute bottom-1 right-1 bg-gray-600 text-white text-[8px] px-1 rounded flex items-center gap-0.5"><MessageSquare className="w-2 h-2" /> 3</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start opacity-70">
                  <span className="text-[11px] font-bold text-gray-400 mt-1">2</span>
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-yellow-200 to-pink-300 rounded-lg p-2 flex flex-col justify-center">
                    <div className="text-[8px] font-bold text-white">Homepage</div>
                    <div className="text-[5px] text-white/80">Hero Section Layout</div>
                    <div className="absolute top-1 right-[-4px] w-3 h-3 bg-yellow-500 rounded-full border-2 border-white" />
                  </div>
                </div>
                <div className="flex gap-3 items-start opacity-70">
                  <span className="text-[11px] font-bold text-gray-400 mt-1">3</span>
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg p-2 flex flex-col justify-center items-center">
                    <div className="text-[5px] text-white/80 uppercase">Design System</div>
                    <div className="text-[8px] font-bold text-white mb-2">Style Guide</div>
                    <div className="w-full h-[1px] bg-white/30 relative">
                      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full -translate-y-1/2" />
                      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-y-1/2" />
                      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full -translate-y-1/2" />
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full py-3 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-primary bg-white gap-1 hover:bg-gray-50 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="text-[12px] font-medium">Add slide</span>
                </button>
              </div>
            </div>

            {/* Center Canvas Area */}
            <div className="flex-1 bg-[#f0f1f3] flex items-center justify-center overflow-hidden relative">
              <div className="w-full max-w-[840px] aspect-[16/9] bg-white shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center p-4">

                <div className="relative z-10">
                  <h2 className="text-[24px] sm:text-[36px] md:text-[52px] font-black tracking-tighter text-primary leading-[1.05] mb-3 md:mb-6">
                    Websites<br />That Drive<br />Results.
                  </h2>
                  <p className="text-[11px] sm:text-[13px] md:text-[14px] text-gray-500 max-w-[280px] sm:max-w-[320px] mx-auto leading-relaxed">
                    End-to-end web design, content creation, and maintenance for Middle Tennessee organizations.
                  </p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-[800px] h-full max-h-[400px] z-20 pointer-events-none flex items-center justify-center">
                  <motion.img
                    animate={{ y: [0, -20, 0], rotate: [-5, 0, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Mobile%20phone/3D/mobile_phone_3d.png"
                    alt="Phone"
                    className="absolute -left-2 sm:-left-8 md:-left-10 top-8 sm:top-0 w-16 sm:w-28 md:w-48 h-auto drop-shadow-2xl"
                    loading="lazy"
                  />
                  <motion.img
                    animate={{ y: [0, 20, 0], rotate: [5, 0, 5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Camera/3D/camera_3d.png"
                    alt="Camera"
                    className="absolute -right-2 sm:right-0 bottom-8 sm:bottom-0 w-20 sm:w-36 md:w-56 h-auto drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden md:flex w-[56px] lg:w-[64px] bg-[#f9fafb] border-l border-gray-200 flex-col items-center py-6 shrink-0 justify-between">
              <div className="flex flex-col gap-5 lg:gap-6 w-full items-center">
                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-gray-800">
                  <Droplet className="w-5 h-5" />
                  <span className="text-[9px] font-medium">Design</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-800 relative">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mb-1"><Check className="w-4 h-4" /></div>
                  <img src="https://i.pravatar.cc/100?img=1" className="w-6 h-6 rounded-full absolute top-4 shadow-sm border border-white" alt="avatar" loading="lazy" />
                  <span className="text-[9px] font-medium mt-3">Workflow</span>
                  <div className="absolute top-[-4px] right-1 bg-primary text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">3</div>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-gray-800 mt-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-[9px] font-medium">Comment</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-gray-800">
                  <Smile className="w-5 h-5" />
                  <span className="text-[9px] font-medium">Reaction</span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 cursor-pointer hover:text-gray-800 hover:border-gray-800">
                <HelpCircle className="w-4 h-4" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EarlyAccess = () => {
  return (
    <section className="py-16 sm:py-24 bg-white text-center px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground">Get free marketing insights and web design tips.</h2>
      <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto w-full" onSubmit={e => e.preventDefault()}>
        <Input type="email" placeholder="Your email" className="h-12 w-full sm:w-64 bg-gray-50/50 border-gray-200" required />
        <Button type="submit" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shrink-0">Subscribe</Button>
      </form>
    </section>
  );
};

const Logos = () => {
  const logos = [
    { icon: Building2, name: "TN Real Estate" },
    { icon: Coffee, name: "Nashville Cafe" },
    { icon: Store, name: "Local Boutique" },
    { icon: Utensils, name: "Franklin Dining" },
    { icon: Briefcase, name: "Middle TN Law" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f9f9fb] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
        <h5 className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-8 sm:mb-12">
          Trusted by Middle Tennessee businesses
        </h5>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
          {logos.map((Logo, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Logo.icon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
              <span className="font-bold text-base sm:text-lg tracking-tight">{Logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-5 md:mb-8 leading-[1.1]">
              A design process that just works.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium">
              We handle the technical heavy lifting so you can focus on your business. From wireframes to final launch, our collaborative process keeps you in the loop without overwhelming you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://vibe.filesafe.space/1779696263388944422/assets/cd778dd6-9872-4b82-b8d7-2a294c818b5f.png"
              alt="Workflow Workspace"
              className="w-full rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-gray-100 object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Decks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const yUp1 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const yDown1 = useTransform(smoothProgress, [0, 1], [-200, 100]);
  const yUp2 = useTransform(smoothProgress, [0, 1], [100, -200]);
  const yDown2 = useTransform(smoothProgress, [0, 1], [-100, 200]);
  const yUp3 = useTransform(smoothProgress, [0, 1], [50, -250]);

  const baseImages = [
    "https://vibe.filesafe.space/1779696263388944422/attachments/2874424b-853d-4637-a19f-58da6049ab35.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/a9752dc4-0ee3-4105-87e3-214d9ef7d34f.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/8a847f4f-12a0-4305-994b-01df92b6a544.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/4b4ac4b0-5cc8-4638-8017-7907ddb2a91d.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/04fddba1-6c38-4048-9f96-791da0323cd1.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/f543314a-1428-4987-8801-4e211074877f.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/abf21757-902d-4536-8e08-ec745ba53ec6.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/05258594-bae3-4a53-8d73-b8d56054f5e3.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/8c2ddd75-9791-48d2-94e6-1afab522ae4a.webp",
    "https://vibe.filesafe.space/1779696263388944422/attachments/f0408593-c5e9-4f2c-bf34-5ae210091de0.webp",
  ];

  const allSlides = Array.from({ length: 25 }, (_, i) => baseImages[(i * 3) % baseImages.length]);
  const mobileSlides = Array.from({ length: 15 }, (_, i) => baseImages[(i * 3) % baseImages.length]);

  const slides = isMobile ? mobileSlides : allSlides;
  const colCount = isMobile ? 3 : 5;

  const cols = Array.from({ length: colCount }, (_, c) =>
    slides.filter((_, idx) => idx % colCount === c)
  );

  const allTransforms = [yUp1, yDown1, yUp2, yDown2, yUp3];
  const transforms = allTransforms.slice(0, colCount);

  return (
    <section ref={containerRef} className="py-20 sm:py-32 bg-[#f9f9fb] overflow-hidden relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-20 relative z-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-5 md:mb-8 leading-[1.1]">
          From concept to launch in no time
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium">
          Explore our portfolio of custom-crafted websites for local businesses. We build fast, responsive, and SEO-optimized sites that drive real results for your brand.
        </p>
      </div>

      <div
        className="flex gap-3 sm:gap-4 md:gap-6 relative z-10"
        style={{
          width: isMobile ? "140%" : "120%",
          marginLeft: isMobile ? "-20%" : "-10%",
          height: isMobile ? "380px" : "800px",
        }}
      >
        {cols.map((col, i) => (
          <motion.div
            key={i}
            style={{ y: transforms[i] }}
            className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-6 will-change-transform"
          >
            {col.map((src, j) => (
              <img
                key={j}
                src={src}
                alt={`Portfolio ${i}-${j}`}
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            ))}
          </motion.div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-[#f9f9fb] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-[#f9f9fb] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

const Formatting = () => {
  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10"
              />
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 w-52 sm:w-64 h-64 sm:h-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6 flex flex-col gap-4 will-change-transform"
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center"><Square className="w-4 h-4 text-primary" /></div>
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center"><Circle className="w-4 h-4 text-gray-400" /></div>
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center"><Type className="w-4 h-4 text-gray-400" /></div>
                  </div>
                  <div className="w-full h-28 sm:h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-gray-300" />
                  </div>
                  <div className="space-y-2 mt-auto">
                    <div className="w-full h-3 bg-gray-100 rounded-full" />
                    <div className="w-4/5 h-3 bg-gray-100 rounded-full" />
                    <div className="w-2/3 h-3 bg-gray-100 rounded-full" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute right-0 sm:-right-6 top-16 sm:top-20 z-30 bg-white p-2 sm:p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 will-change-transform"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-600 whitespace-nowrap">Responsive layout applied</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg order-1 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-5 md:mb-8 leading-[1.1]">
              Development that's effortless
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium mb-5 sm:mb-6">
              You focus on your business — we'll take care of the code. Kool Vision's modern tech stack ensures your site is blazingly fast, secure, and easy to manage.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium">
              Whether you need a simple landing page or a complex e-commerce platform, we give your brand digital superpowers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Integrations = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#f9f9fb] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-5 md:mb-8 leading-[1.1]">
              Integrated with what matters
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium">
              Your website shouldn't live in a silo. We seamlessly integrate your site with the CRM, analytics, and marketing tools you rely on every day to turn visitors into loyal customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="https://vibe.filesafe.space/1779696263388944422/assets/78d8ca95-b11a-489e-809f-483a4949b9b0.png"
              alt="Integrations"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Sharing = () => {
  return (
    <section className="pt-20 sm:pt-32 pb-0 bg-white overflow-hidden text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-5 md:mb-8 leading-[1.1]">
          Websites that perform everywhere
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium">
          Over half of all web traffic comes from mobile devices. We ensure your site looks stunning and functions perfectly on desktops, tablets, and smartphones alike.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        <img
          src="https://vibe.filesafe.space/1779696263388944422/assets/80f2944a-f9d6-4eea-b9c7-1f3893bd1dc8.png"
          alt="Desktop preview"
          className="w-full h-auto rounded-t-2xl sm:rounded-t-3xl shadow-2xl object-cover aspect-[16/9]"
          loading="lazy"
        />
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="https://vibe.filesafe.space/1779696263388944422/assets/24ed9e93-f67c-472c-8b7c-360010aacd5d.png"
          alt="Mobile preview"
          className="absolute -top-8 sm:-top-16 md:-top-28 right-2 sm:right-6 md:right-10 w-[18%] sm:w-1/4 max-w-[200px] sm:max-w-[250px] z-20 pointer-events-none rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-white"
          loading="lazy"
        />
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="https://vibe.filesafe.space/1779696263388944422/assets/cdc2534b-6887-48da-bd98-fcebb3613ce8.png"
          alt="Tablet preview"
          className="absolute bottom-6 sm:bottom-12 md:bottom-20 -left-2 sm:left-4 md:left-10 w-[28%] sm:w-1/3 max-w-[300px] sm:max-w-[350px] z-20 pointer-events-none shadow-2xl rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white"
          loading="lazy"
        />
      </div>
    </section>
  );
};

const News = () => {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <a href="#" className="group block bg-[#f9f9fb] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="p-6 sm:p-8 md:p-12 pb-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-foreground mb-5 sm:mb-8 group-hover:text-primary transition-colors">
                Local SEO Strategies for Middle TN Businesses
              </h3>
            </div>
            <div className="px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12">
              <img
                src="https://vibe.filesafe.space/1779696263388944422/assets/5eb3a50a-cbb1-4287-9ea7-aaa71a5b89d4.png"
                alt="Blog Post"
                className="w-full rounded-xl shadow-md group-hover:-translate-y-2 transition-transform duration-500 object-cover aspect-video"
                loading="lazy"
              />
            </div>
            <div className="px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 flex items-center gap-2 text-primary font-bold">
              Read more <span className="text-xl">→</span>
            </div>
          </a>

          <a href="#" className="group block bg-primary rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-shadow text-white flex flex-col justify-between">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 opacity-80">Web Design Trends</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-5 sm:mb-8">
                Why your business needs a modern website in 2024
              </h3>
              <p className="text-base sm:text-lg md:text-xl opacity-80 leading-relaxed font-medium">
                A deep dive into how user expectations have changed and what you need to do to stay competitive online.
              </p>
            </div>
            <div className="px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 flex items-center gap-2 font-bold">
              Learn more <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kool Vision completely transformed our online presence. Our new site is fast, beautiful, and most importantly, it's bringing in more local customers than ever before.",
      name: "Sarah Jenkins",
      title: "Owner, Nashville Cafe",
      image: "https://vibe.filesafe.space/1779696263388944422/assets/e560337b-7647-459e-803a-82efe69c4d70.png",
    },
    {
      quote: "Working with the team was a breeze. They handled everything from the design to the copywriting, and the final result exceeded our expectations.",
      name: "Mike Thompson",
      title: "Broker, Middle TN Real Estate",
      image: "https://vibe.filesafe.space/1779696263388944422/assets/62e8caef-5824-4cb5-8093-88665806ceac.png",
    },
    {
      quote: "If you need a website in Tennessee, look no further. Kool Vision makes the whole process effortless and delivers a world-class product.",
      name: "Elena Rodriguez",
      title: "Founder, Local Boutique",
      image: "https://vibe.filesafe.space/1779696263388944422/assets/04fcb5fe-f82b-483f-a35c-174ab7e8b6e3.png",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-center text-foreground mb-10 sm:mb-20">
          What others are saying
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed flex-1 mb-8 sm:mb-10 font-medium">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shrink-0" loading="lazy" />
                <div>
                  <h4 className="font-bold text-foreground text-base sm:text-lg">{t.name}</h4>
                  <p className="text-sm text-foreground/50 font-medium">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 sm:py-32 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12 leading-[1.1]">
            Ready to build your digital presence?
          </h2>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-6" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Your email"
              className="h-12 sm:h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white shadow-none text-base w-full"
              required
            />
            <Button
              type="submit"
              className="h-12 sm:h-14 px-8 sm:px-10 bg-white text-primary hover:bg-white/90 font-bold text-base w-full sm:w-auto shrink-0"
            >
              Sign up
            </Button>
          </form>
          <p className="text-sm text-white/70 font-medium">
            We care about protecting your data. Here's our{" "}
            <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-10 sm:py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
        <div className="col-span-2 lg:col-span-2">
          <a href="/" className="inline-block mb-5 sm:mb-6">
            <img
              src="https://vibe.filesafe.space/1779696263388944422/attachments/d866f4a1-ad78-402a-be0d-84ca7e1a396d.png"
              alt="Kool Vision Marketing"
              className="h-9 sm:h-10 object-contain"
              loading="lazy"
            />
          </a>
          <p className="text-sm text-foreground/50 mb-5 sm:mb-6 font-medium">
            © {new Date().getFullYear()} Kool Vision Marketing.<br />
            All rights reserved.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-foreground mb-4 sm:mb-6">Company</h5>
          <ul className="space-y-3 sm:space-y-4 text-sm text-foreground/60 font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-foreground mb-4 sm:mb-6">Legal</h5>
          <ul className="space-y-3 sm:space-y-4 text-sm text-foreground/60 font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-foreground mb-4 sm:mb-6">Follow us</h5>
          <ul className="space-y-3 sm:space-y-4 text-sm text-foreground/60 font-medium">
            <li><a href="https://www.facebook.com/KoolVisionMedia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/kool_vision_media" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="https://www.youtube.com/@KoolVisionMediaMarketing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EarlyAccess />
      <Logos />
      <Workflow />
      <Decks />
      <Formatting />
      <Integrations />
      <Sharing />
      <News />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
