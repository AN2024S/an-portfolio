import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = ({ darkMode, projectData, onSelectProject, t, lang }) => {
  return (
    <section id="projects" className="py-3.5 px-6 max-w-7xl mx-auto">
      {/* رأس القسم المترجم */}
      <div className="flex items-center gap-4 mb-7">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
          {t.title} <span className="text-accent">{t.subtitle}</span>
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projectData.map((project, i) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 rounded-[2rem] border transition-all duration-300 hover:scale-[1.02] ${
              darkMode ? 'bg-white/[0.03] border-accent/90' : 'bg-white border-slate-300 shadow-xl'
            } relative group text-center flex flex-col items-center`}
          >
            {/* الجزء العلوي: التحكم في الاتجاه يدوياً
               في العربية: flex-row-reverse تجعل الأيقونة يسار والزر يمين
               في الإنجليزية: flex-row تجعل الأيقونة يمين والزر يسار
            */}
            <div className={`flex justify-between items-center w-full mb-6 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* أيقونة التاج */}
              <div className="p-4 bg-accent/10 rounded-full text-accent shadow-lg flex-shrink-0">
                {project.tagIcon}
              </div>

              {/* زر التفاصيل المترجم */}
              <button 
                onClick={() => onSelectProject(project)} 
                className="px-4 py-2 bg-accent/10 rounded-full text-accent hover:bg-accent hover:text-white transition-all shadow-lg font-bold text-xs"
              >
                {t.viewGallery || "Details"}
              </button>
            </div>

            {/* العنوان والوصف */}
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm opacity-80 mb-10 leading-relaxed line-clamp-2">
              {project.desc}
            </p>

            {/* التقنيات المستخدمة */}
            <div className="flex flex-wrap gap-3 justify-center mt-auto pt-6 border-t border-white/5 w-full">
              {project.techStack.map(tech => (
                <span 
                  key={tech} 
                  className="text-[13px] font-bold text-accent/80 px-2 py-1 bg-accent/10 rounded-md border border-accent/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;