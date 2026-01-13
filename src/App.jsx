import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';
import { 
  Github, Mail, Smartphone, Globe, Menu, X, Code2, 
  Database, Cpu, Layers, ArrowRight, Sun, Moon, Info,
  FileText, MessageCircle, Send, Phone, Linkedin, CheckCircle2, AlertCircle, Laptop,
  WineIcon,
  AppWindowMac,
  ToolCase
} from 'lucide-react';

// --- مكون مؤشر الماوس المخصص ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <motion.div 
      className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[999] hidden md:block"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
    />
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  // مرجع للصورة للتحكم في التكبير
  const imgRef = useRef();
  const pinchZoomRef = useRef();

  // دالة تحديث تحويلات التكبير (Zoom Transform)
  const onUpdate = useCallback(({ x, y, scale }) => {
    if (imgRef.current) {
      const value = make3dTransformValue({ x, y, scale });
      imgRef.current.style.setProperty('transform', value);
    }
  }, []);

  // منع التمرير عند فتح النوافذ المنبثقة
  useEffect(() => {
    if (selectedProject || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject, selectedImage]);

  // إعادة ضبط الزووم عند تغيير الصورة داخل المعرض
  useEffect(() => {
    if (pinchZoomRef.current) {
      pinchZoomRef.current.scaleTo({ scale: 1, x: 0, y: 0 });
    }
  }, [currentImageIndex]);

  const navLinks = [
    { name: 'الرئيسية', id: 'home' },
    { name: 'أعمالي', id: 'projects' },
    { name: 'المهارات', id: 'skills' },
    { name: 'التواصل', id: 'contact' },
  ];

  const skillCategories = [
    { title: "لغات البرمجة", skills: ["#C", "Dart", "Python", "Java"], icon: <Code2 size={20}/> },
    { title: "تقنيات الويب", skills: ["Django", "CSS", "HTML", "React","JS"], icon: <Globe size={20}/> },
    { title: "تطبيقات الموبايل", skills: ["React Native","Flutter"], icon: <Smartphone size={20}/> },
    { title: "قواعد البيانات", skills: ["PostgreSQL", "MySQL", "SQL Server", "SQL Plus"], icon: <Database size={20}/> },
    { title: "أدوات التطوير", skills: ["Figma", "Postman", "GitHub", "VS Code","Git"], icon: <ToolCase size={20}/> },
    { title: " أنظمة التشغيل", skills: ["Linux","Windows"], icon: <AppWindowMac size={20}/> }
  ];

  const projectData = [
    {
      id: 1,
      tagIcon: <Layers size={20} />, 
      title: "بذرة وحصاد",
      desc: "نظام زراعي ذكي لربط المزارعين بالتجار وتصنيف التربة بالذكاء الاصطناعي.",
      techStack: ["AI", "Flutter", "Api", "Django"],
      problem: "صعوبة وصول المزارعين للأسواق المباشرة وعدم معرفة مواعيد الريء والتسميد المنتظم.",
      solution: "تطوير نظام متكامل بـ Django API وتطبيق Flutter قام بحل جميع المشاكل.",
      codeSnippet: "class PlantForm(forms.ModelForm):\n    class Meta:\n        model = Plants\n        fields = ['category',\n        'plant_name', 'water_requirement',\n        'fertilizer_requirement','harvest',\n        'validity', 'informations','image',\n        'img1', 'img2']",
      image: "/images/seed1.png",
      codeImg: "/images/seed2.png"
    },
    {
        id: 2,
        tagIcon: <Smartphone size={20} />,
        title: "موقع لخدمات السيارات",
        desc: "يوفر كل ما تحتاجه سيارتك من تكنولوجيا وإكسسوارات في مكان واحد.",
        techStack: ["Api", "React"], 
        problem: "مع وجود الكثير من الأسواق يتشتت الزبون بإيهما يختار.",
        solution: "قمنا بتوفير جميع الأكسسوارات وتكنولوجيا السيارات في مكان واحد مع توفير الدعم الفني.",
        codeSnippet: "const Services = () => {\n  const { setSelectedService }\n   = useAppContext();\n  const [activeCategory,setActiveCategory]\n   = useState('all');\n  const [services, setServices]\n   = useState([]);\n  const [apiCategories, setApiCategories]\n   = useState([]);",
        image: "/images/car1.png",
        codeImg: "/images/cars.jpg"
      },
      {
        id: 3,
        tagIcon: <Smartphone size={20} />,
        title: "تطبيق تعليمي",
        desc: "تطبيق تعليمي مجاني يهدف الى مساعدة الطلاب في الوصول الى المواد الدراسية بسهولة.",
        techStack: ["GetX", "Flutter"], 
        problem: "تشتت الملفات الدراسية وعدم وجود وسيلة تقييم سريعة للطلاب.",
        solution: "تطبيق موبايل يوفر جميع الملازم والملخصات ونماذج الأختبارات.",
        codeSnippet: "class HomeScreen extends StatefulWidget{\n  const HomeScreen({super.key});\n  @override\n  State<HomeScreen> createState()\n  => _HomeScreenState();\n }",
        image: "/images/level1.png",
        codeImg: "/images/level2.png"
      }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#05070A] text-white' : 'bg-white text-slate-900'} font-sans overflow-x-hidden transition-colors duration-500`} dir="rtl">
      <CustomCursor />
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-[100] ${darkMode ? 'bg-[#05070A]/80' : 'bg-white/80'} backdrop-blur-xl border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="w-1/3 flex justify-start">
            <motion.div className="flex flex-col items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/aa.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-accent -mt-2 uppercase italic leading-none">
                devel<span className={darkMode ? 'text-white' : 'text-slate-900'}>oper</span>
              </span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-2 bg-white/5 p-1 rounded-full border border-white/20">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="px-6 py-2 text-sm font-bold tracking-widest hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex w-1/3 justify-end">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full text-accent"
            >
              {darkMode ? <Sun size={30} /> : <Moon size={30} />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-accent"
            >
              {darkMode ? <Sun size={26} /> : <Moon size={26} />}
            </motion.button>
            <button className="p-2 text-accent" onClick={() => setIsMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed inset-0 z-[200] bg-[#05070A] flex flex-col items-center justify-center gap-10 text-3xl font-black md:hidden text-white"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 left-8 text-accent"><X size={40} /></button>
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 w-full max-w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px]"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-10">
            <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-12 opacity-80"></div>
            <img src="/an.jpg" alt="Abdullah" className="relative w-full h-full object-cover object-[center_25%] rounded-[2.5rem] border-2 border-accent/30 p-1.5 bg-[#05070A] shadow-2xl transition-all"/>
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">Abdullah <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">Nadeesh</span></h2>
          <p className={`max-w-3xl mx-auto text-lg md:text-2xl mb-28 leading-relaxed italic ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>مطور مواقع ويب متكاملة وتطبيقات أندرويد شغفي تحويل الأفكار المعقدة لتصميمات بسيطة وواضحة.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-accent text-primary font-bold rounded-2xl shadow-xl shadow-accent/20">معرض الأعمال</a>
            <a href="/cv.pdf" download className={`w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-3 font-bold rounded-2xl border ${darkMode ? 'bg-white/5 border-accent' : 'bg-white border-slate-400'}`}>السيرة الذاتية</a>
          </div>
        </motion.div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-3.5 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-7"><h2 className="text-3xl md:text-6xl font-black tracking-tighter">أبرز <span className="text-accent">أعمالي</span></h2><div className="h-[2px] flex-1 bg-gradient-to-l from-accent/40 to-transparent"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectData.map((project, i) => (
            <motion.div key={i} className={`p-6 rounded-[2rem] border ${darkMode ? 'bg-white/[0.03] border-accent/90' : 'bg-white border-slate-300 shadow-xl'} relative group text-center flex flex-col items-center`}>
              <div className="flex justify-between items-center w-full mb-6 flex-row-reverse">
                <div className="p-4 bg-accent/10 rounded-full text-accent shadow-lg">{project.tagIcon}</div>
                <button 
                  onClick={() => setSelectedProject(project)} 
                  className="px-4 py-2 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-white transition-all shadow-lg font-bold text-xs"
                >
                  أضغط للتفاصيل
                </button>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm opacity-80 mb-10 leading-relaxed line-clamp-2">{project.desc}</p>
              <div className="flex flex-wrap gap-3 justify-center mt-auto pt-6 border-t border-white/5 w-full">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[13px] font-bold text-accent/80 px-2 py-1 bg-accent/10 rounded-md border border-accent/10">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-3.5 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-7 px-4"><h2 className="text-4xl md:text-6xl font-black tracking-tighter">المهارات <span className="text-accent">التقنية</span></h2><div className="h-[2px] flex-1 bg-gradient-to-l from-accent/30 to-transparent"></div></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} className={`p-8 rounded-[2rem] border ${darkMode ? 'bg-white/[0.03] border-accent/90' : 'bg-white border-slate-200 shadow-lg'}`}>
              <div className="text-accent mb-6 flex items-center gap-3">{cat.icon}<h4 className="font-black text-sm uppercase tracking-widest">{cat.title}</h4></div>
              <div className="flex flex-wrap gap-3 justify-center mt-auto pt-6">{cat.skills.map(s => (<span key={s} className="px-3 py-1.5 bg-accent/10 text-accent/80 text-[13px] font-bold rounded-lg border border-accent/10">{s}</span>))}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Contact Footer --- */}
      <footer id="contact" className={`py-14 px-6 border-t ${darkMode ? 'border-white/5 bg-gradient-to-b from-transparent to-accent/5' : 'bg-white border-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-20 tracking-tighter leading-tight">هل لديك فكرة لمشروع؟</h2>
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-8 md:gap-9 mb-14 items-center max-w-[280px] md:max-w-none mx-auto">
            <ContactIcon icon={<Phone size={32}/>} label="الهاتف" href="tel:+967771262667" />
            <ContactIcon icon={<Send size={32}/>} label="تليجرام" href="https://t.me/A_N_206" />
            <ContactIcon icon={<Mail size={32}/>} label="الايميل" href="mailto:an206sh@gmail.com" />
            <ContactIcon icon={<MessageCircle size={32}/>} label="واتساب" href="https://wa.me/967771262667" />
          </div>
          <p className="py-14 text-sm opacity-50">Developer By Engineer Abdullah Nadeesh ©2025</p>
        </div>
      </footer>

      {/* --- Project Details Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-8 ${darkMode ? 'bg-black/95' : 'bg-white/90'} backdrop-blur-md`}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className={`max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 rounded-[2.5rem] ${darkMode ? 'bg-[#05070A] text-white border-white/10' : 'bg-white text-slate-900 border-slate-200 shadow-2xl'} relative border custom-scrollbar`}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 left-6 p-3 hover:text-accent z-50 rounded-full bg-white/5"><X size={32} /></button>
              <div className="text-center mt-8 mb-12"><h3 className="text-4xl md:text-6xl font-black text-accent">{selectedProject.title}</h3></div>
              <div className="flex flex-col gap-12 items-center">
                <div className="w-full max-w-3xl space-y-10">
                  <DetailBox title="المشكلة" content={selectedProject.problem} />
                  <DetailBox title="الحل التقني" content={selectedProject.solution} />
                </div>
                <div className={`w-full max-w-4xl p-8 rounded-3xl border ${darkMode ? 'bg-accent/5 border-accent/20' : 'bg-slate-50 border-slate-200'}`}>
                  <h5 className="text-accent font-black text-xl mb-6">مثال من الكود النظيف</h5>
                  <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-left" dir="ltr">{selectedProject.codeSnippet}</pre>
                </div>
                <div className="w-full max-w-4xl text-center">
                    <h5 className="text-accent font-extrabold text-2xl mb-8">صور من المشروع</h5>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ProjectImg 
                            src={selectedProject.image} 
                            onClick={() => {
                                setGalleryImages([selectedProject.image, selectedProject.codeImg]);
                                setCurrentImageIndex(0);
                                setSelectedImage(selectedProject.image);
                            }} 
                        />
                        <ProjectImg 
                            src={selectedProject.codeImg} 
                            onClick={() => {
                                setGalleryImages([selectedProject.image, selectedProject.codeImg]);
                                setCurrentImageIndex(1);
                                setSelectedImage(selectedProject.codeImg);
                            }} 
                        />
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Full Image Lightbox with ZOOM (نسخة مستقرة) --- */}
      {/* --- Full Image Lightbox with ZOOM (المطور والمضمون) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-black"
            style={{ touchAction: 'none' }} // يمنع تداخل حركات المتصفح مع الزووم
          >
            {/* زر الإغلاق - مع التأكد من أنه فوق كل شيء */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 left-8 p-4 rounded-full z-[600] bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X size={35} />
            </button>

            {/* منطقة العرض - تأكدنا من الأبعاد الصريحة */}
            <div className="relative w-screen h-screen flex items-center justify-center">
                <QuickPinchZoom 
                    ref={pinchZoomRef}
                    onUpdate={onUpdate} 
                    enforceBounds={true}
                    draggableUnZoomed={false}
                    minZoom={1}
                    maxZoom={5}
                >
                    {/* الحاوية التي يتم تحويلها (Transform) */}
                    <div 
                      ref={imgRef} 
                      className="flex items-center justify-center w-full h-full"
                    >
                        <img
                            src={galleryImages[currentImageIndex]}
                            alt="Full View"
                            className="max-w-[95vw] max-h-[85vh] object-contain shadow-2xl rounded-lg"
                            style={{ 
                                pointerEvents: 'auto',
                                userSelect: 'none',
                                WebkitUserDrag: 'none',
                                display: 'block'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </QuickPinchZoom>
            </div>

            {/* التنقل بين الصور */}
            <div className="absolute bottom-10 flex gap-4 z-[600] bg-white/5 p-3 rounded-full backdrop-blur-xl border border-white/10">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setCurrentImageIndex(i); 
                  }}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-accent scale-125' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// مكونات مساعدة
const ContactIcon = ({ icon, label, href }) => (
  <motion.a whileHover={{ y: -8 }} href={href} target="_blank" className="flex flex-col items-center gap-3 w-full">
    <div className="w-full aspect-square flex items-center justify-center rounded-2xl bg-accent/5 border border-accent text-accent shadow-xl">{icon}</div>
    <span className="text-[18px] font-black uppercase tracking-widest">{label}</span>
  </motion.a>
);

const DetailBox = ({ title, content }) => (
  <div className="mb-8">
    <h5 className="text-accent font-extrabold text-xl md:text-2xl mb-4 pr-3">{title}</h5>
    <p className="text-lg leading-relaxed opacity-90 italic">{content}</p>
  </div>
);

const ProjectImg = ({ src, onClick }) => (
    <div className="aspect-video rounded-3xl overflow-hidden border-2 border-accent/20 shadow-xl bg-white/5 cursor-pointer hover:border-accent transition-all hover:scale-[1.02]">
        <img src={src} alt="Project" className="w-full h-full object-cover" onClick={onClick} />
    </div>
);

export default App;