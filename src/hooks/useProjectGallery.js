import { useState, useEffect, useCallback, useRef } from 'react';
import { make3dTransformValue } from 'react-quick-pinch-zoom';

export const useProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  const imgRef = useRef();
  const pinchZoomRef = useRef();

  // منطق تحويل الزووم
  const onUpdate = useCallback(({ x, y, scale }) => {
    if (imgRef.current) {
      const value = make3dTransformValue({ x, y, scale });
      imgRef.current.style.setProperty('transform', value);
    }
  }, []);

  // التحكم في التمرير (Scroll Lock)
  useEffect(() => {
    document.body.style.overflow = (selectedProject || selectedImage) ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject, selectedImage]);

  // إعادة ضبط الزووم
  useEffect(() => {
    if (pinchZoomRef.current) {
      pinchZoomRef.current.scaleTo({ scale: 1, x: 0, y: 0 });
    }
  }, [currentImageIndex]);

  const handleOpenGallery = (index) => {
    if (selectedProject) {
      setGalleryImages([selectedProject.image, selectedProject.codeImg]);
      setCurrentImageIndex(index);
      setSelectedImage(true);
    }
  };

  return {
    selectedProject, setSelectedProject,
    selectedImage, setSelectedImage,
    currentImageIndex, setCurrentImageIndex,
    galleryImages, imgRef, pinchZoomRef,
    onUpdate, handleOpenGallery
  };
};