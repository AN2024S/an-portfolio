import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/constants';

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="py-3.5 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-7 px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">المهارات <span className="text-accent">التقنية</span></h2>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-accent/30 to-transparent"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {skillCategories.map((cat, i) => (
          <motion.div key={i} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} viewport={{ once: true }}
            className={`p-8 rounded-[2rem] border ${darkMode ? 'bg-white/[0.03] border-accent/90' : 'bg-white border-slate-200 shadow-lg'}`}
          >
            <div className="text-accent mb-6 flex items-center gap-3">{cat.icon}<h4 className="font-black text-sm uppercase tracking-widest">{cat.title}</h4></div>
            <div className="flex flex-wrap gap-3 justify-center mt-auto pt-6">
              {cat.skills.map(s => (<span key={s} className="px-3 py-1.5 bg-accent/10 text-accent/80 text-[13px] font-bold rounded-lg border border-accent/10">{s}</span>))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;