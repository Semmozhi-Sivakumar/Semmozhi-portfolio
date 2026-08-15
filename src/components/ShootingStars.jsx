import { useEffect, useRef } from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let stars = [];
    let lastSpawnTime = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class ShootingStar {
      constructor() {
        // Start either top-left or top-right
        this.direction = Math.random() > 0.5 ? 1 : -1; 
        
        if (this.direction === 1) {
          // Top-left moving to bottom-right
          this.x = Math.random() * canvas.width * 0.5 - 200;
          this.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // ~45 deg
        } else {
          // Top-right moving to bottom-left
          this.x = canvas.width - (Math.random() * canvas.width * 0.5 - 200);
          this.angle = (Math.PI * 3) / 4 + (Math.random() * 0.2 - 0.1); // ~135 deg
        }
        
        this.y = Math.random() * -100 - 50; // Start slightly above screen
        
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 4 + 4;
        this.size = Math.random() * 1.5 + 0.8;
        this.opacity = 0;
        this.state = 'fade-in'; 
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed * 2;
        this.y += Math.sin(this.angle) * this.speed * 2;

        if (this.state === 'fade-in') {
          this.opacity += 0.05;
          if (this.opacity >= 1) {
            this.opacity = 1;
            this.state = 'visible';
          }
        } else if (this.state === 'visible') {
          // Trigger fade out when approaching lower screen boundaries
          if (this.y > canvas.height - 100 || this.x < -100 || this.x > canvas.width + 100) {
            this.state = 'fade-out';
          }
        } else if (this.state === 'fade-out') {
          this.opacity -= 0.03;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        
        // Draw head
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        
        // Draw subtle crimson glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(229, 9, 20, 0.3)';
        ctx.fill();

        // Draw tail
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;
        
        const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.1, 'rgba(229, 9, 20, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.lineWidth = this.size;
        ctx.strokeStyle = gradient;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const animate = (timestamp) => {
      if (prefersReducedMotion.matches) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isMobile = window.innerWidth <= 768;
      const maxStars = isMobile ? 1 : 3;
      const spawnInterval = isMobile ? 5000 + Math.random() * 5000 : 3000 + Math.random() * 4000;

      if (stars.length < maxStars && timestamp - lastSpawnTime > spawnInterval) {
        stars.push(new ShootingStar());
        lastSpawnTime = timestamp;
      }

      stars.forEach((star, index) => {
        star.update();
        star.draw(ctx);
        if (star.opacity <= 0 && star.state === 'fade-out') {
          stars.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="shooting-stars-canvas" aria-hidden="true" />;
};

export default ShootingStars;
