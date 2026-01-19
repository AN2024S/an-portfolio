import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ darkMode, t, lang }) => {
  return (
    <section id="home" className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto text-center">
      {/* الخلفية المضيئة */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 w-full max-w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px]"></div>
      
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        {/* الصورة الشخصية */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-10">
          <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-12 opacity-80"></div>
          <img 
            src="/an.jpg" 
            alt="Abdullah" 
            className="relative w-full h-full object-cover object-[center_25%] rounded-[2.5rem] border-2 border-accent/30 p-1.5 bg-[#05070A] shadow-2xl transition-all"
          />
        </div>

        {/* الاسم: نستخدم الخط الفني للعربية مع زيادة الحجم قليلاً للجمالية */}
        <h2 className={`mb-10 tracking-tighter leading-tight ${
          lang === 'ar' 
            ? 'arabic-calligraphy text-6xl md:text-9xl' 
            : 'text-5xl md:text-8xl font-black'
        }`}>
          {lang === 'ar' ? (
            <>عبدالله <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">نديـش</span></>
          ) : (
            <>Abdullah <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">Nadeesh</span></>
          )}
        </h2>

        {/* الوصف: نستخدم الوزن المتوسط من خط Tajawal لسهولة القراءة */}
        <p className={`max-w-3xl mx-auto text-lg md:text-2xl mb-20 leading-relaxed font-medium ${
          darkMode ? 'text-slate-200' : 'text-slate-900'
        }`}>
          {t.sub}
        </p>

        {/* الأزرار المترجمة */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-10 py-5 bg-accent text-primary font-bold rounded-2xl shadow-xl shadow-accent/20 transition-transform hover:scale-105 active:scale-95"
          >
            {t.viewWork}
          </a>
          
          <a 
            href="/cv.pdf" 
            download 
            className={`w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-3 font-bold rounded-2xl border-2 transition-all hover:bg-accent/10 active:scale-95 ${
              darkMode 
                ? 'bg-white/5 border-accent text-white' 
                : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            {t.cvBtn}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;