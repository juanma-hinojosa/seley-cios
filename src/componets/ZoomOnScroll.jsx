import React, { useEffect, useRef, useState } from 'react';
import '../css/components/ZoomOnScroll.css';

const ZoomOnScroll = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Se activa cuando el 10% de la imagen está visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className={`zoom-container ${isInView ? 'zoom-active' : ''}`} ref={imgRef}>
      <img src={src} alt={alt} className="zoom-image" />
    </div>
  );
};

export default ZoomOnScroll;
