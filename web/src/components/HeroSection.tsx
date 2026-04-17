import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useLanguage } from '../i18n';

function useParticleBackground(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create particles
    const COUNT = 600;
    const positions = new Float32Array(COUNT * 3);
    const velocities: { vx: number; vy: number; vz: number }[] = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities.push({
        vx: (Math.random() - 0.5) * 0.004,
        vy: (Math.random() - 0.5) * 0.004,
        vz: (Math.random() - 0.5) * 0.002,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Mix gold and red particles
    const colors = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const isGold = Math.random() > 0.5;
      if (isGold) {
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.84;
        colors[i * 3 + 2] = 0.0;
      } else {
        colors[i * 3] = 0.55;
        colors[i * 3 + 1] = 0.0;
        colors[i * 3 + 2] = 0.0;
      }
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.001;

      const pos = geometry.attributes.position as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;

      for (let i = 0; i < COUNT; i++) {
        arr[i * 3] += velocities[i].vx + Math.sin(time + i) * 0.001;
        arr[i * 3 + 1] += velocities[i].vy + Math.cos(time + i * 0.7) * 0.001;
        arr[i * 3 + 2] += velocities[i].vz;

        // Wrap around
        if (arr[i * 3] > 7) arr[i * 3] = -7;
        if (arr[i * 3] < -7) arr[i * 3] = 7;
        if (arr[i * 3 + 1] > 5) arr[i * 3 + 1] = -5;
        if (arr[i * 3 + 1] < -5) arr[i * 3 + 1] = 5;
        if (arr[i * 3 + 2] > 3) arr[i * 3 + 2] = -3;
        if (arr[i * 3 + 2] < -3) arr[i * 3 + 2] = 3;
      }

      pos.needsUpdate = true;
      particles.rotation.y = time * 0.05;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [canvasRef]);
}

export function HeroSection() {
  const { t, language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const partyRef = useRef<HTMLDivElement>(null);

  useParticleBackground(canvasRef);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (partyRef.current) {
      tl.fromTo(partyRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }

    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = '';
      const chars = text.split('');
      chars.forEach((ch) => {
        const span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(40px)';
        headlineRef.current!.appendChild(span);
      });

      tl.to(headlineRef.current.querySelectorAll('span'), {
        opacity: 1,
        y: 0,
        duration: 0.04,
        stagger: 0.03,
        ease: 'power3.out',
      }, '-=0.2');
    }

    if (subRef.current) {
      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );
    }

    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.2'
      );
    }
  }, [language]);

  const scrollToStats = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-tvk-dark">
      {/* Three.js canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.15) 0%, rgba(10,10,10,0.85) 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Party name */}
        <div
          ref={partyRef}
          className="mb-6 opacity-0"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-tvk-gold/40 text-tvk-gold text-xs md:text-sm font-semibold tracking-widest uppercase">
            {t.hero.party}
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-white"
          style={{ fontFamily: language === 'ta' ? "'Noto Serif Tamil', serif" : "'Inter', sans-serif" }}
        >
          {t.hero.headline}
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-base md:text-xl text-white/70 mb-8 opacity-0"
          style={{ fontFamily: language === 'ta' ? "'Noto Sans Tamil', sans-serif" : "'Inter', sans-serif" }}
        >
          {t.hero.subheadline}
        </p>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={scrollToStats}
          className="relative opacity-0 px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-bold text-black rounded-full overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-95 glow-gold"
          style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
          aria-label={t.hero.cta}
        >
          {t.hero.cta}
        </button>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>{t.hero.scroll}</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #8B0000, transparent)' }}
      />
    </section>
  );
}
