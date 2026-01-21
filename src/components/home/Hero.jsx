import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ darkMode, t, lang }) => {
  return (
    // تقليل pt-40 إلى pt-24 في الجوال و pb-32 إلى pb-16 لرفع المحتوى
    <section id="home" className="relative pt-26 pb-16 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto text-center">
      {/* الخلفية المضيئة - تصغير حجمها في الجوال */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 -z-10 w-full max-w-[300px] md:max-w-[600px] h-[300px] md:h-[400px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        {/* الصورة الشخصية - تصغير الحجم في الجوال mb-6 بدلاً من mb-10 */}
        <div className="relative w-28 h-28 md:w-48 md:h-48 mx-auto mb-6 md:mb-10">
          <div className="absolute inset-0 bg-accent rounded-[2.2rem] md:rounded-[3rem] rotate-12 opacity-80"></div>
          <img 
            src="/an.jpg" 
            alt="Abdullah" 
            className="relative w-full h-full object-cover object-[center_25%] rounded-[1.8rem] md:rounded-[2.5rem] border-2 border-accent/30 p-1 md:p-1.5 bg-[#05070A] shadow-2xl transition-all"
          />
        </div>

        {/* الاسم - تصغير الحجم في الجوال لضمان عدم كسر السطر بشكل سيء */}
        <h2 className={`mb-6 md:mb-10 tracking-tighter leading-tight ${
          lang === 'ar' 
            ? 'arabic-calligraphy text-5xl md:text-9xl' 
            : 'text-4xl md:text-8xl font-black'
        }`}>
          {lang === 'ar' ? (
            <>عبدالله <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">نديـش</span></>
          ) : (
            <>Abdullah <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">Nadeesh</span></>
          )}
        </h2>

        {/* الوصف - تصغير text-lg إلى text-base في الجوال وتقليل الهامش السفلي mb-20 إلى mb-12 */}
        <p className={`max-w-2xl mx-auto text-base md:text-2xl mb-12 md:mb-20 leading-relaxed font-medium ${
          darkMode ? 'text-slate-200' : 'text-slate-900'
        }`}>
          {t.sub}
        </p>

        {/* الأزرار - تقليل الحشو px/py في الجوال لضغط المساحة العمودية */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-accent text-primary font-bold rounded-xl md:rounded-2xl shadow-xl shadow-accent/20 transition-transform hover:scale-105 active:scale-95"
          >
            {t.viewWork}
          </a>
          
          <a 
            href="/cv.pdf" 
            download 
            className={`w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 flex items-center justify-center gap-3 font-bold rounded-xl md:rounded-2xl border-2 transition-all hover:bg-accent/10 active:scale-95 ${
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