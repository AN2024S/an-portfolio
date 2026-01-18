import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/constants';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] ${darkMode ? 'bg-[#05070A]/80' : 'bg-white/80'} backdrop-blur-xl border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="w-1/3 flex justify-start">
            <motion.div className="flex flex-col items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/aa.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-accent -mt-2 uppercase italic leading-none">
                devel<span className={darkMode ? 'text-white' : 'text-slate-900'}>oper</span>
              </span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center justify-center gap-2 bg-white/5 p-1 rounded-full border border-white/20">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="px-6 py-2 text-sm font-bold tracking-widest hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex w-1/3 justify-end">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-full text-accent">
              {darkMode ? <Sun size={30} /> : <Moon size={30} />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-accent">
              {darkMode ? <Sun size={26} /> : <Moon size={26} />}
            </motion.button>
            <button className="p-2 text-accent" onClick={() => setIsMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed inset-0 z-[200] bg-[#05070A] flex flex-col items-center justify-center gap-10 text-3xl font-black md:hidden text-white"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 left-8 text-accent"><X size={40} /></button>
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;