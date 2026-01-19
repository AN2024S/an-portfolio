import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Languages } from 'lucide-react'; // أضفنا أيقونة Languages

const Navbar = ({ darkMode, setDarkMode, lang, toggleLanguage, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // مصفوفة الروابط المترجمة ديناميكياً بناءً على الـ Props
  const dynamicNavLinks = [
    { name: t.home, id: 'home' },
    { name: t.projects, id: 'projects' },
    { name: t.skills, id: 'skills' },
    { name: t.contact, id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] ${darkMode ? 'bg-[#05070A]/80' : 'bg-white/80'} backdrop-blur-xl border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="w-1/3 flex justify-start">
            <motion.div className="flex flex-col items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/aa.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-accent -mt-2 uppercase italic leading-none">
                devel<span className={darkMode ? 'text-white' : 'text-slate-900'}>oper</span>
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation (المترجمة) */}
          <div className="hidden md:flex items-center justify-center gap-2 bg-white/5 p-1 rounded-full border border-white/20">
            {dynamicNavLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="px-6 py-2 text-sm font-bold tracking-widest hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions (Language + Theme) */}
          <div className="hidden md:flex w-1/3 justify-end items-center gap-4">
            {/* زر تبديل اللغة */}
            <motion.button 
              whileTap={{ scale: 0.9 }} 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-black transition-all ${
                darkMode ? 'border-accent/30 text-accent bg-accent/5' : 'border-slate-300 text-slate-700 bg-slate-50'
              }`}
            >
              <Languages size={18} />
              {lang === 'ar' ? 'EN' : 'AR'}
            </motion.button>

            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-full text-accent">
              {darkMode ? <Sun size={30} /> : <Moon size={30} />}
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {/* زر تبديل اللغة للجوال */}
            <motion.button 
              whileTap={{ scale: 0.9 }} 
              onClick={toggleLanguage}
              className="p-2 text-accent font-bold text-sm"
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </motion.button>

            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-accent">
              {darkMode ? <Sun size={26} /> : <Moon size={26} />}
            </motion.button>
            
            <button className="p-2 text-accent" onClick={() => setIsMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: lang === 'ar' ? '100%' : '-100%' }} // يتحرك بناءً على اتجاه اللغة
            animate={{ x: 0 }} 
            exit={{ x: lang === 'ar' ? '100%' : '-100%' }}
            className={`fixed inset-0 z-[200] ${darkMode ? 'bg-[#05070A]' : 'bg-white'} flex flex-col items-center justify-center gap-10 text-3xl font-black md:hidden ${darkMode ? 'text-white' : 'text-slate-900'}`}
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className={`absolute top-8 ${lang === 'ar' ? 'left-8' : 'right-8'} text-accent`}
            >
              <X size={40} />
            </button>

            {dynamicNavLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}

            {/* زر لغة إضافي داخل القائمة الجانبية */}
            <button 
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
              className="text-lg border border-accent px-6 py-2 rounded-full text-accent"
            >
              {lang === 'ar' ? 'English Version' : 'النسخة العربية'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;