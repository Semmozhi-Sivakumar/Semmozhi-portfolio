import { useEffect, useRef } from 'react';
import './GalaxyBackground.css';

const GalaxyBackground = ({ density = 1, glowOpacity = 0.04 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // State refs for animation loop
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 };
    let animationFrameId = null;
    let stars = [];
    let isVisible = false;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Parallax configuration
    const layers = [
      { speed: 0.015, count: Math.floor(120 * density), minRadius: 0.2, maxRadius: 0.8 }, 
      { speed: 0.035, count: Math.floor(60 * density), minRadius: 0.8, maxRadius: 1.5 },  
      { speed: 0.065, count: Math.floor(30 * density), minRadius: 1.5, maxRadius: 2.5 }   
    ];

    const initStars = () => {
      stars = [];
      const isMobile = window.innerWidth <= 768;
      
      layers.forEach(layer => {
        const count = isMobile ? Math.floor(layer.count / 2) : layer.count;
        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            baseX: Math.random() * canvas.width,
            baseY: Math.random() * canvas.height,
            radius: layer.minRadius + Math.random() * (layer.maxRadius - layer.minRadius),
            speed: layer.speed,
            alpha: 0.1 + Math.random() * 0.7
          });
        }
      });
    };

    const handleResize = (entries) => {
      for (let entry of entries) {
        if (entry.target === canvas.parentElement) {
          canvas.width = entry.contentRect.width;
          canvas.height = entry.contentRect.height;
          mouse.targetX = canvas.width / 2;
          mouse.targetY = canvas.height / 2;
          initStars();
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          animate();
        } else if (!isVisible && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      });
    }, { threshold: 0 });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
      intersectionObserver.observe(canvas.parentElement);
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initStars();
    }

    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    const handleMouseMove = (e) => {
      if (prefersReducedMotion.matches || isTouchDevice) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const animate = () => {
      if (!isVisible) return; // double check

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw mouse radial glow
      if (!prefersReducedMotion.matches && window.innerWidth > 768) {
        const glowRadius = 400;
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
        gradient.addColorStop(0, `rgba(229, 9, 20, ${glowOpacity * 2})`); 
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw static ambient nebula (subtle red)
      const ambientGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width);
      ambientGradient.addColorStop(0, `rgba(176, 0, 32, ${glowOpacity})`);
      ambientGradient.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = ambientGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate auto-drift for mobile/static movement
      const time = Date.now();
      const autoDriftX = isTouchDevice ? time * 0.005 : time * 0.001;
      const autoDriftY = isTouchDevice ? time * 0.005 : time * 0.001;

      // Draw and update stars
      stars.forEach(star => {
        const offsetX = (mouse.x - centerX) * star.speed + (autoDriftX * star.speed);
        const offsetY = (mouse.y - centerY) * star.speed + (autoDriftY * star.speed);

        let drawX = (star.baseX - offsetX) % canvas.width;
        let drawY = (star.baseY - offsetY) % canvas.height;

        if (drawX < 0) drawX += canvas.width;
        if (drawY < 0) drawY += canvas.height;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 245, ${star.alpha})`; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (canvas.parentElement) {
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
      }
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [density, glowOpacity]);

  return <canvas ref={canvasRef} className="galaxy-canvas" aria-hidden="true" />;
};

export default GalaxyBackground;
