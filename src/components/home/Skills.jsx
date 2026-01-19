import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ darkMode, skillCategories, t }) => {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      {/* رأس القسم المترجم */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
          {t.title} <span className="text-accent">{t.subtitle}</span>
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            /* هنا تم استخدام نفس كلاسات "إطار المشاريع" التي طلبتها */
            className={`p-8 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] ${
              darkMode 
                ? 'bg-white/[0.03] border-accent/90' 
                : 'bg-white border-slate-300 shadow-xl'
            } relative group flex flex-col items-center text-center`}
          >
            {/* الأيقونة العلوية */}
            <div className="mb-6 p-4 bg-accent/10 rounded-full text-accent shadow-lg group-hover:scale-110 transition-transform">
              {category.icon}
            </div>

            {/* اسم فئة المهارات */}
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              {category.title}
            </h3>

            {/* قائمة المهارات الفرعية */}
            <div className="flex flex-wrap gap-2 justify-center mt-auto w-full">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-bold bg-accent/5 border border-accent/10 rounded-xl text-accent/90 hover:bg-accent/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;