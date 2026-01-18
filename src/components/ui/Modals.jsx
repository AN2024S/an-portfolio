import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import QuickPinchZoom from 'react-quick-pinch-zoom';
import { DetailBox, ProjectImg } from './Shared';

export const ProjectDetailsModal = ({ selectedProject, darkMode, onClose, onImageSelect }) => (
  <AnimatePresence>
    {selectedProject && (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className={`fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-8 ${darkMode ? 'bg-black/95' : 'bg-white/90'} backdrop-blur-md`}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
          className={`max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 rounded-[2.5rem] ${darkMode ? 'bg-[#05070A] text-white border-white/10' : 'bg-white text-slate-900 border-slate-200 shadow-2xl'} relative border custom-scrollbar`}
        >
          <button onClick={onClose} className="absolute top-6 left-6 p-3 hover:text-accent z-50 rounded-full bg-white/5"><X size={32} /></button>
          <div className="text-center mt-8 mb-12"><h3 className="text-4xl md:text-6xl font-black text-accent">{selectedProject.title}</h3></div>
          <div className="flex flex-col gap-12 items-center">
            <div className="w-full max-w-3xl space-y-10">
              <DetailBox title="المشكلة السابقة" content={selectedProject.problem} />
              <DetailBox title="الحل التقني" content={selectedProject.solution} />
            </div>
            <div className={`w-full max-w-4xl p-8 rounded-3xl border ${darkMode ? 'bg-accent/5 border-accent/20' : 'bg-slate-50 border-slate-200'}`}>
              <h5 className="text-accent font-black text-xl mb-6">مثال من الكود النظيف</h5>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-left" dir="ltr">{selectedProject.codeSnippet}</pre>
            </div>
            <div className="w-full max-w-4xl text-center">
              <h5 className="text-accent font-extrabold text-2xl mb-8">صور من المشروع</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <ProjectImg src={selectedProject.image} onClick={() => onImageSelect(0)} />
                <ProjectImg src={selectedProject.codeImg} onClick={() => onImageSelect(1)} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const LightboxModal = ({ selectedImage, galleryImages, currentImageIndex, pinchZoomRef, onUpdate, imgRef, onClose, setCurrentImageIndex }) => (
  <AnimatePresence>
    {selectedImage && (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-black"
        style={{ touchAction: 'none' }}
      >
        <button onClick={onClose} className="absolute top-8 left-8 p-4 rounded-full z-[600] bg-white/10 text-white hover:bg-white/20 transition-all">
          <X size={35} />
        </button>
        <div className="relative w-screen h-screen flex items-center justify-center">
          <QuickPinchZoom ref={pinchZoomRef} onUpdate={onUpdate} enforceBounds={true} minZoom={1} maxZoom={5}>
            <div ref={imgRef} className="flex items-center justify-center w-full h-full">
              <img src={galleryImages[currentImageIndex]} alt="Full View" className="max-w-[95vw] max-h-[85vh] object-contain shadow-2xl rounded-lg" style={{ pointerEvents: 'auto', display: 'block' }} />
            </div>
          </QuickPinchZoom>
        </div>
        <div className="absolute bottom-10 flex gap-4 z-[600] bg-white/5 p-3 rounded-full backdrop-blur-xl border border-white/10">
          {galleryImages.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }} className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-accent scale-125' : 'bg-white/30'}`} />
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);