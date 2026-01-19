import React, { useState, useEffect, useCallback, useRef } from 'react';
import { make3dTransformValue } from 'react-quick-pinch-zoom';

// استيراد المكونات التنظيمية (Layout)
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// استيراد أقسام الصفحة (Home Sections)
import Hero from './components/home/Hero';
import ProjectsSection from './components/home/Projects';
import SkillsSection from './components/home/Skills';

// استيراد النوافذ المنبثقة (UI Modals)
import { ProjectDetailsModal, LightboxModal } from './components/ui/Modals';

// استيراد البيانات الثابتة
import { projectData, skillCategories, translations } from './data/constants';

const App = () => {
  // --- حالات التحكم (States) ---
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'ar');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  // --- مراجع التحكم في الزووم (Refs) ---
  const imgRef = useRef();
  const pinchZoomRef = useRef();

  // --- منطق تبديل اللغة ---
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  // جلب النصوص والبيانات بناءً على اللغة الحالية
  const t = translations[lang];
  const currentProjects = projectData(lang);
  const currentSkills = skillCategories(lang);

  // --- دالة تحديث تحويلات التكبير (Zoom Logic) ---
  const onUpdate = useCallback(({ x, y, scale }) => {
    if (imgRef.current) {
      const value = make3dTransformValue({ x, y, scale });
      imgRef.current.style.setProperty('transform', value);
    }
  }, []);

  // --- منع التمرير عند فتح النوافذ ---
  useEffect(() => {
    if (selectedProject || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject, selectedImage]);

  // --- إعادة ضبط الزووم عند تغيير الصورة ---
  useEffect(() => {
    if (pinchZoomRef.current) {
      pinchZoomRef.current.scaleTo({ scale: 1, x: 0, y: 0 });
    }
  }, [currentImageIndex]);

  // --- دالة فتح معرض الصور ---
  const handleOpenGallery = (index) => {
    if (selectedProject) {
      setGalleryImages([selectedProject.image, selectedProject.codeImg]);
      setCurrentImageIndex(index);
      setSelectedImage(true); 
    }
  };

  return (
    <div 
      className={`min-h-screen ${darkMode ? 'bg-[#05070A] text-white' : 'bg-white text-slate-900'} font-sans overflow-x-hidden transition-colors duration-500`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <CustomCursor />
      
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        t={t.nav}
      />

      <main>
        <Hero darkMode={darkMode} t={t.hero} lang={lang} />
        
        {/* تم إضافة lang={lang} هنا لضمان عمل "عكس الأيقونات" في الكروت */}
        <ProjectsSection 
          darkMode={darkMode} 
          projectData={currentProjects} 
          onSelectProject={setSelectedProject} 
          t={t.projects}
          lang={lang} 
        />
        
        <SkillsSection 
          darkMode={darkMode} 
          skillCategories={currentSkills} 
          t={t.skills} 
        />
      </main>

      <Footer darkMode={darkMode} t={t.contact} />

      <ProjectDetailsModal 
        selectedProject={selectedProject} 
        darkMode={darkMode} 
        onClose={() => setSelectedProject(null)}
        onImageSelect={handleOpenGallery}
        t={t.projects} 
        lang={lang} 
      />

      <LightboxModal 
        selectedImage={selectedImage}
        galleryImages={galleryImages}
        currentImageIndex={currentImageIndex}
        pinchZoomRef={pinchZoomRef}
        onUpdate={onUpdate}
        imgRef={imgRef}
        onClose={() => setSelectedImage(null)}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default App;