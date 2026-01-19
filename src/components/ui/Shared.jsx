import React from 'react';
import { motion } from 'framer-motion';

export const ContactIcon = ({ icon, label, href }) => (
  <motion.a 
    whileHover={{ y: -8 }} 
    href={href} 
    target="_blank" 
    className="flex flex-col items-center gap-3 w-full"
  >
    <div className="w-full aspect-square flex items-center justify-center rounded-2xl bg-accent/5 border border-accent text-accent shadow-xl">
      {icon}
    </div>
    <span className="text-[18px] font-black uppercase tracking-widest">{label}</span>
  </motion.a>
);

export const DetailBox = ({ title, content }) => (
  <div className="mb-8">
    {/* تم تغيير pr-3 إلى ps-3 (Padding Start) لتناسب العربية والإنجليزية */}
    <h5 className="text-accent font-extrabold text-xl md:text-2xl mb-4 ps-3 border-s-4 border-accent">
      {title}
    </h5>
    <p className="text-lg leading-relaxed opacity-90 italic">{content}</p>
  </div>
);

export const ProjectImg = ({ src, onClick }) => (
  <div className="aspect-video rounded-3xl overflow-hidden border-2 border-accent/20 shadow-xl bg-white/5 cursor-pointer hover:border-accent transition-all hover:scale-[1.02]">
    <img 
      src={src} 
      alt="Project" 
      className="w-full h-full object-cover" 
      onClick={onClick} 
    />
  </div>
);