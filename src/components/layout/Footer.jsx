import React from 'react';
import { Phone, Send, Mail, MessageCircle } from 'lucide-react';
import { ContactIcon } from '../ui/Shared';

const Footer = ({ darkMode }) => {
  return (
    <footer id="contact" className={`py-14 px-6 border-t ${darkMode ? 'border-white/5 bg-gradient-to-b from-transparent to-accent/5' : 'bg-white border-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-black mb-20 tracking-tighter leading-tight">هل لديك فكرة لمشروع؟</h2>
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-8 md:gap-9 mb-14 items-center max-w-[280px] md:max-w-none mx-auto">
          <ContactIcon icon={<Phone size={32}/>} label="الهاتف" href="tel:+967771262667" />
          <ContactIcon icon={<Mail size={32}/>} label="الايميل" href="mailto:an206sh@gmail.com" />
          <ContactIcon icon={<Send size={32}/>} label="تليجرام" href="https://t.me/A_N_206" />
          <ContactIcon icon={<MessageCircle size={32}/>} label="واتساب" href="https://wa.me/967771262667" />
        </div>
        <p className="py-14 text-sm opacity-50">Developer By Engineer Abdullah Nadeesh ©2025</p>
      </div>
    </footer>
  );
};

export default Footer;