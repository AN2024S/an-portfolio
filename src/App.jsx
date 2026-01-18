import React, { useState } from 'react';
import { useProjectGallery } from './hooks/useProjectGallery';
import { projectData } from './data/constants';

// استيراد المكونات (Layout, Home, UI)
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import ProjectsSection from './components/home/Projects';
import SkillsSection from './components/home/Skills';
import Footer from './components/layout/Footer';
import { ProjectDetailsModal, LightboxModal } from './components/ui/Modals';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  // استدعاء كل المنطق بذكاء من الـ Hook
  const gallery = useProjectGallery();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#05070A] text-white' : 'bg-white text-slate-900'} font-sans rtl`}>
      <CustomCursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <ProjectsSection 
          darkMode={darkMode} 
          projectData={projectData} 
          onSelectProject={gallery.setSelectedProject} 
        />
        <SkillsSection darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      {/* النوافذ المنبثقة تأخذ بياناتها من الـ Hook */}
      <ProjectDetailsModal 
        selectedProject={gallery.selectedProject} 
        darkMode={darkMode} 
        onClose={() => gallery.setSelectedProject(null)}
        onImageSelect={gallery.handleOpenGallery}
      />

      <LightboxModal 
        selectedImage={gallery.selectedImage}
        galleryImages={gallery.galleryImages}
        currentImageIndex={gallery.currentImageIndex}
        pinchZoomRef={gallery.pinchZoomRef}
        onUpdate={gallery.onUpdate}
        imgRef={gallery.imgRef}
        onClose={() => gallery.setSelectedImage(null)}
        setCurrentImageIndex={gallery.setCurrentImageIndex}
      />
    </div>
  );
};

export default App;