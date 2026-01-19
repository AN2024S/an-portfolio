import React from 'react';
import { Phone, Send, Mail, MessageCircle } from 'lucide-react';
import { ContactIcon } from '../ui/Shared';

const Footer = ({ darkMode, t }) => {
  return (
    <footer id="contact" className={`py-14 px-6 border-t transition-colors duration-500 ${
      darkMode 
        ? 'border-white/5 bg-gradient-to-b from-transparent to-accent/5 text-white' 
        : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* العنوان المترجم */}
        <h2 className="text-4xl md:text-7xl font-black mb-20 tracking-tighter leading-tight">
          {t.title}
        </h2>

        {/* أيقونات التواصل مع المسميات المترجمة */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-8 md:gap-9 mb-14 items-center max-w-[280px] md:max-w-none mx-auto">
          <ContactIcon 
            icon={<Phone size={32}/>} 
            label={t.phone} 
            href="tel:+967771262667" 
          />
          <ContactIcon 
            icon={<Mail size={32}/>} 
            label={t.email} 
            href="mailto:an206sh@gmail.com" 
          />
          <ContactIcon 
            icon={<Send size={32}/>} 
            label={t.telegram} 
            href="https://t.me/A_N_206" 
          />
          <ContactIcon 
            icon={<MessageCircle size={32}/>} 
            label={t.whatsapp} 
            href="https://wa.me/967771262667" 
          />
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-sm opacity-50 tracking-widest font-bold">
            DEVELOPED BY ENG. ABDULLAH NADEESH © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;